<template>
  <DropzoneComp
    :fileList="fileList"
    :maxNumber="maxNumber"
    :maxSize="maxSize"
    :typeFile="typeFile"
    @onRemove="handleRemoveFile"
    @onUpload="handleUploadFile"
    @onSubmit="handleSubmitFile"
  />
</template>

<script>
import DropzoneComp from "../dropzone/DropzoneComp.vue";
import { mapActions, mapGetters } from "vuex";
import {
  MAX_SIZE,
  MAX_NUMBER,
  TYPE_FILE,
} from "@/constants/DropzoneConstants.js";

export default {
  data() {
    return {
      maxSize: MAX_SIZE,
      maxNumber: MAX_NUMBER,
      typeFile: TYPE_FILE,
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
    handleRemoveFile(lastModified) {
      this.removeFile(lastModified);
    },
    handleSubmitFile() {
      this.submitFile();
    },
  },
};
</script>

<style></style>
