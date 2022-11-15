<template>
  <div class="salary-block">
    <!-- <InputLabel :label="'Mức lương mong muốn'" required="true" /> -->
    <div class="salary-input">
      <input type="text" />
      <span>VND</span>
    </div>
  </div>
</template>

<script>
// import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
export default {
  components: {
    // InputLabel,
  },
};
</script>

<style lang="scss" scoped>
.salary-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;
  height: 40px;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    padding: 10px 0 10px 8px;
  }
  span {
    transform: translateX(-10px);
  }
}
</style>
