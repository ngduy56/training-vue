<template>
  <div>
    <TextArea
      v-if="item.view_type === INPUT_AREA"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <SalaryElement
      v-if="item.view_type === INPUT_SALARY"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
  </div>
</template>

<script>
import TextArea from "@/components/multiform/sharedComponents/TextArea.vue";
import SalaryElement from "@/components/multiform/ThirdStepComp/SalaryElement.vue";
import {
  INPUT_TEXT,
  INPUT_AREA,
  INPUT_SALARY,
} from "@/constants/FormConstants";
export default {
  data() {
    return {
      INPUT_TEXT,
      INPUT_AREA,
      INPUT_SALARY,

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
    item: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
    },
  },
  components: {
    TextArea,
    SalaryElement,
  },
  methods: {
    onChange(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style></style>
