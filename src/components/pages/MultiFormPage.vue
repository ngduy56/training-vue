<template>
  <div class="main">
    <StepElement @input="onChange" />
    <MultiStepForm
      :formData="formData"
      :numStep="numLocal"
      @onChange="onChange"
      @doneStep="doneStep"
      @onUploadFile="onUploadFile"
      @onRemoveFile="onRemoveFile"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
      @onChangeValue="onChangeValue"
      @onChangeChildren="onChangeChildren"
      @addCompany="addCompany"
      @removeCompany="removeCompany"
      @nextStep="nextStep"
    />
  </div>
</template>

<script>
import StepElement from "@/components/multiform/sharedComponents/StepElement.vue";
import MultiStepForm from "@/components/multiform/MultiStepForm.vue";
import { POSITION_LIST } from "@/constants/FormConstants";

import {
  multiForm,
  secondForm,
  defaultElement,
} from "@/components/multiform/form";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      numLocal: 1,
      multiForm,
      positionList: POSITION_LIST,
    };
  },
  components: {
    StepElement,
    MultiStepForm,
  },
  computed: {
    formData() {
      let rs = this.multiForm.filter((item) => item.num === this.numLocal);
      return rs[0]?.data;
    },
    isFirstForm() {
      return this.numLocal === 1;
    },
    isSecondForm() {
      return this.numLocal === 2;
    },
    isThirdForm() {
      return this.numLocal === 3;
    },
  },
  methods: {
    ...mapActions({
      uploadFile: "file/uploadFile",
      removeFile: "file/removeFile",

      saveFirstForm: "form/saveFirstForm",
      saveSecondForm: "form/saveSecondForm",
      saveThirdForm: "form/saveThirdForm",
    }),
    onUploadFile(files) {
      this.uploadFile(files);
    },
    onRemoveFile(lastModified) {
      this.removeFile(lastModified);
    },
    onAddChosen(option) {
      this.positionList.map((pos) => {
        if (pos.codename === option.codename) {
          pos.isChosen = true;
        }
      });
      this.formData.map((item) => {
        if (item.key === "position") {
          item.value.push(option);
        }
      });
    },
    onRemoveChosen(chosenItem) {
      this.positionList.map((pos) => {
        if (pos.codename === chosenItem.codename) {
          pos.isChosen = false;
        }
      });
      this.formData.map((item) => {
        if (item.key === "position") {
          let index = item.value.findIndex((i) => {
            i.codename === chosenItem.codename;
          });
          item.value.splice(index, 1);
        }
      });
    },
    onChangeValue(value, index) {
      secondForm[index].value = value;
    },
    onChangeChildren(value, indexChild, index) {
      secondForm[index].childrens[indexChild].value = value;
    },
    addCompany() {
      secondForm.push(JSON.parse(JSON.stringify(defaultElement)));
    },
    removeCompany(value) {
      let index = secondForm.findIndex((item) => item.value === value);
      secondForm.splice(index, 1);
    },
    nextStep(formData) {
      if (this.isFirstForm) {
        this.saveFirstForm(formData);
      } else if (this.isSecondForm) {
        this.saveSecondForm(formData);
      } else if (this.isThirdForm) {
        this.saveThirdForm(formData);
        this.$router.push({ path: "/" });
      }
    },
    onChange(num) {
      if (num < this.numLocal) {
        let itemStep = document.querySelectorAll(".step-num");
        let index = this.multiForm.findIndex((item) => item.num === num + 1);
        itemStep[index]?.classList.remove("active");
        itemStep[index]?.classList.remove("done");
        itemStep[index - 1]?.classList.add("active");
      }
      this.numLocal = num;
    },
    doneStep(num) {
      this.multiForm.map((item) => {
        if (item.num === num) {
          item.isDone = true;
        }
      });
      let itemStep = document.querySelectorAll(".step-num");
      let index = this.multiForm.findIndex((item) => item.num === num);
      itemStep[index]?.classList.add("done");
      itemStep[index]?.classList.remove("active");
      itemStep[index + 1]?.classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 926px;
  margin: 2rem auto;
}
</style>
