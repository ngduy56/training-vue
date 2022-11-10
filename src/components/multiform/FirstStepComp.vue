<template>
  <div class="first-block">
    <div class="info-content">
      <InputField :label="'Họ và tên'" />
      <InputDate :label="'Ngày sinh'" />
      <DropdownList :label="'Thành phố'" />
      <PositionInput />
    </div>
  </div>
</template>

<script>
import InputField from "./sharedComponents/InputField.vue";
import InputDate from "./sharedComponents/InputDate.vue";
import DropdownList from "./sharedComponents/DropdownList.vue";
import PositionInput from "./sharedComponents/PositionInput.vue";
export default {
  components: {
    InputField,
    InputDate,
    DropdownList,
    PositionInput,
  },
};
</script>

<style lang="scss">
.first-block {
  width: 100%;
  height: 100%;
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
