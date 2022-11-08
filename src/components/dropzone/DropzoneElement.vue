<template>
  <div>
    <div
      class="drag-block"
      :class="{ 'in-valid': inValid }"
      @dragover.prevent
      @drop.prevent="uploadFile"
      @click="selectFile"
    >
      <div class="wrapper">
        <UploadIcon />
        <div class="action">
          <p>Drag and drop files</p>
          <p>Browse files</p>
          <input
            multiple
            type="file"
            ref="file"
            class="dropzone-file"
            @change="uploadFile"
          />
        </div>
      </div>
    </div>
    <div v-if="errors.size" class="error-vali">
      {{ errors.size }}
    </div>
    <div v-if="errors.number" class="error-vali">
      {{ errors.number }}
    </div>
    <div v-if="errors.type" class="error-vali">
      {{ errors.type }}
    </div>
  </div>
</template>

<script>
import UploadIcon from "@/components/icons/UploadIcon.vue";

export default {
  components: {
    UploadIcon,
  },
  data() {
    return {
      errors: {
        number: "",
        size: "",
        type: "",
      },
      inValid: false,
    };
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    uploadFile(e) {
      const maxSize = 102400;
      const maxNumber = 3;
      const typeFile = [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-publisher",
        "application/vnd.ms-excel",
        "application/pdf",
        "text/plain",
      ];
      this.errors = {
        number: "",
        size: "",
        type: "",
      };
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      if (files.length > maxNumber) {
        this.errors.number = "The maximum file uploaded is 3";
        this.inValid = true;
      } else this.inValid = false;

      for (let i = 0; i < files.length; i++) {
        if (files[i].size > maxSize) {
          this.errors.size = "The maximum file size is 10 MB";
          this.inValid = true;
        }
        if (!typeFile.includes(files[i].type)) {
          this.errors.type =
            "The type file must be .pdf, .doc, .pub, .xlsx or .txt.";
          this.inValid = true;
        }
      }
      if (!this.inValid) {
        this.$emit("input", files);
      }
    },
  },
};
</script>

<style scoped>
.drag-block {
  height: 232px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  margin-bottom: 17px;
}
.error-vali {
  width: 100%;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #ed5d5d;
  line-height: 20px;
}
.success-vali {
  width: 100%;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #00bd00;
  line-height: 20px;
}
.wrapper {
  margin-top: 30px;
}
/* drag active class*/
.active-dropzone {
  border-color: #1991d2;
  background: rgba(25, 145, 210, 0.1);
}
.in-valid {
  border-color: #ed5d5d;
}
.drag-block:hover {
  cursor: pointer;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
.dropzone-file {
  display: none;
}
.action p {
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 0;
  color: #333333;
}
.action p:first-child {
  font-weight: 700;
}
.action label {
  text-decoration: underline;
  transform: translateY(-4px);
}
.action label:hover {
  text-decoration: underline;
  transform: translateY(-4px);
}
.upload-icon {
  width: 100%;
}
</style>
