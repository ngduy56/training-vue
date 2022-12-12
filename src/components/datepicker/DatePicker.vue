<template>
  <div class="datepicker">
    <div class="datepicker__wrapper">
      <input
        type="text"
        class="datepicker__input"
        v-model="datetime"
        :placeholder="placeholder"
      />
      <span class="datepicker__icon-right">
        <DateIcon />
      </span>
    </div>
    <DatePickerTable v-model="datetime" :locale="locale" />
  </div>
</template>

<script>
import DateIcon from "@/components/icons/DateIcon.vue";
import DatePickerTable from "@/components/datepicker/DatePickerTable.vue";
export default {
  data() {
    return {
      datetime: null,
      locale: "en-US",
    };
  },
  props: {
    value: {
      default: null,
      require: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "single",
    },
  },
  created() {
    this.datetime = this.value;
  },
  watch: {
    datetime: function (value) {
      if (value) {
        this.$emit("input", value);
      }
    },
  },
  components: {
    DateIcon,
    DatePickerTable,
  },
};
</script>

<style lang="scss" scoped>
.datepicker {
  display: inline-block;
  position: relative;

  &__wrapper {
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    padding: 6px 12px;
    transition: all 0.25s ease-in-out;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    .datepicker__input {
      color: #888;
      width: 100%;
    }

    .datepicker__icon-right {
      color: #888;

      svg {
        fill: #888;
      }
    }
  }

  .focus {
    border: 1px solid #16a085;
  }

  &__input {
    border: none;
    outline: 0;
    padding-right: 8px;
  }

  &__icon-right {
    cursor: pointer;
    margin-top: 2px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
