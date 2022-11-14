<template>
  <div class="time-working">
    <InputLabel :label="label" :required="true" />
    <div class="time-zone">
      <input class="from-data" type="date" />
      <div>-</div>
      <input class="to-date" type="date" />
    </div>
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
  props: {
    label: {
      type: String,
      required: true,
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
.time-working {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;

  input {
    width: 120px;
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
  }
}
</style>
