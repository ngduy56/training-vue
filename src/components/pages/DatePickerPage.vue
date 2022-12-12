<template>
  <div class="main">
    <DatePicker v-model="datetime" :placeholder="'Choose day'" />
  </div>
</template>

<script>
import DatePicker from "@/components/datepicker/DatePicker.vue";
export default {
  data() {
    return {
      datetime: null,
    };
  },
  components: {
    DatePicker,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 600px;
  margin: 1rem auto;
}
</style>
