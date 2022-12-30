<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselItem
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :currentSlide="currentSlide"
        :index="index"
      />
      <CarouselControls />
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/slideshow/CarouselItem.vue";
import CarouselControls from "@/components/slideshow/CarouselControls.vue";
export default {
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
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
  },
  mounted() {
    this.slideInterval = setInterval(() => {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.slideInterval);
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
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
