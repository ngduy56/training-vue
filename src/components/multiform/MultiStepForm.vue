<template>
  <div>
    <div v-if="!isSecondForm" class="container">
      <div class="content">
        <MultiInputView
          v-for="item in formData"
          v-model="item.value"
          :key="item.key"
          :item="item"
          :numStep="numStep"
          @onUploadFile="onUploadFile"
          @onRemoveFile="onRemoveFile"
          @onAddChosen="onAddChosen"
          @onRemoveChosen="onRemoveChosen"
        />
      </div>
    </div>
    <div v-if="isSecondForm" class="second-block">
      <CompanyItem
        v-for="(item, index) in formData"
        :value="item.value"
        :item="item"
        :key="item.lastModified"
        :error="item.error"
        @input="(value) => onChange(value, index)"
        @onChangeChildren="
          (value, indexChild) => onChangeChildren(value, indexChild, index)
        "
        @removeCompany="removeCompany"
      />
      <div class="btn-add" @click="addCompany">
        <AddIcon />
        <span>Thêm công ty</span>
      </div>
    </div>
    <div class="navigate-block">
      <button
        class="btn-next"
        :class="{ active: isComplete }"
        :disabled="!isComplete"
        @click="nextStep"
      >
        {{ isThirdForm ? "Hoàn thành" : "Tiếp" }}
      </button>
      <button v-if="isSecondForm" class="btn-prev" @click="previousStep">
        Quay lại
      </button>
    </div>
  </div>
</template>

<script>
import AddIcon from "@/components/icons/AddIcon.vue";
import CompanyItem from "@/components/multiform/SecondStepComp/CompanyItem.vue";
import MultiInputView from "./MultiInputView.vue";
import {
  validateFirstForm,
  validateSecondForm,
  validateThirdForm,
} from "@/utils/ValidateForm";

export default {
  data() {
    return {
      isValid: false,
      isComplete: false,
      initialFormData: this.formData,
    };
  },
  props: {
    formData: {
      type: Array,
      require: true,
    },
    numStep: {
      type: Number,
    },
  },
  components: {
    MultiInputView,
    AddIcon,
    CompanyItem,
  },
  watch: {
    formData: {
      handler(val) {
        let newArr = val?.filter((item) => item.value === "");
        if (newArr?.length > 0) this.isComplete = false;
        else this.isComplete = true;
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    isFirstForm() {
      return this.numStep === 1;
    },
    isSecondForm() {
      return this.numStep === 2;
    },
    isThirdForm() {
      return this.numStep === 3;
    },
  },
  methods: {
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
    onChange(value, index) {
      this.$emit("onChangeValue", value, index);
    },
    onChangeChildren(value, indexChild, index) {
      this.$emit("onChangeChildren", value, indexChild, index);
    },
    addCompany() {
      this.$emit("addCompany");
    },
    removeCompany(value) {
      this.$emit("removeCompany", value);
    },
    nextStep() {
      if (this.isFirstForm) {
        this.isValid = validateFirstForm(this.formData);
      } else if (this.isSecondForm) {
        this.isValid = validateSecondForm(this.formData);
      } else if (this.isThirdForm) {
        this.isValid = validateThirdForm(this.formData);
      }
      if (this.isValid) {
        this.$emit("nextStep", this.formData);
        this.$emit("onChange", this.numStep + 1);
        this.$emit("doneStep", this.numStep);
      }
    },
    previousStep() {
      this.$emit("onChange", this.numStep - 1);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 346px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px 0 32px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  .content {
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
  outline: none;
  border: none;
  color: #ffffff;
  margin-top: 24px;

  &.active {
    background: #627d98;
    cursor: pointer;
  }
}
.btn-prev {
  width: 102px;
  height: 40px;
  background: #dcdcdc;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
  outline: none;
  margin: 24px 0 0 10px;
  cursor: pointer;
  color: #333333;
  font-weight: 400;
}

.second-block {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .btn-add {
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 24px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    outline: none;
    color: #48647f;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
