<template>
  <div class="datepicker">
    <div class="datepicker__wrapper" :class="{ focus: onFocus }">
      <input
        class="datepicker__input"
        type="text"
        v-model="datetime"
        :placeholder="placeholder"
        :ref="refs"
        @focus="focus"
        @blur="blur"
      />
      <span class="datepicker__icon-right" @click="toggleDatepicker">
        <DateIcon />
      </span>
    </div>
    <DatePickerTable
      v-model="datetime"
      :locale="locale"
      v-if="openPopup && this.mode === 'single'"
      @closePopup="openPopup = $event"
      @onSelect="onSelect"
      @onClear="onClear"
    />
  </div>
</template>

<script>
import DateIcon from "@/components/icons/DateIcon.vue";
import DatePickerTable from "@/components/datepicker/DatePickerTable.vue";
export default {
  data() {
    return {
      onFocus: false,
      datetime: null,
      openPopup: false,
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
    refs: {
      type: String,
      default: "datepicker__input",
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
  methods: {
    focus() {
      this.onFocus = true;
      this.openPopup = true;
      this.$emit("onFocus");
    },
    blur() {
      this.onFocus = false;
      this.$emit("onBlur");
    },
    toggleDatepicker() {
      this.openPopup = !this.openPopup;
      this.$refs[this.refs].focus();
    },
    onSelect(val) {
      this.$emit("onSelect", val);
    },
    onClear() {
      this.$emit("onClear");
    },
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
      font-size: 14px;
    }

    .datepicker__icon-right {
      color: #888;

      svg {
        fill: #888;
      }
    }
  }

  .focus {
    border: 1px solid #0085d1;
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
