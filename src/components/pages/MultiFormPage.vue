<template>
  <div class="main">
    <StepElement @input="onChange" />
    <MultiStepForm
      :formData="chooseFormData"
      :numStep="numLocal"
      @changeForm="onChange"
      @doneStep="doneStep"
    />
  </div>
</template>

<script>
import StepElement from "@/components/multiform/sharedComponents/StepElement.vue";
import MultiStepForm from "@/components/multiform/MultiStepForm.vue";
import { multiForm } from "@/components/multiform/form";
export default {
  data() {
    return {
      numLocal: 1,
      multiForm,
    };
  },
  components: {
    StepElement,
    MultiStepForm,
  },
  computed: {
    chooseFormData() {
      let rs = this.multiForm.filter((item) => item.num === this.numLocal);
      return rs[0].data;
    },
  },
  methods: {
    onChange(num) {
      this.numLocal = num;

      let itemStep = document.querySelectorAll(".step-num");
      let index = this.multiForm.findIndex((item) => item.num === num + 1);
      itemStep[index - 1]?.classList.add("active");
      itemStep[index]?.classList.remove("done");
      itemStep[index]?.classList.remove("active");
    },
    doneStep(num) {
      this.multiForm.map((item) => {
        if (item.num === num) {
          item.isDone = true;
        }
      });
      let itemStep = document.querySelectorAll(".step-num");
      let index = this.multiForm.findIndex((item) => item.num === num);
      itemStep[index].classList.remove("active");
      itemStep[index].classList.add("done");
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
