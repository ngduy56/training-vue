<template>
  <div class="main">
    <DropzoneElement @input="uploadFile" />
    <FileElement :fileList="fileList" @input="removeFile" />
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
  },
  components: {
    DropzoneElement,
    FileElement,
  },
  methods: {
    uploadFile(files) {
      this.$emit("inputUpload", files);
    },
    removeFile(name) {
      this.$emit("input", name);
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
</style>
