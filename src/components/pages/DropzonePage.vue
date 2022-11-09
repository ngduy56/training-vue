<template>
  <DropzoneComp
    :fileList="fileList"
    :maxNumber="maxNumber"
    :maxSize="maxSize"
    :typeFile="typeFile"
    @inputRemove="handleRemoveFile"
    @inputUpload="handleUploadFile"
    @inputSubmit="handleSubmitFile"
  />
</template>

<script>
import DropzoneComp from "../dropzone/DropzoneComp.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      maxSize: 10240,
      maxNumber: 3,
      typeFile: [
        ".pdf",
        ".doc",
        ".docx",
        ".pub",
        ".xls",
        ".xlsx",
        ".txt",
        ".png",
        ".jpeg",
        ".jpg",
      ],
    };
  },
  components: {
    DropzoneComp,
  },
  computed: {
    ...mapGetters({ fileList: "file/getFileList" }),
  },
  methods: {
    ...mapActions({
      uploadFile: "file/uploadFile",
      removeFile: "file/removeFile",
      submitFile: "file/submitFile",
    }),
    handleUploadFile(files) {
      this.uploadFile(files);
    },
    handleRemoveFile(name) {
      this.removeFile(name);
    },
    handleSubmitFile() {
      this.submitFile();
    },
  },
};
</script>

<style></style>
