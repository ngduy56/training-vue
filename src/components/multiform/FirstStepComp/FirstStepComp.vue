<template>
  <div>
    <div class="first-block">
      <div class="info-content">
        <InputField
          :label="'Họ và tên'"
          v-model="fullName"
          :error="error.fullName"
        />
        <InputDate :label="'Ngày sinh'" v-model="dob" :error="error.dob" />
        <DropdownList :label="'Thành phố'" />
        <PositionInput
          v-model="filterName"
          :optionList="filterOptions"
          :chosenList="chosenList"
          @onAddChosen="handleAddChosen"
          @onRemoveChosen="handleRemoveChosen"
        />
        <AboutArea
          v-model="about"
          :label="'Mô tả về bản thân'"
          :error="error.about"
        />
        <DropzoneComp
          :fileList="fileList"
          :maxNumber="maxNumber"
          :maxSize="maxSize"
          :typeFile="typeFile"
          @onRemove="handleRemoveFile"
          @onUpload="handleUploadFile"
        />
      </div>
    </div>
    <button class="btn-next active" @click="nextStep">Tiếp</button>
  </div>
</template>

<script>
import InputField from "../sharedComponents/InputField.vue";
import InputDate from "../sharedComponents/InputDate.vue";
import DropdownList from "./DropdownList.vue";
import PositionInput from "./PositionInput.vue";
import AboutArea from "./TextArea.vue";
import DropzoneComp from "@/components/multiform/dropzone/DropzoneComp.vue";
import { mapActions, mapGetters } from "vuex";
import {
  MAX_SIZE,
  MAX_NUMBER,
  TYPE_FILE_IMAGE,
} from "@/constants/DropzoneConstants.js";
import { ValidateForm } from "@/utils/ValidateFormFirstStep.js";
export default {
  components: {
    InputField,
    InputDate,
    DropdownList,
    PositionInput,
    AboutArea,
    DropzoneComp,
  },
  data() {
    return {
      filterName: "",

      fullName: "",
      dob: "",
      about: "",

      isValid: false,

      maxSize: MAX_SIZE,
      maxNumber: MAX_NUMBER,
      typeFile: TYPE_FILE_IMAGE,
      error: {
        fullName: "",
        dob: "",
        about: "",
      },
    };
  },
  created() {
    this.getCityList();
  },
  computed: {
    ...mapGetters({
      optionList: "city/getCities",
      chosenList: "city/getChosenList",
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
      getCities: "city/getCityList",
      addChosen: "city/addChosenCity",
      removeChosen: "city/removeChosenCity",

      uploadFile: "file/uploadFile",
      removeFile: "file/removeFile",
      submitFile: "file/submitFile",

      saveForm: "form/saveForm",
    }),
    getCityList() {
      this.getCities();
    },
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
    // validate form
    nextStep() {
      this.error = {
        fullName: "",
        dob: "",
        about: "",
      };
      this.isValid = ValidateForm(
        this.fullName,
        this.dob,
        this.about,
        this.error
      );
      if (this.isValid) {
        this.saveForm({
          fullname: this.fullName,
          dob: this.dob,
          about: this.about,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.first-block {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px 0 32px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  .info-content {
    width: 528px;
  }
}
.btn-next {
  width: 102px;
  height: 40px;
  background: #dcdcdc;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
  color: #ffffff;
  margin-top: 24px;
  outline: none;

  &.active {
    color: black;
    border: 1px solid black;
    cursor: pointer;
  }
}
</style>
