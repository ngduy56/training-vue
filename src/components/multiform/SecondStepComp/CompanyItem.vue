<template>
  <div class="company-item">
    <div
      v-for="(child, indexChild) in item.childrens"
      :key="child.key"
      class="content"
    >
      <div class="selection-block" v-if="child.view_type === INPUT_DROPDOWN">
        <DropdownList
          :value="child.value"
          :label="child.label"
          :error="child.error"
          :list="item.companyList"
          @input="(value) => onChangeChildren(value, indexChild)"
        />
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
        :maxLength="child.maxLength"
        @input="(value) => onChangeChildren(value, indexChild)"
      />
    </div>
  </div>
</template>

<script>
import InputField from "@/components/multiform/sharedComponents/InputField.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import TimeWorking from "./TimeWorking.vue";
import DropdownList from "@/components/multiform/sharedComponents/DropdownList.vue";
import WorkArea from "@/components/multiform/sharedComponents/TextArea.vue";
import {
  INPUT_TEXT,
  INPUT_DATE_ZONE,
  INPUT_DROPDOWN,
  INPUT_AREA,
} from "@/constants/FormConstants";
import {
  checkCompany,
  checkInputField,
  checkTimezone,
} from "@/utils/ValidateForm";
export default {
  data() {
    return {
      INPUT_TEXT,
      INPUT_DATE_ZONE,
      INPUT_DROPDOWN,
      INPUT_AREA,

      valueLocal: "",
      indexLocal: 0,
    };
  },
  props: {
    index: {
      type: Number,
    },
    item: {
      type: Object,
      required: true,
    },
    formData: {
      type: Array,
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
  watch: {
    valueLocal: {
      handler() {
        let child = this.item.childrens.find(
          (item, index) => index === this.indexLocal
        );
        if (child.view_type === INPUT_DROPDOWN) {
          checkCompany(child, this.index, this.formData);
        } else if (
          child.view_type === INPUT_TEXT ||
          child.view_type === INPUT_AREA
        ) {
          checkInputField(child);
        } else if (child.view_type === INPUT_DATE_ZONE) {
          checkTimezone(child, this.index, this.formData);
        }
      },
      deep: true,
    },
  },
  methods: {
    onChangeChildren(value, indexChild) {
      this.valueLocal = value;
      this.indexLocal = indexChild;
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
  height: 560px;
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
    padding: 10px 14px 10px 16px;

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

    &:first-child {
      height: 92px;
    }
  }
}
::v-deep .dropdown {
  margin: 0;
  width: 95% !important;
}
</style>
