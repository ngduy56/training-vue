<template>
  <div class="second-block">
    <div class="company-list">
      <CompanyItem />
    </div>
  </div>
</template>

<script>
import CompanyItem from "./CompanyItem.vue";
export default {
  components: {
    CompanyItem,
  },
};
</script>

<style lang="scss" scoped>
.second-block {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .company-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
}
</style>
