<template>
  <div class="company-item">
    <div class="selection-block">
      <div class="selection">
        <DropdownList
          v-if="item.view_type === 'input-dropdown'"
          v-model="valueLocal"
          :label="item.label"
          :error="error"
          :list="item.companyList"
          @input="onChange"
        />
      </div>
      <TrashIcon @click.native="onRemove" />
    </div>
    <div
      v-for="(child, indexChild) in item.childrens"
      :key="child.key"
      class="content"
    >
      <InputField
        v-if="child.view_type === 'input-text'"
        :value="child.value"
        :label="child.label"
        :required="child.required"
        :error="child.error"
        @input="(value) => onChangeChildren(value, indexChild)"
      />
      <TimeWorking
        v-if="child.view_type === 'input-date'"
        :value="child.value"
        :label="child.label"
        :required="child.required"
        :error="child.error"
        @input="(value) => onChangeChildren(value, indexChild)"
      />
      <WorkArea
        v-if="child.view_type === 'input-area'"
        :value="child.value"
        :label="child.label"
        :required="child.required"
        :error="child.error"
        @input="(value) => onChangeChildren(value, indexChild)"
      />
    </div>
  </div>
</template>

<script>
import InputField from "@/components/multiform/sharedComponents/InputField.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import TimeWorking from "./TimeWorking.vue";
import DropdownList from "../FirstStepComp/DropdownList.vue";
import WorkArea from "@/components/multiform/sharedComponents/TextArea.vue";
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
    error: {
      type: String,
    },
  },
  components: {
    TrashIcon,
    InputField,
    TimeWorking,
    WorkArea,
    DropdownList,
  },
  methods: {
    onChange() {
      this.$emit("input", this.valueLocal);
    },
    onChangeChildren(value, indexChild) {
      this.$emit("onChangeChildren", value, indexChild);
    },
    onRemove() {
      this.$emit("onRemove", this.item.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.company-item {
  width: 100%;
  height: 504px;
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  margin-bottom: 24px;

  .selection-block {
    width: 100%;
    display: flex;
    background: #f8f8f8;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-radius: 4px;
    padding: 10px 18px 10px 16px;
    margin-bottom: 24px;

    .selection {
      width: 94%;
    }

    select {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      border: 1px solid #dbdbdb;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      padding: 0 20px 0 10px;
    }
  }
  .content {
    width: 528px;
  }
}
</style>
