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
          <label for="dropzone-file">Browse files</label>
          <input
            multiple
            type="file"
            ref="file"
            id="dropzone-file"
            class="dropzone-file"
            @change="uploadFile"
          />
        </div>
      </div>
    </div>
    <div v-if="inValid" class="error-vali">The maximum file size is 10 MB</div>
    <div v-if="errorType" class="error-vali">
      The type file must be .pdf, .doc, or xls/xlsx
    </div>
    <div v-if="success" class="success-vali">Upload file successfully!!!</div>
  </div>
</template>

<script>
// import { ref } from "vue";
import { ref as refer, uploadBytes } from "firebase/storage";
import UploadIcon from "@/components/icons/UploadIcon.vue";
import { storage } from "@/firebase/firebase.js";

export default {
  components: {
    UploadIcon,
  },
  data() {
    return {
      success: false,
      inValid: false,
      errorType: false,
      fileName: "",
    };
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    uploadFile(e) {
      const maximum = 102400;
      const typeFile = [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-publisher",
        "application/pdf",
        "text/plain",
      ];
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      if (files[0].size > maximum) {
        this.inValid = true;
      } else this.inValid = false;
      if (!typeFile.includes(files[0].type)) {
        this.errorType = true;
      } else this.errorType = false;

      if (!this.inValid && !this.errorType) {
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          let storageRef = refer(storage, "dropzone/" + file.name);
          uploadBytes(storageRef, file).then(() => {
            this.success = true;
          });
        }
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
