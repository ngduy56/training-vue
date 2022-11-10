<template>
  <div class="main">
    <StepElement />
    <router-view></router-view>
  </div>
</template>

<script>
import StepElement from "@/components/multiform/sharedComponents/StepElement.vue";
export default {
  components: {
    StepElement,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 926px;
  margin: 2rem auto;
}
</style>
