<template>
  <div class="position-input">
    <InputLabel :label="'Vị trí làm việc'" :required="false" />
    <span class="note">Có thể chọn nhiều vị trí mà bạn muốn làm việc</span>
    <InputExam
      :optionList="filterOptions"
      :chosenList="chosenList"
      @inputAdd="handleAddChosen"
      @inputRemove="handleRemoveChosen"
    />
  </div>
</template>
<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
import InputExam from "@/components/multiform/input/InputExam.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    InputLabel,
    InputExam,
  },
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
};
</script>

<style lang="scss" scoped>
.position-input {
  margin-bottom: 10px;
}
.note {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
}
</style>
