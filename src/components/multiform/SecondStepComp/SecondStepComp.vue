<template>
  <div class="second-block">
    <div class="company-list">
      <CompanyItem
        v-for="(item, index) in secondStepForm"
        v-model="item.value"
        :item="item"
        :key="item.key"
        @onChangeChildren="
          (value, indexChild) => onChangeChildren(value, indexChild, index)
        "
      />
    </div>
    <button @click="nextStep">Next</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CompanyItem from "./CompanyItem.vue";
import { secondForm } from "./secondForm";

export default {
  data() {
    return {
      secondStepForm: secondForm,
    };
  },
  mounted() {
    if (this.secondSecondStore.length) {
      this.secondStepForm = this.secondSecondStore;
    }
  },
  computed: {
    ...mapGetters({
      secondSecondStore: "form/getSecondForm",
    }),
  },
  components: {
    CompanyItem,
  },
  methods: {
    ...mapActions({
      saveSecondForm: "form/saveSecondForm",
    }),
    onChangeChildren(value, indexChild, index) {
      this.secondStepForm[index].childrens.map((item, idx) => {
        if (idx === indexChild) {
          item.value = value;
        }
      });
    },
    nextStep() {
      this.saveSecondForm(this.secondStepForm);
      // this.$router.push({ path: "/3/3" });
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
