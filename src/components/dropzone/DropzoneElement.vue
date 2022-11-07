<template>
  <div>
    <div
      :class="{ 'in-valid': inValid }"
      class="drag-block"
      @dragenter.prevent="toggleActive"
      @dragleave="toggleActive"
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
  </div>
</template>

<script>
import { ref } from "vue";
// import { ref as refer, uploadBytes } from "firebase/storage";
import UploadIcon from "../icons/UploadIcon.vue";
// import { storage } from "@/firebase/firebase.js";

export default {
  components: {
    UploadIcon,
  },
  data() {
    return {
      inValid: false,
      fileName: "",
    };
  },
  setup() {
    let active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    uploadFile(e) {
      // const storageRef = refer(storage, files[0].name);

      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      if (files[0].size > 10000) {
        this.inValid = true;
      } else this.inValid = false;
      // if (this.isValid) {
      //   uploadBytes(storageRef, files[0]).then(() => {
      //     console.log("Uploaded a blob or file!");
      //   });
      // }
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
  font-family: "Noto Sans";
  font-style: normal;
  width: 100%;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #ed5d5d;
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
  font-family: "Noto Sans";
  font-style: normal;
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
