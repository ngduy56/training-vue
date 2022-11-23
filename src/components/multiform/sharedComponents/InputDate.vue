<template>
  <div class="input-date">
    <InputLabel :label="label" :required="required" />
    <input type="date" v-model="valueLocal" @input="onChange" />
    <span v-if="error" class="error-vali">{{ error }}</span>
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
  components: {
    InputLabel,
  },
  methods: {
    onChange() {
      this.$emit("input", this.valueLocal);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-date {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  input {
    width: 130px;
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
  .error-vali {
    color: red;
    font-size: 14px;
  }
}
</style>
