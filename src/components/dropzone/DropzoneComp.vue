<template>
  <div class="main">
    <DropzoneElement
      @input="uploadFile"
      :maxSize="maxSize"
      :maxNumber="maxNumber"
      :typeFile="typeFile"
    />
    <FileElement :fileList="fileList" @input="removeFile" />
    <button class="btn-submit" v-if="fileList.length > 0" @click="submitUpload">
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
  components: {
    DropzoneElement,
    FileElement,
  },
  methods: {
    uploadFile(files) {
      this.$emit("inputUpload", files);
    },
    removeFile(name) {
      this.$emit("inputRemove", name);
    },
    submitUpload(files) {
      this.$emit("inputSubmit", files);
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
