<template>
  <div class="input-field">
    <InputLabel :label="label" :required="true" />
    <input type="text" />
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
  width: 100%;
  margin-bottom: 10px;

  input {
    width: 100%;
    height: 40px;
    outline: none;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 0 10px;
  }
}
</style>
