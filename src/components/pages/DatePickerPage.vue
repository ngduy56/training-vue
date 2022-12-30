<template>
  <div class="main">
    <DatePicker
      v-model="datetime"
      :placeholder="'Choose day'"
      :mode="'single'"
      @onSelect="onSelect"
      @onClear="onClear"
      @onFocus="onFocus"
      @onBlur="onBlur"
    />
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
  methods: {
    onSelect(val) {
      console.log(val);
    },
    onClear() {
      console.log("clear");
    },
    onFocus() {
      console.log("focus");
    },
    onBlur() {
      console.log("blur");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 600px;
  margin: 1rem auto;
}
</style>
