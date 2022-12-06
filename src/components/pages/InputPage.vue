<template>
  <InputExam
    v-model="filterName"
    :optionList="filterOptions"
    :chosenList="chosenList"
    @inputAdd="handleAddChosen"
    @inputRemove="handleRemoveChosen"
  ></InputExam>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InputExam from "../input/InputExam.vue";
export default {
  data() {
    return {
      filterName: "",
    };
  },
  created() {
    this.getCityList();
  },
  computed: {
    ...mapGetters({
      optionList: "city/getCities",
      chosenList: "city/getChosenList",
    }),
    filterOptions() {
      return this.optionList.filter((option) => {
        return option.name.match(this.filterName);
      });
    },
  },
  methods: {
    ...mapActions({
      getCities: "city/getCityList",
      addChosen: "city/addChosenCity",
      removeChosen: "city/removeChosenCity",
    }),
    getCityList() {
      this.getCities();
    },
    handleAddChosen(option) {
      this.addChosen(option);
    },
    handleRemoveChosen(chosenItem) {
      this.removeChosen(chosenItem);
    },
  },
  components: {
    InputExam,
  },
};
</script>

<style></style>
