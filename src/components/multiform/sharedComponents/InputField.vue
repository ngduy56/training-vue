<template>
  <div class="input-field">
    <InputLabel :label="label" :required="required" />
    <input type="text" @input="onChange" />
    <span v-if="error" class="error-vali">{{ error }}</span>
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
    required: {
      type: Boolean,
    },
    error: {
      type: String,
    },
  },
  components: {
    InputLabel,
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
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
    font-size: 14px;
  }
  .error-vali {
    color: red;
    font-size: 14px;
  }
}
</style>
