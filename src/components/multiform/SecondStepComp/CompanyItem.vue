<template>
  <div class="company-item">
    <div
      v-for="(child, indexChild) in item.childrens"
      :key="child.key"
      class="content"
    >
      <div class="selection-block" v-if="child.view_type === INPUT_DROPDOWN">
        <div class="selection">
          <DropdownList
            :value="child.value"
            :label="child.label"
            :error="child.error"
            :list="item.companyList"
            @input="(value) => onChangeChildren(value, indexChild)"
          />
        </div>
        <TrashIcon @click.native="removeCompany" />
      </div>
      <InputField
        v-if="child.view_type === INPUT_TEXT"
        :value="child.value"
        :label="child.label"
        :required="child.required"
        :error="child.error"
        @input="(value) => onChangeChildren(value, indexChild)"
      />
      <TimeWorking
        v-if="child.view_type === INPUT_DATE_ZONE"
        :value="child.value"
        :label="child.label"
        :required="child.required"
        :error="child.error"
        @input="(value) => onChangeChildren(value, indexChild)"
      />
      <WorkArea
        v-if="child.view_type === INPUT_AREA"
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
import DropdownList from "../sharedComponents/DropdownList.vue";
import WorkArea from "@/components/multiform/sharedComponents/TextArea.vue";
import {
  INPUT_TEXT,
  INPUT_DATE_ZONE,
  INPUT_DROPDOWN,
  INPUT_AREA,
} from "@/constants/FormConstants";
export default {
  data() {
    return {
      INPUT_TEXT,
      INPUT_DATE_ZONE,
      INPUT_DROPDOWN,
      INPUT_AREA,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
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
    onChangeChildren(value, indexChild) {
      this.$emit("onChangeChildren", value, indexChild);
    },
    removeCompany() {
      this.$emit("removeCompany");
    },
  },
};
</script>

<style lang="scss" scoped>
.company-item {
  width: 100%;
  height: 520px;
  padding: 24px;
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
    width: 100%;
  }
}
</style>
