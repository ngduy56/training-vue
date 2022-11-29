<template>
  <div>
    <InputField
      v-if="item.view_type === INPUT_TEXT"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <InputDate
      v-if="item.view_type === INPUT_DATE"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <DropdownList
      v-if="item.view_type === INPUT_DROPDOWN"
      v-model="valueLocal"
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
      :chosenList="getChosenList"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
    />
    <AboutArea
      v-if="item.view_type === INPUT_AREA"
      v-model="valueLocal"
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
      :fileList="fileList"
      @onRemove="onRemoveFile"
      @onUpload="onUploadFile"
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
import SalaryElement from "@/components/multiform/ThirdStepComp/SalaryElement.vue";
import InputField from "./sharedComponents/InputField.vue";
import InputDate from "./sharedComponents/InputDate.vue";
import DropdownList from "./sharedComponents/DropdownList.vue";
import PositionInput from "./FirstStepComp/PositionInput.vue";
import AboutArea from "@/components/multiform/sharedComponents/TextArea.vue";
import DropzoneComp from "./dropzone/DropzoneComp.vue";
import { mapGetters } from "vuex";
import {
  INPUT_TEXT,
  INPUT_SALARY,
  INPUT_DATE,
  INPUT_DROPDOWN,
  INPUT_DROPDOWN_SEARCH,
  INPUT_AREA,
  IMG_DROPZONE,
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
    SalaryElement,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
    },
    numStep: {
      type: Number,
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
  computed: {
    ...mapGetters({
      fileList: "file/getFileList",
    }),
    getChosenList() {
      return this.item?.optionList?.filter((item) => item.isChosen) || [];
    },
  },
  methods: {
    onChange(value) {
      this.$emit("input", value);
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
  },
};
</script>

<style lang="scss" scoped></style>
