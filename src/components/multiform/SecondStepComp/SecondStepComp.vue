<template>
  <div class="second-block">
    <div class="company-list">
      <CompanyItem
        v-for="(item, index) in secondStepForm"
        v-model="item.value"
        :index="index"
        :item="item"
        :key="item.key"
        @onChangeChildren="
          (value, indexChild) => onChangeChildren(value, indexChild, index)
        "
      />
    </div>
  </div>
</template>

<script>
import CompanyItem from "./CompanyItem.vue";
import { secondForm } from "./secondForm";

export default {
  data() {
    return {
      secondStepForm: secondForm,
    };
  },
  components: {
    CompanyItem,
  },
  methods: {
    onChangeChildren(value, indexChild, index) {
      console.log(value, indexChild, index);
    },
  },
};
</script>

<style lang="scss" scoped>
.second-block {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .company-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
}
</style>
