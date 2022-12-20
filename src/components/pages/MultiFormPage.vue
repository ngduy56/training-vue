<template>
  <div class="main">
    <StepElement :multiForm="multiForm" @changeForm="changeForm" />
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
    isLastForm() {
      return this.numStep === this.multiForm.length;
    },
    formData() {
      const rs = this.multiForm.filter((item) => item.num === this.numStep)[0];
      rs.data.map((item) => {
        if (item.childrens && item.childrens.length > 0) {
          item.childrens.forEach((child) => {
            child.error = "";
          });
        } else {
          item.error = "";
        }
      });
      return rs.data;
    },
  },
  mounted() {
    if (this.isFirstForm && this.firstForm.length > 0) {
      this.mutationForm(this.multiForm, this.firstForm, this.numStep);
    }
  },
  watch: {
    numStep: {
      handler(val) {
        if (this.isFirstForm && this.firstForm.length > 0) {
          this.mutationForm(this.multiForm, this.firstForm, val);
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
    mutationForm(multiForm, formData, stepNum) {
      let fileValue = formData.filter((item) => item.key === "avatar")[0].value;
      multiForm.map((item) => {
        if (item.num === stepNum) {
          item.data = JSON.parse(JSON.stringify(formData));
          item.data.map((child) => {
            if (child.key === "avatar") {
              child.value = [...fileValue];
            }
          });
        }
      });
    },
    checkFileValue(firstArr, secondArr) {
      let isValid = true;
      for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
          if (firstArr[i].lastModified === secondArr[j]?.lastModified) {
            isValid = false;
          }
        }
      }
      return isValid;
    },
    onUploadFile(files) {
      this.formData.map((item) => {
        if (item.key === "avatar") {
          let isValid = this.checkFileValue(files, item.value);
          if (isValid) {
            item.value = item.value.concat(files);
          }
        }
      });
    },
    onRemoveFile(lastModified) {
      this.formData.map((item) => {
        if (item.key === "avatar") {
          const index = item.value.findIndex(
            (child) => child.lastModified === lastModified
          );
          item.value.splice(index, 1);
        }
      });
    },
    onAddChosen(option) {
      this.formData.map((item) => {
        if (item.key === "position") {
          let currentValue = item.value.filter(
            (child) => child.codename === option.codename
          );
          if (currentValue.length <= 0) {
            item.value.push(option);

            item.optionList.map((pos) => {
              if (pos.codename === option.codename) {
                pos.isChosen = true;
              }
            });
          }
        }
      });
    },
    onRemoveChosen(chosenItem) {
      this.formData.map((item) => {
        if (item.key === "position") {
          const index = item.value.findIndex(
            (child) => child.codename === chosenItem.codename
          );
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
      this.formData[index].error = "";
    },
    onChangeChildren(value, indexChild, index) {
      this.formData[index].childrens[indexChild].value = value;
      this.formData[index].childrens[indexChild].error = "";
    },
    addCompany() {
      this.formData.push(JSON.parse(JSON.stringify(defaultElement)));
    },
    removeCompany(index) {
      this.formData.splice(index, 1);
    },
    filterValue(form) {
      let data = {};
      let childValue = {};
      form.forEach((item) => {
        if (item.key) {
          data[item.key] = [];
        }
        item.data.forEach((child) => {
          childValue = {};
          if (child.childrens && child.childrens.length > 0) {
            child.childrens.forEach((i) => {
              childValue[i.key] = i.value;
            });
            data[item.key].push(childValue);
          } else {
            data[child.key] = child.value;
          }
        });
      });
      return data;
    },
    nextStep() {
      this.saveForm({
        formData: this.formData,
        numForm: this.numStep,
      });
      if (this.isLastForm) {
        const data = this.filterValue(this.multiForm);
        console.log(data);
        this.$toast.open({
          message: "Ứng tuyển thành công",
          type: "success",
          position: "top-right",
          duration: 2000,
        });
        this.$router.push({ path: "/" });
      }
    },
    changeForm(num) {
      if (num < this.numStep) {
        let itemStep = document.querySelectorAll(".step-num");
        let index = this.multiForm.findIndex((item) => item.num === num);
        itemStep[index + 1]?.classList.remove("active");
        itemStep[index]?.classList.add("active");

        this.multiForm.map((item, index) => {
          if (item.isDone) {
            itemStep[index].classList.add("done");
          }
        });
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
