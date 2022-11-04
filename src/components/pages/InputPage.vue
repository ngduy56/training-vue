<template>
  <InputExam
    :options="cities"
    :chosenList="chosenCities"
    @input="handleAddOption"
  ></InputExam>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InputExam from "./InputExam.vue";
export default {
  created() {
    this.getCityList();
  },
  computed: {
    ...mapGetters({
      cities: "city/getCities",
      chosenCities: "city/getChosenCities",
    }),
  },
  methods: {
    ...mapActions({
      getCity: "city/getCityList",
      addChosen: "city/addChosenCity",
    }),
    getCityList() {
      this.getCity();
    },
    handleAddOption(city) {
      this.addChosen(city);
    },
  },
  components: {
    InputExam,
  },
};
</script>

<style></style>
