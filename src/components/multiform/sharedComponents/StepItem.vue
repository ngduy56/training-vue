<template>
  <div class="step-item">
    <span @click="toggleActive" class="step-num">{{ item.num }} </span>
    <div class="step-title">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  mounted() {
    let item = document.querySelectorAll(".step-num");
    item[0].classList.add("active");
  },
  watch: {
    $route() {
      var parts = this.$route.fullPath.split("/");
      var lastSegment = parts.pop() || parts.pop();

      let item = document.querySelectorAll(".step-num");
      item.forEach((i) => {
        i.classList.remove("active");
      });
      item[lastSegment - 1].classList.add("active");

      let line = document.querySelector(".line");
      line.style.width = `${140 * (lastSegment - 1)}px`;
    },
  },
  methods: {
    toggleActive() {
      this.$emit("toggleActive", this.index);
      let item = document.querySelectorAll(".step-num");
      item.forEach((i) => {
        i.classList.remove("active");
      });
      item[this.index].classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 140px;

  .step-title {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
  .step-num {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #dbdbdb;
    z-index: 20;

    &.active {
      scale: 1.2;
      background-color: #617d98;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
