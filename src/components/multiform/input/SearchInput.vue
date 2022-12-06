<template>
  <input
    class="input-search"
    v-model="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focusInput')"
  />
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  props: {
    placeholder: {
      type: String,
    },
  },
};
</script>

<style>
.input-search {
  min-width: 120px;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 6px 10px 6px 0;
  outline: none;
  border: none;
  background-color: transparent;
  caret-color: #1991d2;
  flex: 1;
}
.input-search::placeholder {
  color: #999999;
}
</style>
