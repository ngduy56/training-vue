<template>
  <div class="step-block">
    <h5 class="title">Đơn ứng tuyển</h5>
    <div class="line"></div>
    <div class="step-list">
      <StepItem
        v-for="(item, index) in list"
        :key="item.num"
        :item="item"
        :index="index"
        @toggleActive="toggleActive"
      />
    </div>
  </div>
</template>
<script>
import StepItem from "./StepItem.vue";
export default {
  data() {
    return {
      list: [
        { num: 1, name: "Thông tin cá nhân" },
        { num: 2, name: "Kinh nghiệm làm việc" },
        { num: 3, name: "Xác nhận thông tin" },
      ],
    };
  },
  components: {
    StepItem,
  },
  methods: {
    toggleActive(index) {
      let pathTo = `/3/${index + 1}`;
      if (this.$route.path !== pathTo) {
        this.$router.push({ path: `/3/${index + 1}` });
      }
      let item = document.querySelector(".line");
      item.style.width = `${140 * index + 1}px`;
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
    background: red;
    width: 280px;
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
