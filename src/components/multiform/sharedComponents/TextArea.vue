<template>
  <div class="area-block">
    <InputLabel :label="label" :required="required" />
    <textarea
      :class="{ 'in-valid': error }"
      v-model="valueLocal"
      @input="onChange"
    ></textarea>
    <div class="validate-block">
      <span :class="{ 'error-length': showLengthError }"
        >{{ length }}/{{ maxLength }}</span
      >
    </div>
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
    maxLength: {
      type: Number,
    },
  },
  computed: {
    showError() {
      return this.error.length > 0;
    },
    showLengthError() {
      return this.length > this.maxLength;
    },
    length() {
      return this.valueLocal ? this.valueLocal.length : 0;
    },
  },
  methods: {
    onChange() {
      this.$emit("input", this.valueLocal);
    },
  },
};
</script>

<style lang="scss" scoped>
.area-block {
  width: 528px;
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
  .in-valid {
    border-color: red;
  }
  .error-vali {
    color: red;
    font-size: 14px;
  }
  .validate-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #666666;
    }

    .error-length {
      color: red;
    }
  }
}
</style>
