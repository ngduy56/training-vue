<template>
  <div class="step-block">
    <h5 class="title">Đơn ứng tuyển</h5>
    <div class="line"></div>
    <div class="step-list">
      <StepItem
        v-for="(item, index) in stepList"
        :key="item.num"
        :item="item"
        :index="index"
        @toggleActive="toggleActive"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StepItem from "./StepItem.vue";

export default {
  computed: {
    ...mapGetters({
      stepList: "form/getStepList",
    }),
  },
  components: {
    StepItem,
  },
  mounted() {
    let item = document.querySelectorAll(".step-num");
    item[0].classList.add("active");
  },
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

      let line = document.querySelector(".line");
      line.style.width = `${140 * index}px`;
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

        let line = document.querySelector(".line");
        line.style.width = `${140 * index}px`;
      }
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
    height: 2px;
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
