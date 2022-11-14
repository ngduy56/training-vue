<template>
  <div class="position-input">
    <InputLabel :label="label" :required="required" />
    <span class="note">Có thể chọn nhiều vị trí mà bạn muốn làm việc</span>
    <InputExam
      v-model="value"
      :optionList="optionList"
      :chosenList="chosenList"
      @input="changeFilterName"
      @inputAdd="onAddChosen"
      @inputRemove="onRemoveChosen"
    />
  </div>
</template>
<script>
import InputLabel from "@/components/multiform/sharedComponents/InputLabel.vue";
import InputExam from "@/components/multiform/input/InputExam.vue";
export default {
  data() {
    return {
      value: "",
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
