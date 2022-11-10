<template>
  <div class="about-block">
    <InputLabel :label="'Mô tả về bản thân'" />
    <textarea></textarea>
  </div>
</template>

<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";

export default {
  components: {
    InputLabel,
  },
};
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 152px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  padding: 8px 10px;
}
</style>
