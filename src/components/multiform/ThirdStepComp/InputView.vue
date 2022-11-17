<template>
  <div>
    <TextArea
      v-if="item.view_type === 'input-area'"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <SalaryElement
      v-if="item.view_type === 'input-text'"
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
