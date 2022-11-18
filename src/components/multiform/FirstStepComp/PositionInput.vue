<template>
  <div class="position-input">
    <InputLabel :label="label" :required="required" />
    <span class="note">Có thể chọn nhiều vị trí mà bạn muốn làm việc</span>
    <InputExam
      v-model="filterName"
      :optionList="filterOptions"
      :chosenList="chosenList"
      @onAdd="onAddChosen"
      @onRemove="onRemoveChosen"
    />
  </div>
</template>
<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
import InputExam from "@/components/multiform/input/InputExam.vue";
export default {
  data() {
    return {
      filterName: "",
    };
  },
  components: {
    InputLabel,
    InputExam,
  },
  props: {
    optionList: {
      type: Array,
      required: true,
    },
    chosenList: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
  },
  computed: {
    filterOptions() {
      return this.optionList.filter((option) => {
        return option.name.match(this.filterName);
      });
    },
  },
  methods: {
    onAddChosen(option) {
      this.$emit("onAddChosen", option);
    },
    onRemoveChosen(chosenItem) {
      this.$emit("onRemoveChosen", chosenItem);
    },
    changeFilterName() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.position-input {
  margin-bottom: 10px;
  position: relative;
}
.note {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
}
</style>
