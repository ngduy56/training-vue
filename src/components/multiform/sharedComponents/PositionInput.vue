<template>
  <div class="position-input">
    <InputLabel :label="'Vị trí làm việc'" :required="false" />
    <span class="note">Có thể chọn nhiều vị trí mà bạn muốn làm việc</span>
    <InputExam />
  </div>
</template>
<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
import InputExam from "@/components/input/InputExam.vue";
export default {
  components: {
    InputLabel,
    InputExam,
  },
};
</script>

<style>
.note {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
}
</style>
