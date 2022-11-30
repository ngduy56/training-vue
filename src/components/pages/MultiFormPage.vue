<template>
  <div class="main">
    <StepElement @input="onChange" />
    <MultiStepForm
      :formData="formData"
      :numStep="numStep"
      @onChange="onChange"
      @onUploadFile="onUploadFile"
      @onRemoveFile="onRemoveFile"
      @onAddChosen="onAddChosen"
      @onRemoveChosen="onRemoveChosen"
      @onChangeChildren="onChangeChildren"
      @addCompany="addCompany"
      @removeCompany="removeCompany"
      @doneStep="doneStep"
      @nextStep="nextStep"
    />
  </div>
</template>

<script>
import StepElement from "@/components/multiform/sharedComponents/StepElement.vue";
import MultiStepForm from "@/components/multiform/MultiStepForm.vue";
import { multiForm, defaultElement } from "@/components/multiform/form";
import { mapActions } from "vuex";
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
    formData() {
      let rs = this.multiForm.filter((item) => item.num === this.numStep);
      return rs[0]?.data;
    },
  },
  methods: {
    ...mapActions({
      saveForm: "form/saveForm",
    }),
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
      this.saveForm({ formData: this.formData, numForm: this.numStep });

      if (this.numStep === this.multiForm.length) {
        this.$router.push({ path: "/" });
      }
    },
    onChange(num) {
      if (num < this.numStep) {
        let itemStep = document.querySelectorAll(".step-num");
        let index = this.multiForm.findIndex((item) => item.num === num + 1);
        itemStep[index]?.classList.remove("active");
        itemStep[index]?.classList.remove("done");
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
