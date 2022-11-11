<template>
  <div class="about-block">
    <InputLabel :label="'Mô tả về bản thân'" />
    <textarea v-model="value" @input="onChange"></textarea>
    <span>{{ length }}/1000</span>
    <span v-if="showError" class="error-vali">{{ error }}</span>
  </div>
</template>

<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";

export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    InputLabel,
  },
  props: {
    error: {
      type: String,
    },
  },
  computed: {
    length() {
      return this.value.length;
    },
    showError() {
      return this.value.length > 1000;
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
.about-block {
  position: relative;
  margin-bottom: 10px;

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
