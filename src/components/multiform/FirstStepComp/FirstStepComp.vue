<template>
  <div>
    <div class="first-block">
      <div class="info-content">
        <!-- <div v-for="item in firstStepForm" :key="item.key">
          <InputField
            v-if="item.view_type === 'input-text'"
            v-model="item.value"
            :label="item.label"
            :required="item.required"
            :error="item.error"
          />
          <InputDate
            v-if="item.view_type === 'input-date'"
            v-model="item.value"
            :label="item.label"
            :required="item.required"
            :error="item.error"
          />
          <DropdownList
            v-if="item.view_type === 'input-dropdown'"
            v-model="item.value"
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
            v-model="item.value"
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
        </div> -->
        <InputView v-for="item in firstStepForm" :key="item.key" :item="item" />
      </div>
    </div>
    <button class="btn-next active" @click="nextStep">Tiếp</button>
  </div>
</template>

<script>
import InputView from "./InputView.vue";
// import InputField from "../sharedComponents/InputField.vue";
// import InputDate from "../sharedComponents/InputDate.vue";
// import DropdownList from "./DropdownList.vue";
// import PositionInput from "./PositionInput.vue";
// import AboutArea from "@/components/multiform/sharedComponents/TextArea.vue";
// import DropzoneComp from "@/components/multiform/dropzone/DropzoneComp.vue";
import { mapActions, mapGetters } from "vuex";
import { firstForm } from "./firstForm.js";
import { ValidateForm } from "@/utils/ValidateFormFirstStep.js";
export default {
  components: {
    InputView,
    // InputField,
    // InputDate,
    // DropdownList,
    // PositionInput,
    // AboutArea,
    // DropzoneComp,
  },
  data() {
    return {
      filterName: "",
      firstStepForm: firstForm,
      isValid: false,
    };
  },
  watch: {
    firstStepForm: {
      handler(val) {
        console.log(val);
        // val.map((item) => {
        //   console.log(item);
        // });
      },
      immediate: true,
      deep: true,
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
