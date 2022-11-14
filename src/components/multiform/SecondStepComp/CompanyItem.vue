<template>
  <div class="company-item">
    <div class="selection">
      <select>
        <option value="mor1">MorSoftware 1</option>
        <option value="mor2">MorSoftware 2</option>
        <option value="mor3">MorSoftware 3</option>
        <option value="mor4">MorSoftware 4</option>
      </select>
      <TrashIcon />
    </div>
    <div class="content">
      <InputField :label="'Vị trí từng làm'" required="true" />
      <InputDate :label="'Thời gian làm việc'" required="true" />
      <WorkArea :label="'Mô tả về công việc'" />
    </div>
  </div>
</template>

<script>
import InputField from "@/components/multiform/sharedComponents/InputField.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import InputDate from "./TimeWorking.vue";
import WorkArea from "@/components/multiform/sharedComponents/TextArea.vue";
export default {
  components: {
    TrashIcon,
    InputField,
    InputDate,
    WorkArea,
  },
};
</script>

<style lang="scss" scoped>
.company-item {
  width: 100%;
  height: 504px;
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  margin-bottom: 24px;

  .selection {
    width: 100%;
    display: flex;
    background: #f8f8f8;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-radius: 4px;
    padding: 10px 16px 10px 16px;
    margin-bottom: 24px;

    select {
      border-radius: 4px;
      width: 94%;
      height: 100%;
      border: 1px solid #dbdbdb;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      padding: 0 20px 0 10px;
    }
  }
  .content {
    width: 528px;
  }
}
</style>
