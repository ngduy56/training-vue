<template>
  <div class="main">
    <div @click="showDropdown" v-click-outside="hideDropdown">
      <div class="search-block" :class="{ 'is-focused': isFocused }">
        <SearchIcon />
        <div class="chosen-list">
          <ChosenItem
            v-for="chosenItem in chosenList"
            :key="chosenItem.code"
            :chosenItem="chosenItem"
            @onRemove="removeChosen"
          />
          <SearchInput
            v-model="value"
            :placeholder="'Nhập tên để tìm kiếm'"
            @input="changeFilterName"
            @focusInput="showDropdown"
          />
        </div>
      </div>
      <div class="option-block">
        <div v-if="isFocused" class="option-list">
          <OptionItem
            v-for="optionItem in optionList"
            :key="optionItem.code"
            :optionItem="optionItem"
            @onAdd="addChosen"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ChosenItem from "./ChosenItem.vue";
import OptionItem from "./OptionItem.vue";
import SearchInput from "./SearchInput.vue";
export default {
  name: "InputExam",
  data() {
    return {
      value: "",
      isFocused: false,
    };
  },
  props: {
    optionList: {
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
    SearchInput,
  },
  methods: {
    addChosen(optionItem) {
      this.$emit("onAdd", optionItem);
    },
    removeChosen(chosenItem) {
      this.$emit("onRemove", chosenItem);
    },
    changeFilterName() {
      this.$emit("input", this.value);
    },
    showDropdown() {
      this.isFocused = true;
    },
    hideDropdown() {
      this.isFocused = false;
    },
  },
};
</script>

<style scoped>
.main {
  padding: 0;
  width: 528px;
}
.search-block {
  position: relative;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: #333333;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
.is-focused {
  border-color: #1991d2;
}
.search-icon {
  min-width: 24px;
  height: 24px;
}
.option-block {
  width: 100%;
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
.chosen-list {
  width: 100%;
  padding: 4.2px 0 4.2px 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
