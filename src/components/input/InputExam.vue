<template>
  <div class="container">
    <div class="search-block">
      <SearchIcon />
      <div class="chosen-list">
        <ChosenItem
          v-for="chosenItem in chosenList"
          :key="chosenItem.code"
          :chosenItem="chosenItem"
          @input="removeChosen"
        >
        </ChosenItem>
        <input
          :value="value"
          @input="$emit('input', $event.target.value)"
          class="input-search"
          placeholder="Nhập tên"
        />

        <!-- <SearchInput
          v-model="value"
          :placeholder="'Nhập tên thành phố để tìm kiếm'"
        ></SearchInput> -->
      </div>
    </div>
    <div class="option-block">
      <div class="option-list">
        <OptionItem
          v-for="option in options"
          :key="option.codename"
          :option="option"
          @input="addOption"
        >
        </OptionItem>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "../icons/SearchIcon.vue";
import ChosenItem from "../input/ChosenItem.vue";
import OptionItem from "../input/OptionItem.vue";
// import SearchInput from "../input/SearchInput.vue";
export default {
  name: "InputExam",
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
      require: true,
    },
    chosenList: {
      type: Array,
      require: true,
    },
  },
  components: {
    SearchIcon,
    ChosenItem,
    OptionItem,
    // SearchInput,
  },
  methods: {
    addOption(option) {
      this.$emit("inputAdd", option);
    },
    removeChosen(chosenItem) {
      this.$emit("inputRemove", chosenItem);
    },
  },
};
</script>

<style>
.container {
  width: 400px;
  max-width: 600px;
  margin: 2rem auto;
  padding: 0;
}
.search-block {
  position: relative;
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: #333333;
  border: 1px solid #dbdbdb;
  background-color: #e5f9ff33;
  border-radius: 4px;
  font-family: Noto Sans;
  font-style: normal;
}
.search-block:hover {
  border: 1px solid #1991d2;
}
.search-icon {
  min-width: 24px;
  height: 24px;
}
.input-search {
  min-width: 120px;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 10px 8px 0;
  outline: none;
  border: none;
  background-color: transparent;
  caret-color: #1991d2;
  flex: 1;
}
.input-search::placeholder {
  color: #bfbfbf;
}
.option-block {
  max-width: 400px;
  width: 400px;
  background-color: #e5f9ff33;
  box-shadow: 0px 1px 8px 0px #66666640;
  border-radius: 4px;
  margin-top: 4px;
}
.option-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 240px;
}
.option-list::-webkit-scrollbar {
  display: none;
}
.chosen-list {
  width: 100%;
  padding: 6px 0 6px 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
