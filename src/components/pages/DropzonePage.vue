<template>
  <DropzoneComp
    :fileList="fileList"
    @input="handleRemoveFile"
    @inputUpload="handleUploadFile"
  />
</template>

<script>
import DropzoneComp from "../dropzone/DropzoneComp.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    DropzoneComp,
  },
  created() {
    this.getFileList();
  },
  computed: {
    ...mapGetters({ fileList: "file/fileList" }),
  },
  methods: {
    ...mapActions({
      getFileList: "file/getFileList",
      uploadFile: "file/uploadFile",
      removeFile: "file/removeFile",
    }),
    handleUploadFile(files) {
      this.uploadFile(files);
    },
    handleRemoveFile(name) {
      this.removeFile(name);
    },
  },
};
</script>

<style></style>
