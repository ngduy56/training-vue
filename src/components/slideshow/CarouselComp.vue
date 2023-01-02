<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselIndicators
        :total="slides.length"
        :currentIndex="currentSlide"
        @changeSlide="changeSlide"
      />
      <CarouselItem
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :currentSlide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseover="stopSlideTimer"
        @mouseleave="startSlideTimer"
      />
      <CarouselControls @prev="prev" @next="next" />
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/slideshow/CarouselItem.vue";
import CarouselControls from "@/components/slideshow/CarouselControls.vue";
import CarouselIndicators from "@/components/slideshow/CarouselIndicators.vue";
export default {
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      direction: "right",
    };
  },
  props: {
    slides: {
      type: Array,
      require: true,
    },
  },
  components: {
    CarouselItem,
    CarouselControls,
    CarouselIndicators,
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeDestroy() {
    this.stopSlideTimer();
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this.next();
      }, 5000);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
      this.startSlideTimer();
    },
    changeSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
}
.carousel-inner {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
}
</style>
