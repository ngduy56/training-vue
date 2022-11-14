<template>
  <div>
    <InputField
      v-if="item.view_type === 'input-text'"
      v-model="value"
      :label="item.label"
      :required="item.required"
      :error="item.error"
    />
    <InputDate
      v-if="item.view_type === 'input-date'"
      v-model="value"
      :label="item.label"
      :required="item.required"
      :error="item.error"
    />
    <DropdownList
      v-if="item.view_type === 'input-dropdown'"
      v-model="value"
      :label="item.label"
      :required="item.required"
    />
    <PositionInput
      v-if="item.view_type === 'input-dropdown-search'"
      v-model="filterName"
      :label="item.label"
      :required="item.required"
      :optionList="item.optionList"
      :chosenList="chosenList"
      @onAddChosen="handleAddChosen"
      @onRemoveChosen="handleRemoveChosen"
    />
    <AboutArea
      v-if="item.view_type === 'input-area'"
      v-model="value"
      :label="item.label"
      :required="item.required"
      :error="item.error"
    />
    <DropzoneComp
      v-if="item.view_type === 'img-dropzone'"
      :label="item.label"
      :required="item.required"
      :maxNumber="item.maxNumber"
      :maxSize="item.maxSize"
      :typeFile="item.typeFile"
      :fileList="fileList"
      @onRemove="handleRemoveFile"
      @onUpload="handleUploadFile"
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      filterName: "",
      value: this.item.value,
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
  },
  computed: {
    ...mapGetters({
      optionList: "position/getPositionList",
      chosenList: "position/getChosenList",

      fileList: "file/getFileList",
      firstForm: "form/getFirstForm",
    }),
    filterOptions() {
      return this.optionList.filter((option) => {
        return option.name.match(this.filterName);
      });
    },
  },
  methods: {
    ...mapActions({
      addChosen: "position/addChosenCity",
      removeChosen: "position/removeChosenCity",

      uploadFile: "file/uploadFile",
      removeFile: "file/removeFile",
      submitFile: "file/submitFile",

      saveForm: "form/saveForm",
    }),

    handleAddChosen(option) {
      this.addChosen(option);
    },
    handleRemoveChosen(chosenItem) {
      this.removeChosen(chosenItem);
    },
    handleUploadFile(files) {
      this.uploadFile(files);
    },
    handleRemoveFile(lastModified) {
      this.removeFile(lastModified);
    },
  },
};
</script>

<style></style>
