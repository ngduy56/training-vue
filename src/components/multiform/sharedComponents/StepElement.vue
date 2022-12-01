<template>
  <div class="step-block">
    <h5 class="title">Đơn ứng tuyển</h5>
    <div class="line"></div>
    <div class="step-list">
      <StepItem
        v-for="(item, index) in multiForm"
        :key="item.num"
        :item="item"
        :index="index"
        @changeForm="changeForm"
      />
    </div>
  </div>
</template>
<script>
import StepItem from "./StepItem.vue";
import { multiForm } from "@/components/multiform/form";

export default {
  data() {
    return {
      multiForm,
    };
  },
  components: {
    StepItem,
  },
  mounted() {
    let itemStep = document.querySelectorAll(".step-num");
    itemStep[0].classList.add("active");
  },
  methods: {
    changeForm(num, index) {
      this.$emit("changeForm", num);

      let itemStep = document.querySelectorAll(".step-num");
      itemStep.forEach((i) => {
        i.classList.remove("active");
      });
      itemStep[index].classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.step-block {
  position: relative;
  width: 100%;
  height: 148px;
  margin-bottom: 20px;
  .title {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
  }
  .line {
    width: 280px;
    height: 1px;
    position: absolute;
    top: 74px;
    left: 74px;
    background-color: #dbdbdb;
  }
  .step-list {
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin: 22px 0 32px 0;
    gap: 10px;
  }
}
</style>
