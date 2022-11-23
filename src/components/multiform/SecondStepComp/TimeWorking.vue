<template>
  <div class="time-working">
    <InputLabel :label="label" :required="required" />
    <div class="time-zone">
      <input
        class="from-date"
        v-model="valueLocal.from"
        @input="onChange"
        type="date"
      />
      <div>-</div>
      <input
        class="to-date"
        v-model="valueLocal.to"
        @input="onChange"
        type="date"
      />
      <span v-if="error" class="error-vali">{{ error }}</span>
    </div>
  </div>
</template>
<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
export default {
  data() {
    return {
      valueLocal: {},
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
    error: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    value: {
      type: Object,
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
.time-working {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;

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
  .time-zone {
    display: flex;
    align-items: center;

    div {
      margin: 0 10px;
    }
    .error-vali {
      margin-left: 10px;
      color: red;
      font-size: 14px;
    }
  }
}
</style>
