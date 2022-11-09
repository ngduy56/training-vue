<template>
  <DropzoneComp
    :fileList="fileList"
    @inputRemove="handleRemoveFile"
    @inputUpload="handleUploadFile"
    @inputSubmit="handleSubmitFile"
  />
</template>

<script>
import DropzoneComp from "../dropzone/DropzoneComp.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    DropzoneComp,
  },
  computed: {
    ...mapGetters({ fileList: "file/fileList" }),
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
