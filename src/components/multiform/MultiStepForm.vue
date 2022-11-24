<template>
  <div>
    <div class="block">
      <div class="content">
        <MultiInputView
          v-for="item in formData"
          v-model="item.value"
          :key="item.key"
          :item="item"
        />
      </div>
    </div>
    <button class="btn-next">Tiếp</button>
  </div>
</template>

<script>
import MultiInputView from "./MultiInputView.vue";

export default {
  props: {
    formData: {
      type: Array,
      require: true,
    },
  },
  components: {
    MultiInputView,
  },
};
</script>

<style scoped lang="scss">
.block {
  width: 100%;
  min-height: 346px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px 0 32px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  .content {
    width: 528px;
  }
}
.btn-next {
  width: 102px;
  height: 40px;
  background: #dcdcdc;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  border: none;
  color: #ffffff;
  margin-top: 24px;

  &.active {
    background: #627d98;
    cursor: pointer;
  }
}
</style>
