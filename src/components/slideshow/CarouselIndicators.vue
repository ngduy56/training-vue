<template>
  <div class="carousel-indicators">
    <button
      v-for="(item, index) in total"
      class="carousel-indicator-item"
      :class="{ active: currentIndex === index }"
      :key="index"
      @click="$emit('changeSlide', index)"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
    },
    currentIndex: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-indicator-item {
  width: 10px;
  height: 10px;
  border: none;
  background-color: #fff;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}
.active {
  opacity: 1;
}
</style>
