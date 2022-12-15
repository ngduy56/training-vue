<template>
  <div class="input-field">
    <InputLabel :label="label" :required="required" />
    <input
      :class="{ 'in-valid': error }"
      type="text"
      v-model="valueLocal"
      @input="onChange"
    />
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
      required: true,
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
.input-field {
  width: 528px;
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
  .in-valid {
    border-color: red;
  }
  .error-vali {
    color: red;
    font-size: 14px;
    width: 100%;
  }
}
</style>
