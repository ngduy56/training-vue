<template>
  <div class="salary-block">
    <InputLabel :label="label" :required="required" />
    <div class="salary-input">
      <input type="text" v-model="valueLocal" @input="onChange" />
      <span>VND</span>
    </div>
    <span v-if="showError" class="error-vali">{{ error }}</span>
  </div>
</template>

<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
export default {
  data() {
    return {
      valueLocal: "",
    };
  },
  props: {
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    error: {
      type: String,
    },
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
  computed: {
    showError() {
      return this.error;
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
.salary-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  width: 140px;
  height: 40px;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    padding: 10px 0 10px 8px;
  }
  span {
    transform: translateX(-10px);
  }
}
.error-vali {
  color: red;
  font-size: 14px;
}
</style>
