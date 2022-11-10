<template>
  <div class="first-block">
    <div class="info-content">
      <InputField :label="'Họ và tên'" />
      <InputDate :label="'Ngày sinh'" />
      <DropdownList :label="'Thành phố'" />
      <PositionInput />
      <AboutArea />
    </div>
  </div>
</template>

<script>
import InputField from "./sharedComponents/InputField.vue";
import InputDate from "./sharedComponents/InputDate.vue";
import DropdownList from "./sharedComponents/DropdownList.vue";
import PositionInput from "./sharedComponents/PositionInput.vue";
import AboutArea from "./sharedComponents/AboutArea.vue";

export default {
  components: {
    InputField,
    InputDate,
    DropdownList,
    PositionInput,
    AboutArea,
  },
};
</script>

<style lang="scss" scoped>
.first-block {
  width: 100%;
  height: 850px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px 0 32px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  .info-content {
    width: 528px;
  }
}
</style>
