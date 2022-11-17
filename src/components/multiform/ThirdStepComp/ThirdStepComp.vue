<template>
  <div>
    <div class="third-block">
      <InputView
        v-for="item in thirdStepForm"
        v-model="item.value"
        :key="item.key"
        :item="item"
      />
    </div>
    <button
      class="btn-complete"
      :class="{ active: isComplete }"
      :disabled="!isComplete"
      @click="onComplete"
    >
      Hoàn thành
    </button>
  </div>
</template>

<script>
import { thirdForm } from "./thirdForm";
import InputView from "./InputView.vue";
import { validateThirdForm } from "@/utils/ValidateForm";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isValid: false,
      isComplete: false,
      thirdStepForm: JSON.parse(JSON.stringify(thirdForm)),
    };
  },
  components: { InputView },
  mounted() {
    if (this.thirdStepStore.length) {
      this.thirdStepForm = this.thirdStepStore;
    }
  },
  watch: {
    thirdStepForm: {
      handler() {
        this.thirdStepForm.map((item) => {
          if (item.value) {
            if (item.value === "") {
              this.isComplete = false;
            } else this.isComplete = true;
          }
        });
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      thirdStepStore: "form/getThirdForm",
    }),
  },
  methods: {
    ...mapActions({
      saveThirdForm: "form/saveThirdForm",
    }),
    onComplete() {
      this.isValid = validateThirdForm(this.thirdStepForm);
      if (this.isValid) {
        this.saveThirdForm(this.thirdStepForm);
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.third-block {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px 34px 32px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.btn-complete {
  width: 102px;
  height: 40px;
  background: #dcdcdc;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
  color: #ffffff;
  margin-top: 24px;
  outline: none;

  &.active {
    background: #627d98;
    cursor: pointer;
  }
}
</style>
