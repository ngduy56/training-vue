<template>
  <div class="area-block">
    <InputLabel :label="label" :required="required" />
    <textarea v-model="valueLocal" @input="onChange"></textarea>
    <span>{{ length }}/1000</span>
    <span v-if="showError" class="error-vali">{{ error }}</span>
  </div>
</template>

<script>
import InputLabel from "./InputLabel.vue";

export default {
  data() {
    return {
      valueLocal: "",
    };
  },
  watch: {
    value: {
      handler(val) {
        this.valueLocal = val;
      },
      deep: true,
      immediate: true,
    },
  },
  components: {
    InputLabel,
  },
  props: {
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    error: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  computed: {
    showError() {
      return this.error;
    },
    length() {
      return this.valueLocal.length;
    },
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.area-block {
  width: 528px;
  position: relative;
  margin-bottom: 10px;
  color: #000000;

  textarea {
    width: 100%;
    height: 152px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    padding: 8px 10px;
    resize: none;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
  }
  .error-vali {
    margin-left: 10px;
    color: red;
    font-size: 14px;
  }
}
</style>
