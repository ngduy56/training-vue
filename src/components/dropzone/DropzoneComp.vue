<template>
  <div class="main">
    <DropzoneElement />
    <FileElement />
  </div>
</template>

<script>
import DropzoneElement from "./DropzoneElement.vue";
import FileElement from "./FileElement.vue";
export default {
  components: {
    DropzoneElement,
    FileElement,
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
