<template>
  <div class="input-field">
    <InputLabel :label="label" :required="true" />
    <input type="date" />
  </div>
</template>
<script>
import InputLabel from "./InputLabel.vue";
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
  components: {
    InputLabel,
  },
};
</script>

<style lang="scss" scoped>
.input-field {
  width: 118px;
  margin-bottom: 10px;

  input {
    width: 100%;
    height: 40px;
    outline: none;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    padding: 0 8px 0 6px;
  }
}
</style>
