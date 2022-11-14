<template>
  <div class="main">
    <InputLabel :label="label" :required="required" />
    <DropzoneElement
      @onUpload="uploadFile"
      :maxSize="maxSize"
      :maxNumber="maxNumber"
      :typeFile="typeFile"
    />
    <FileElement :fileList="fileList" @onRemove="removeFile" />
  </div>
</template>

<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
import DropzoneElement from "./DropzoneElement.vue";
import FileElement from "./FileElement.vue";
export default {
  props: {
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
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
    InputLabel,
  },
  methods: {
    uploadFile(files) {
      this.$emit("onUpload", files);
    },
    removeFile(lastModified) {
      this.$emit("onRemove", lastModified);
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
