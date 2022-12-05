<template>
  <div class="block">
    <InputField
      v-if="item.view_type === INPUT_TEXT"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <InputDate
      v-if="item.view_type === INPUT_DATE"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <div class="dropdown" v-if="item.view_type === INPUT_DROPDOWN">
      <DropdownList
        :value="valueLocal"
        :label="item.label"
        :list="item.cityList"
        :required="item.required"
        @input="onChange"
      />
    </div>
    <PositionInput
      v-if="item.view_type === INPUT_DROPDOWN_SEARCH"
      :label="item.label"
      :required="item.required"
      :optionList="item.optionList"
      :chosenList="item.value"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
    />
    <AboutArea
      v-if="item.view_type === INPUT_AREA"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <DropzoneComp
      v-if="item.view_type === IMG_DROPZONE"
      :label="item.label"
      :required="item.required"
      :maxNumber="item.maxNumber"
      :maxSize="item.maxSize"
      :typeFile="item.typeFile"
      :fileList="item.value"
      @onRemove="onRemoveFile"
      @onUpload="onUploadFile"
    />
    <SalaryInput
      v-if="item.view_type === INPUT_SALARY"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <CompanyItem
      v-if="item.view_type === COMPANY_ITEM"
      :item="item"
      @onChangeChildren="onChangeChildren"
      @removeCompany="removeCompany"
    />
  </div>
</template>

<script>
import CompanyItem from "@/components/multiform/SecondStepComp/CompanyItem.vue";
import SalaryInput from "@/components/multiform/ThirdStepComp/SalaryElement.vue";
import InputField from "./sharedComponents/InputField.vue";
import InputDate from "./sharedComponents/InputDate.vue";
import DropdownList from "./sharedComponents/DropdownList.vue";
import PositionInput from "./FirstStepComp/PositionInput.vue";
import AboutArea from "@/components/multiform/sharedComponents/TextArea.vue";
import DropzoneComp from "./dropzone/DropzoneComp.vue";
import {
  INPUT_TEXT,
  INPUT_SALARY,
  INPUT_DATE,
  INPUT_DROPDOWN,
  INPUT_DROPDOWN_SEARCH,
  INPUT_AREA,
  IMG_DROPZONE,
  COMPANY_ITEM,
} from "@/constants/FormConstants";

export default {
  data() {
    return {
      INPUT_TEXT,
      INPUT_SALARY,
      INPUT_DATE,
      INPUT_DROPDOWN,
      INPUT_DROPDOWN_SEARCH,
      INPUT_AREA,
      IMG_DROPZONE,
      COMPANY_ITEM,

      valueLocal: "",
    };
  },
  components: {
    InputField,
    InputDate,
    DropdownList,
    PositionInput,
    AboutArea,
    DropzoneComp,
    SalaryInput,
    CompanyItem,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    value: {
      type: [String, Array, Number],
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
  methods: {
    onChange(value) {
      this.$emit("input", value);
    },
    onChangeChildren(value, indexChild) {
      this.$emit("onChangeChildren", value, indexChild);
    },
    onUploadFile(files) {
      this.$emit("onUploadFile", files);
    },
    onRemoveFile(lastModified) {
      this.$emit("onRemoveFile", lastModified);
    },
    onAddChosen(option) {
      this.$emit("onAddChosen", option);
    },
    onRemoveChosen(chosenItem) {
      this.$emit("onRemoveChosen", chosenItem);
    },
    removeCompany() {
      this.$emit("removeCompany");
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;

  .dropdown {
    width: 528px;
  }
}
</style>
