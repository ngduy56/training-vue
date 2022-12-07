<template>
  <div
    class="option-item"
    :class="{ 'is-chosen': optionItem.isChosen }"
    @click="addOption"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    optionItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: this.optionItem.name,
    };
  },
  methods: {
    addOption() {
      this.$emit("onAdd", this.optionItem);
    },
  },
};
</script>

<style scoped>
.option-item {
  font-family: " Noto Sans JP";
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #486581;
}
.option-item:hover {
  background-color: #617d98;
  color: #ffffff;
  cursor: pointer;
}
.is-chosen {
  background-color: #617d98;
  color: #ffffff;
}
</style>
