<template>
  <DropzoneComp
    :fileList="fileList"
    :maxNumber="maxNumber"
    :maxSize="maxSize"
    :typeFile="typeFile"
    @onUpload="onUploadFile"
    @onRemove="onRemoveFile"
    @onSubmit="onSubmitFile"
  />
</template>

<script>
import DropzoneComp from "@/components/dropzone/DropzoneComp.vue";
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
    onUploadFile(files) {
      this.uploadFile(files);
    },
    onRemoveFile(lastModified) {
      this.removeFile(lastModified);
    },
    onSubmitFile() {
      this.submitFile();
    },
  },
};
</script>

<style></style>
