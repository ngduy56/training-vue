<template>
  <div class="container">
    <div class="search-block">
      <SearchIcon />
      <div class="chosen-list">
        <ChosenItem
          v-for="chosenItem in chosenList"
          :key="chosenItem.code"
          :chosenItem="chosenItem"
        >
        </ChosenItem>
      </div>
      <input
        v-model="filterName"
        class="input-search"
        placeholder="Nhập tên thành phố để tìm kiếm..."
      />
    </div>
    <div class="option-block">
      <div class="option-list">
        <OptionItem
          v-for="option in options"
          :key="option.codename"
          :option="option"
          @input="addOption(option)"
        >
        </OptionItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchIcon from "../icons/SearchIcon.vue";
import ChosenItem from "../common/ChosenItem.vue";
import OptionItem from "../common/OptionItem.vue";
export default {
  name: "InputExam",
  data() {
    return {
      filterName: "",
    };
  },
  props: {
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
  },
  computed: {
    ...mapGetters({}),
    filterOptions() {
      return this.options.filter((option) => {
        return option.name.match(this.filterName);
      });
    },
  },
  methods: {
    ...mapActions({}),

    addOption(city) {
      this.$emit("input", city);
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
  height: 100%;
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
  padding: 14.5px 10px 14.5px 0;
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
.list-item {
  font-family: "Noto Sans JP";
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #486581;
}
.list-item:hover {
  background-color: #617d98;
  color: #ffffff;
  cursor: pointer;
}
.chosen-list {
  max-width: 220px;
  padding: 6px 0 6px 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.chosen-item {
  font-family: Noto Sans;
  font-size: 14px;
  height: 32px;
  min-width: 83px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  line-height: 20px;
  background: #f0f4f8;
  color: #627d98;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.chosen-item:last-child {
  margin-right: 6px;
}
.close-icon:hover {
  cursor: pointer;
}
</style>
