<template>
  <div class="drop-down">
    <InputLabel :label="label" :required="false" />
    <select>
      <option value="hanoi">Hà Nội</option>
      <option value="danang">Đà Nẵng</option>
      <option value="dalat">Đà Lạt</option>
      <option value="hochiminh">Hồ Chí Minh</option>
    </select>
  </div>
</template>

<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  components: {
    InputLabel,
  },
};
</script>

<style lang="scss" scoped>
.drop-down {
  margin-bottom: 10px;
}
select {
  width: 100%;
  height: 40px;
  padding: 8px 10px 8px 6px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 14px;

  option {
    width: 45px;
    height: 20px;
    font-weight: 400;
    line-height: 20px;
    border: none;
    color: #333333;
  }
}
</style>
