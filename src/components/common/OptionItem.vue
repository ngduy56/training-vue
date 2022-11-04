<template>
  <div class="list-item" @click="addOption">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: this.option.name,
      codename: this.option.codename,
      code: this.option.code,
    };
  },
  methods: {
    addOption() {
      this.$emit("input", this.option);
    },
  },
};
</script>

<style></style>
