<template>
  <div class="main">
    <StepElement @changeForm="changeForm" />
    <MultiStepForm
      :formData="formData"
      :numStep="numStep"
      @changeForm="changeForm"
      @onUploadFile="onUploadFile"
      @onRemoveFile="onRemoveFile"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
      @input="onChangeValue"
      @onChangeChildren="onChangeChildren"
      @addCompany="addCompany"
      @removeCompany="removeCompany"
      @nextStep="nextStep"
      @doneStep="doneStep"
    />
  </div>
</template>

<script>
import StepElement from "@/components/multiform/sharedComponents/StepElement.vue";
import MultiStepForm from "@/components/multiform/MultiStepForm.vue";
import { multiForm, defaultElement } from "@/components/multiform/form";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      numStep: 1,
      multiForm,
    };
  },
  components: {
    StepElement,
    MultiStepForm,
  },
  computed: {
    ...mapGetters({
      firstForm: "form/getFirstForm",
      secondForm: "form/getSecondForm",
      thirdForm: "form/getThirdForm",
    }),
    isFirstForm() {
      return this.numStep === 1;
    },
    isSecondForm() {
      return this.numStep === 2;
    },
    isThirdForm() {
      return this.numStep === 3;
    },
    formData() {
      const rs = this.multiForm.filter((item) => item.num === this.numStep);
      return rs[0]?.data;
    },
  },
  mounted() {
    let fileValue;
    if (this.isFirstForm && this.firstForm.length > 0) {
      this.mutationForm(
        this.multiForm,
        this.firstForm,
        fileValue,
        this.numStep
      );
      // fileValue = this.firstForm.filter(
      //   (item) => item.key === "ava-dropzone"
      // )[0].value;

      // this.multiForm.map((item) => {
      //   if (item.num === this.numStep) {
      //     item.data = JSON.parse(JSON.stringify(this.firstForm));
      //     item.data.map((child) => {
      //       if (child.key === "ava-dropzone") {
      //         child.value = [...fileValue];
      //       }
      //     });
      //   }
      // });
    }
  },
  watch: {
    numStep: {
      handler(val) {
        let fileValue;
        if (this.isFirstForm && this.firstForm.length > 0) {
          this.mutationForm(this.multiForm, this.firstForm, fileValue, val);
        } else if (this.isSecondForm && this.secondForm.length > 0) {
          this.multiForm.map((item) => {
            if (item.num === val) {
              item.data = JSON.parse(JSON.stringify(this.secondForm));
            }
          });
        } else if (this.isThirdForm && this.thirdForm.length > 0) {
          this.multiForm.map((item) => {
            if (item.num === val) {
              item.data = JSON.parse(JSON.stringify(this.thirdForm));
            }
          });
        }
      },
    },
  },
  methods: {
    ...mapActions({
      saveForm: "form/saveForm",
    }),
    mutationForm(multiForm, formData, fileValue, stepNum) {
      fileValue = formData.filter((item) => item.key === "ava-dropzone")[0]
        .value;
      multiForm.map((item) => {
        if (item.num === stepNum) {
          item.data = JSON.parse(JSON.stringify(formData));
          item.data.map((child) => {
            if (child.key === "ava-dropzone") {
              child.value = [...fileValue];
            }
          });
        }
      });
    },
    onUploadFile(files) {
      this.formData.map((item) => {
        if (item.key === "ava-dropzone") {
          item.value = item.value.concat(files);
        }
      });
    },
    onRemoveFile(lastModified) {
      this.formData.map((item) => {
        if (item.key === "ava-dropzone") {
          const index = this.formData.findIndex(
            (item) => item.lastModified === lastModified
          );
          item.value.splice(index, 1);
        }
      });
    },
    onAddChosen(option) {
      this.formData.map((item) => {
        if (item.key === "position") {
          item.value.push(option);

          item.optionList.map((pos) => {
            if (pos.codename === option.codename) {
              pos.isChosen = true;
            }
          });
        }
      });
    },
    onRemoveChosen(chosenItem) {
      this.formData.map((item) => {
        if (item.key === "position") {
          let index = item.value.findIndex((i) => {
            i.codename === chosenItem.codename;
          });
          item.value.splice(index, 1);

          item.optionList.map((pos) => {
            if (pos.codename === chosenItem.codename) {
              pos.isChosen = false;
            }
          });
        }
      });
    },
    onChangeValue(value, index) {
      this.formData[index].value = value;
    },
    onChangeChildren(value, indexChild, index) {
      this.formData[index].childrens[indexChild].value = value;
    },
    addCompany() {
      this.formData.push(JSON.parse(JSON.stringify(defaultElement)));
    },
    removeCompany(index) {
      this.formData.splice(index, 1);
    },
    nextStep() {
      this.saveForm({
        formData: this.formData,
        numForm: this.numStep,
      });
      if (this.numStep === this.multiForm.length) {
        this.$router.push({ path: "/" });
      }
    },
    changeForm(num) {
      if (num < this.numStep) {
        let itemStep = document.querySelectorAll(".step-num");
        let index = this.multiForm.findIndex((item) => item.num === num + 1);
        itemStep[index]?.classList.remove("active");
        itemStep[index]?.classList.remove("done");
        this.multiForm.map((item) => {
          if (item.isDone) {
            itemStep[index]?.classList.add("done");
          }
        });
        itemStep[index - 1]?.classList.add("active");
      }
      this.numStep = num;
    },
    doneStep(num) {
      this.multiForm.map((item) => {
        if (item.num === num) {
          item.isDone = true;
        }
      });
      let itemStep = document.querySelectorAll(".step-num");
      let index = this.multiForm.findIndex((item) => item.num === num);
      itemStep[index]?.classList.remove("active");
      itemStep[index]?.classList.add("done");
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
