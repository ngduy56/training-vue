<template>
  <input-exam :cities="cities"></input-exam>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InputExam from "./InputExam.vue";
export default {
  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters({
      cities: "city/getCities",
    }),
  },
  methods: {
    ...mapActions({
      fetch: "city/fetchData",
    }),
    fetchData() {
      this.fetch();
    },
  },
  components: {
    InputExam,
  },
};
</script>

<style></style>
