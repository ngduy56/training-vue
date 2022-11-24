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
        @input="onChange"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StepItem from "./StepItem.vue";
import { multiForm } from "@/components/multiform/ThirdStepComp/thirdForm";

export default {
  data() {
    return {
      multiForm,
    };
  },
  computed: {
    ...mapGetters({
      stepList: "form/getStepList",
    }),
  },
  components: {
    StepItem,
  },
  // mounted() {
  //   let item = document.querySelectorAll(".step-num");
  //   item[0].classList.add("active");
  // },
  watch: {
    $route() {
      const parts = this.$route.fullPath.split("/");
      const lastSegment = parts.pop();

      let item = document.querySelectorAll(".step-num");
      item.forEach((i) => {
        i.classList.remove("active");
      });
      let index = this.stepList.findIndex((item) => item.path === lastSegment);
      item[index].classList.add("active");

      this.stepList.map((i, index) => {
        if (i.isDone) {
          item[index].classList.add("done");
        }
      });
    },
  },
  methods: {
    toggleActive(index, path) {
      if (this.$route.path !== path && this.stepList[index].isDone) {
        this.$router.push({ path: path });

        let item = document.querySelectorAll(".step-num");
        item.forEach((i) => {
          i.classList.remove("active");
        });
        item[index].classList.add("active");
      }
    },
    onChange(num) {
      this.$emit("input", num);
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
