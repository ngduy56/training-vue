<template>
  <div>
    <div class="third-block">
      <TextArea :label="'Lý do muốn ứng tuyển vào công ty'" required="true" />
      <SalaryElement />
    </div>
    <button class="btn-complete">Hoàn thành</button>
  </div>
</template>

<script>
import TextArea from "@/components/multiform/FirstStepComp/TextArea.vue";
import SalaryElement from "./SalaryElement.vue";
export default {
  components: {
    TextArea,
    SalaryElement,
  },
};
</script>

<style lang="scss" scoped>
.third-block {
  width: 100%;
  height: 346px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px 0 32px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.btn-complete {
  width: 102px;
  height: 40px;
  background: #dcdcdc;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
  color: #ffffff;
  margin-top: 24px;
  outline: none;
}
</style>
