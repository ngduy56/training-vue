<template>
  <div>
    <InputField
      v-if="item.view_type === 'input-text'"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <InputDate
      v-if="item.view_type === 'input-date'"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <DropdownList
      v-if="item.view_type === 'input-dropdown'"
      v-model="valueLocal"
      :label="item.label"
      :list="item.cityList"
      :required="item.required"
      @input="onChange"
    />
    <PositionInput
      v-if="item.view_type === 'input-dropdown-search'"
      :label="item.label"
      :required="item.required"
      :optionList="item.optionList"
      :chosenList="getChosenList"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
    />
    <AboutArea
      v-if="item.view_type === 'input-area'"
      v-model="valueLocal"
      :label="item.label"
      :required="item.required"
      :error="item.error"
      @input="onChange"
    />
    <DropzoneComp
      v-if="item.view_type === 'img-dropzone'"
      :label="item.label"
      :required="item.required"
      :maxNumber="item.maxNumber"
      :maxSize="item.maxSize"
      :typeFile="item.typeFile"
      :fileList="fileList"
      @onRemove="onRemoveFile"
      @onUpload="onUploadFile"
    />
  </div>
</template>

<script>
import InputField from "../sharedComponents/InputField.vue";
import InputDate from "../sharedComponents/InputDate.vue";
import DropdownList from "./DropdownList.vue";
import PositionInput from "./PositionInput.vue";
import AboutArea from "@/components/multiform/sharedComponents/TextArea.vue";
import DropzoneComp from "@/components/multiform/dropzone/DropzoneComp.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      valueLocal: "",
      isValid: false,
    };
  },
  components: {
    InputField,
    InputDate,
    DropdownList,
    PositionInput,
    AboutArea,
    DropzoneComp,
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
      return (
        (this.item.optionList &&
          this.item.optionList.filter((item) => item.isChosen)) ||
        []
      );
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

<style></style>
