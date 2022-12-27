<template>
  <div class="block">
    <InputField
      v-if="item.view_type === INPUT_TEXT"
      :value="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      :maxLength="item.maxLength"
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
    <DropdownList
      v-if="item.view_type === INPUT_DROPDOWN"
      :value="valueLocal"
      :label="item.label"
      :list="item.cityList"
      :required="item.required"
      @input="onChange"
    />
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
      :maxLength="item.maxLength"
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
      :index="index"
      :item="item"
      :formData="formData"
      @onChangeChildren="onChangeChildren"
      @removeCompany="removeCompany"
    />
  </div>
</template>

<script>
import CompanyItem from "@/components/multiform/SecondStepComp/CompanyItem.vue";
import SalaryInput from "@/components/multiform/ThirdStepComp/SalaryElement.vue";
import InputField from "@/components/multiform/sharedComponents/InputField.vue";
import InputDate from "@/components/multiform/sharedComponents/InputDate.vue";
import DropdownList from "@/components/multiform/sharedComponents/DropdownList.vue";
import PositionInput from "@/components/multiform/FirstStepComp/PositionInput.vue";
import AboutArea from "@/components/multiform/sharedComponents/TextArea.vue";
import DropzoneComp from "@/components/dropzone/DropzoneComp.vue";

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
import {
  checkInputDate,
  checkInputField,
  checkInputSalary,
} from "@/utils/ValidateForm";

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
    value: {
      type: [String, Array, Number],
    },
  },
  created() {
    if (this.value) {
      this.valueLocal = this.value;
    }
  },
  watch: {
    value: {
      handler(val) {
        this.valueLocal = val;
        if (
          this.item.view_type === INPUT_TEXT ||
          this.item.view_type === INPUT_AREA
        ) {
          checkInputField(this.item);
        } else if (this.item.view_type === INPUT_DATE) {
          checkInputDate(this.item);
        } else if (this.item.view_type === INPUT_SALARY) {
          checkInputSalary(this.item);
        }
      },
      deep: true,
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
  position: relative;

  .error-vali {
    display: inline-block;
    transform: translateY(-10px);
    width: 100%;
    color: red;
    font-size: 14px;
  }
}
::v-deep {
  .dropdown {
    width: 528px;
  }
}
</style>
