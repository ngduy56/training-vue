<template>
  <div class="chosen-item">
    <span>{{ name }}</span>
    <svg
      class="close-icon"
      width="14"
      height="24"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9375 8.0625L3.0625 15.9375"
        stroke="#627D98"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9375 15.9375L3.0625 8.0625"
        stroke="#627D98"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ChosenItem",
  props: {
    chosenItem: {
      type: Object,
    },
  },
  data() {
    return {
      name: this.chosenItem.name,
      codename: this.chosenItem.codename,
      code: this.chosenItem.code,
    };
  },
};
</script>

<style></style>
