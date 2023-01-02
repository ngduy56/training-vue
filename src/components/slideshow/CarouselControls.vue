<template>
  <div>
    <button class="carousel-control left" @click="$emit('prev')">Prev</button>
    <button class="carousel-control right" @click="$emit('next')">Next</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 30px;
  width: 50px;
  top: calc(50% - 15px);
  color: #f3f3f3;
  font-size: 14px;
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
