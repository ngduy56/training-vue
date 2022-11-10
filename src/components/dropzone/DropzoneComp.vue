<template>
  <div class="main">
    <DropzoneElement
      @onUpload="uploadFile"
      :maxSize="maxSize"
      :maxNumber="maxNumber"
      :typeFile="typeFile"
    />
    <FileElement :fileList="fileList" @onRemove="removeFile" />
    <button v-if="showUploadButton" class="btn-submit" @click="submitUpload">
      Upload
    </button>
  </div>
</template>

<script>
import DropzoneElement from "./DropzoneElement.vue";
import FileElement from "./FileElement.vue";
export default {
  props: {
    fileList: {
      type: Array,
      required: true,
    },
    maxSize: {
      type: Number,
      required: true,
    },
    maxNumber: {
      type: Number,
      required: true,
    },
    typeFile: {
      type: Array,
      required: true,
    },
  },
  computed: {
    showUploadButton() {
      return this.fileList.length > 0;
    },
  },
  components: {
    DropzoneElement,
    FileElement,
  },
  methods: {
    uploadFile(files) {
      this.$emit("onUpload", files);
    },
    removeFile(lastModified) {
      this.$emit("onRemove", lastModified);
    },
    submitUpload(files) {
      this.$emit("onSubmit", files);
    },
  },
};
</script>

<style scoped>
.main {
  width: 842px;
  max-width: 1000px;
  margin: 2rem auto;
}
.btn-submit {
  margin: 10px 0;
  padding: 8px 30px;
  border: none;
  border-radius: 4px;
}
.btn-submit:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
