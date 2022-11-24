<template>
  <div class="main">
    <StepElement @input="onChange" />
    <MultiStepForm :formData="chooseFormData" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import StepElement from "@/components/multiform/sharedComponents/StepElement.vue";
import MultiStepForm from "@/components/multiform/MultiStepForm.vue";
import { multiForm } from "@/components/multiform/ThirdStepComp/thirdForm";
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
