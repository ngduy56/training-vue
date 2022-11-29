<template>
  <div>
    <div class="first-block">
      <div class="info-content">
        <InputView
          v-for="item in firstStepForm"
          v-model="item.value"
          :key="item.key"
          :item="item"
          @onUploadFile="onUploadFile"
          @onRemoveFile="onRemoveFile"
          @onAddChosen="onAddChosen"
          @onRemoveChosen="onRemoveChosen"
        />
      </div>
    </div>
    <button
      class="btn-next"
      :class="{ active: isComplete }"
      :disabled="!isComplete"
      @click="nextStep"
    >
      Tiếp
    </button>
  </div>
</template>

<script>
import InputView from "./InputView.vue";
import { mapActions, mapGetters } from "vuex";
import { firstForm } from "../form";
import { validateFirstForm } from "@/utils/ValidateForm";

export default {
  components: {
    InputView,
  },
  data() {
    return {
      firstStepForm: firstForm,
      isValid: false,
      isComplete: false,
    };
  },
  mounted() {
    if (this.firstFormStore.length) {
      this.firstStepForm = this.firstFormStore;
    }
  },
  watch: {
    firstStepForm: {
      handler() {
        let newArr = this.firstStepForm.filter((item) => item.value === "");
        if (newArr.length > 0) this.isComplete = false;
        else this.isComplete = true;
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      firstFormStore: "form/getFirstForm",
    }),
  },
  methods: {
    ...mapActions({
      addChosen: "position/addChosen",
      removeChosen: "position/removeChosen",

      uploadFile: "file/uploadFile",
      removeFile: "file/removeFile",

      saveFirstForm: "form/saveFirstForm",
    }),
    onUploadFile(files) {
      this.uploadFile(files);
    },
    onRemoveFile(lastModified) {
      this.removeFile(lastModified);
    },
    onAddChosen(option) {
      this.addChosen(option);
    },
    onRemoveChosen(chosenItem) {
      this.removeChosen(chosenItem);
    },
    nextStep() {
      this.isValid = validateFirstForm(this.firstStepForm);
      if (this.isValid) {
        this.saveFirstForm(this.firstStepForm);
        this.$router.push({ name: "secondStep" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.first-block {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px 0 32px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  .info-content {
    width: 528px;
  }
}
.btn-next {
  width: 102px;
  height: 40px;
  background: #dcdcdc;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  border: none;
  color: #ffffff;
  margin-top: 24px;

  &.active {
    background: #627d98;
    cursor: pointer;
  }
}
</style>
