<template>
  <InputExam
    v-model="filterName"
    :options="filterOptions"
    :chosenList="chosenList"
    @inputAdd="handleAddOption"
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
      cities: "city/getCities",
      chosenList: "city/getChosenList",
    }),
    filterOptions() {
      return this.cities.filter((option) => {
        return option.name.match(this.filterName);
      });
    },
  },
  methods: {
    ...mapActions({
      getCity: "city/getCityList",
      addChosen: "city/addChosenCity",
      removeChosen: "city/removeChosenCity",
    }),
    getCityList() {
      this.getCity();
    },
    handleAddOption(option) {
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
