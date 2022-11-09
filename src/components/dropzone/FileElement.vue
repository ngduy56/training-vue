<template>
  <div>
    <div class="file-block">
      <div class="file-list">
        <FileItem
          v-for="fileItem in fileList"
          :key="fileItem.name"
          :fileItem="fileItem"
          @input="removeFile"
        />
      </div>
      <NextIcon v-if="fileList.length > 0" />
    </div>
  </div>
</template>

<script>
import FileItem from "./FileItem.vue";
import NextIcon from "../icons/NextIcon.vue";
export default {
  props: {
    fileList: {
      type: Array,
      required: true,
    },
  },
  components: {
    FileItem,
    NextIcon,
  },
  methods: {
    removeFile(name) {
      this.$emit("input", name);
    },
  },
};
</script>

<style scoped>
.file-block {
  width: 100%;
  margin-top: 33px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.file-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  overflow-y: hidden;
  gap: 17px;
}
.file-list::-webkit-scrollbar {
  display: none;
}
</style>
