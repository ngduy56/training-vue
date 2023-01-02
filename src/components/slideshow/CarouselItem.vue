<template>
  <transition :name="transtition">
    <div
      class="item"
      v-show="currentSlide === index"
      @mouseover="$emit('mouseover')"
      @mouseleave="$emit('mouseleave')"
    >
      <img :src="slide" />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    slide: {
      require: true,
    },
    currentSlide: {
      type: Number,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
    direction: {
      type: String,
    },
  },
  computed: {
    transtition() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
