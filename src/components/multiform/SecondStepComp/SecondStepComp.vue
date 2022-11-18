<template>
  <div class="second-block">
    <div class="company-list">
      <CompanyItem
        v-for="(item, index) in secondStepForm"
        :value="item.value"
        :item="item"
        :key="item.lastModified"
        :error="item.error"
        @input="(value) => onChange(value, index)"
        @onChangeChildren="
          (value, indexChild) => onChangeChildren(value, indexChild, index)
        "
        @onRemove="onRemove"
      />
    </div>
    <div class="btn-add" @click="addCompany">
      <AddIcon />
      <span>Thêm công ty</span>
    </div>
    <div class="navigate-block">
      <button
        class="btn-next"
        :class="{ active: isComplete }"
        :disabled="!isComplete"
        @click="nextStep"
      >
        Tiếp
      </button>
      <button @click="previousStep">Quay lại</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CompanyItem from "./CompanyItem.vue";
import { defaultElement, secondForm } from "./secondForm";
import AddIcon from "@/components/icons/AddIcon.vue";
import { validateSecondForm } from "@/utils/ValidateForm";

export default {
  data() {
    return {
      isValid: false,
      isComplete: false,
      secondStepForm: JSON.parse(JSON.stringify(secondForm)),
    };
  },
  components: {
    CompanyItem,
    AddIcon,
  },
  mounted() {
    if (this.secondStepStore.length) {
      this.secondStepForm = this.secondStepStore;
    }
  },
  watch: {
    secondStepForm: {
      handler() {
        this.secondStepForm.map((item) => {
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
      secondStepStore: "form/getSecondForm",
    }),
  },
  methods: {
    ...mapActions({
      saveSecondForm: "form/saveSecondForm",
    }),
    onChange(value, index) {
      this.secondStepForm[index].value = value;
    },
    onChangeChildren(value, indexChild, index) {
      this.secondStepForm[index].childrens[indexChild].value = value;
    },
    addCompany() {
      this.secondStepForm.push(JSON.parse(JSON.stringify(defaultElement)));
    },
    onRemove(value) {
      let index = this.secondStepForm.findIndex((item) => item.value === value);
      this.secondStepForm.splice(index, 1);
    },
    nextStep() {
      this.isValid = validateSecondForm(this.secondStepForm);
      if (this.isValid) {
        this.saveSecondForm(this.secondStepForm);
        this.$router.push({ path: "/3/3" });
      }
    },
    previousStep() {
      this.$router.push({ path: "/3/1" });
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
  .btn-add {
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 24px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    outline: none;
    color: #48647f;
  }

  .navigate-block button {
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

    &:nth-child(2) {
      margin-left: 10px;
    }
  }
  .btn-next {
    &.active {
      cursor: pointer;
      background: #627d98;
    }
  }
}
</style>
