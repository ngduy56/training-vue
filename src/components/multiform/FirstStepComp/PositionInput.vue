<template>
  <div class="position-input">
    <InputLabel :label="label" :required="required" />
    <span class="note">Có thể chọn nhiều vị trí mà bạn muốn làm việc</span>
    <InputExam
      :optionList="filterOptions"
      :chosenList="chosenList"
      @input="changeFilterName"
      @addChosen="onAddChosen"
      @removeChosen="onRemoveChosen"
    />
  </div>
</template>
<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
import InputExam from "@/components/input/InputExam.vue";
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
    changeFilterName(filterName) {
      this.filterName = filterName;
    },
    onAddChosen(option) {
      this.$emit("onAddChosen", option);
    },
    onRemoveChosen(chosenItem) {
      this.$emit("onRemoveChosen", chosenItem);
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
::v-deep {
  .main {
    width: 528px;
    margin: 0;
  }
  .search-block {
    min-height: 40px !important;
    background-color: #ffffff;
  }
  .option-block {
    width: 100%;
    max-width: none;
    background-color: #ffffff;
  }
  .chosen-list {
    padding: 3px 0 4px 3px;
  }
  .chosen-item {
    height: 28px;
  }
  .input-search {
    padding: 6px 10px 6px 0;
  }
}
</style>
