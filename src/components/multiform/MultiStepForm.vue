<template>
  <div>
    <div :class="{ container: !isSecondForm }">
      <MultiInputView
        v-for="(item, index) in formData"
        :value="item.value"
        :key="item.key"
        :item="item"
        @onUploadFile="onUploadFile"
        @onRemoveFile="onRemoveFile"
        @onAddChosen="onAddChosen"
        @onRemoveChosen="onRemoveChosen"
        @removeCompany="() => removeCompany(index)"
        @input="(value) => onChangeValue(value, index)"
        @onChangeChildren="
          (value, indexChild) => onChangeChildren(value, indexChild, index)
        "
      />
    </div>

    <div v-if="isSecondForm" class="btn-add" @click="addCompany">
      <AddIcon />
      <span>Thêm công ty</span>
    </div>

    <div class="navigate-block">
      <button
        class="btn-next"
        :class="{ active: isComplete }"
        :disabled="!isComplete"
        @click="nextStep"
      >
        {{ isLastForm ? "Hoàn thành" : "Tiếp" }}
      </button>
      <button
        v-if="!isFirstForm && !isLastForm"
        class="btn-prev"
        @click="previousStep"
      >
        Quay lại
      </button>
    </div>
  </div>
</template>

<script>
import AddIcon from "@/components/icons/AddIcon.vue";
import MultiInputView from "./MultiInputView.vue";
import { multiForm } from "@/components/multiform/form";

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
      multiForm,
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
  },
  watch: {
    formData: {
      handler(val) {
        if (this.isFirstForm) {
          for (let i = 0; i < val.length; i++) {
            if (val[i].key === "fullName" || val[i].key === "dob") {
              if (val[i].value === "") {
                this.isComplete = false;
                break;
              } else this.isComplete = true;
            }
          }
        } else if (this.isSecondForm) {
          for (let i = 0; i < val.length; i++) {
            for (let j = 0; j < val[i].childrens.length; j++) {
              if (
                val[i].childrens[j].key === "company" ||
                val[i].childrens[j].key === "position" ||
                val[i].childrens[j].key === "time"
              ) {
                if (
                  val[i].childrens[j].value === "" ||
                  val[i].childrens[j].value.from === "" ||
                  val[i].childrens[j].value.to === ""
                ) {
                  this.isComplete = false;
                  break;
                } else this.isComplete = true;
              }
            }
          }
        } else if (this.isThirdForm) {
          for (let i = 0; i < val.length; i++) {
            if (val[i].key === "reason" || val[i].key === "salary") {
              if (val[i].value === "") {
                this.isComplete = false;
                break;
              } else this.isComplete = true;
            }
          }
        }
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
    isLastForm() {
      return this.numStep === this.multiForm.length;
    },
  },
  methods: {
    onChangeValue(value, index) {
      this.$emit("input", value, index);
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
    onChangeChildren(value, indexChild, index) {
      this.$emit("onChangeChildren", value, indexChild, index);
    },
    addCompany() {
      this.$emit("addCompany");
    },
    removeCompany(index) {
      this.$emit("removeCompany", index);
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
        this.$emit("changeForm", this.numStep + 1);
        this.$emit("doneStep", this.numStep);
      }
    },
    previousStep() {
      this.$emit("changeForm", this.numStep - 1);
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
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
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
}
.btn-add {
  width: 150px;
  height: 40px;
  margin-top: 20px;
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
</style>
