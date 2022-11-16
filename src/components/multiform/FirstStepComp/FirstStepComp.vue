<template>
  <div>
    <div class="first-block">
      <div class="info-content">
        <InputView
          v-for="item in firstStepForm"
          v-model="item.value"
          :key="item.key"
          :item="item"
          @onUploadFile="handleUploadFile"
          @onRemoveFile="handleRemoveFile"
          @onAddChosen="handleAddChosen"
          @onRemoveChosen="handleRemoveChosen"
        />
      </div>
    </div>
    <button class="btn-next active" @click="nextStep">Tiếp</button>
  </div>
</template>

<script>
import InputView from "./InputView.vue";
import { mapActions, mapGetters } from "vuex";
import { firstForm } from "./firstForm.js";
import { ValidateFirstForm } from "@/utils/ValidateForm";

export default {
  components: {
    InputView,
  },
  data() {
    return {
      firstStepForm: firstForm,
      isValid: false,
    };
  },
  mounted() {
    if (this.firstFormStore.length) {
      this.firstStepForm = this.firstFormStore;
    }
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
    handleUploadFile(files) {
      this.uploadFile(files);
    },
    handleRemoveFile(lastModified) {
      this.removeFile(lastModified);
    },
    handleAddChosen(option) {
      this.addChosen(option);
    },
    handleRemoveChosen(chosenItem) {
      this.removeChosen(chosenItem);
    },
    nextStep() {
      this.isValid = ValidateFirstForm(this.firstStepForm);
      if (this.isValid) {
        this.saveFirstForm(this.firstStepForm);
        this.$router.push({ path: "/3/2" });
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
