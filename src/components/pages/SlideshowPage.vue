<template>
  <div class="main">
    <CarouselComp :slides="slides" />
  </div>
</template>

<script>
import CarouselComp from "@/components/slideshow/CarouselComp.vue";
export default {
  data() {
    return {
      slides: [
        "https://picsum.photos/id/230/600/300",
        "https://picsum.photos/id/231/600/300",
        "https://picsum.photos/id/232/600/300",
        "https://picsum.photos/id/233/600/300",
        "https://picsum.photos/id/234/600/300",
        "https://picsum.photos/id/235/600/300",
        "https://picsum.photos/id/236/600/300",
      ],
    };
  },
  components: {
    CarouselComp,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 600px;
  margin: 1rem auto;
}
</style>
