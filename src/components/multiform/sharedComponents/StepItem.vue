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
  methods: {
    toggleActive() {
      this.$emit("toggleActive", this.index, this.item.path);
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
