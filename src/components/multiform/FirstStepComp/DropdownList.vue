<template>
  <div class="drop-down">
    <InputLabel :label="label" :required="required" />
    <select class="select" v-model="valueLocal" @change="onChange">
      <option v-for="item in list" :key="item.value" :value="item.value">
        {{ item.name }}
      </option>
    </select>
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
    list: {
      type: Array,
    },
    label: {
      type: [String, undefined],
    },
    required: {
      type: Boolean,
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
      let value = document.querySelector(".select").value;
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down {
  width: 100%;
  margin-bottom: 10px;

  .select {
    width: 100%;
    height: 40px;
    padding: 8px 10px 8px 6px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    font-size: 14px;

    option {
      width: 45px;
      height: 20px;
      font-weight: 400;
      line-height: 20px;
      border: none;
      color: #333333;
    }
  }
}
</style>
