<template>
  <div class="popup">
    <div class="overlay-popup"></div>
    <div class="popup__container">
      <div class="popup__header">
        <div class="year-click">
          <span>2022</span>
          <button>
            <svg
              class="svg-icon"
              style="vertical-align: middle; overflow: hidden"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M832 128h-64V64h-64v64H320V64h-64v64h-64a64.19 64.19 0 0 0-64 64v640a64.19 64.19 0 0 0 64 64h640a64.19 64.19 0 0 0 64-64V192a64.19 64.19 0 0 0-64-64z m0 704H192V256h640z"
              />
              <path d="M256 320h224v192H256z" />
            </svg>
            <span class="tooltiptext">Now</span>
          </button>
        </div>
        <div class="display-flex">
          <div class="date-month-click">Mon, Dec 12</div>
        </div>
      </div>
      <div class="popup__body">
        <div class="popup__body-top">
          <div class="month-picker">
            <span class="btn-prev" @click="decreaseMonth">&#10094;</span>
            <span @click="mode = 'chooseMonth'">{{ monthChoose.long_nm }}</span>
            <span class="btn-next" @click="increaseMonth">&#10095;</span>
          </div>

          <div class="year-picker">
            <span class="btn-prev" @click="decreaseYear">&#10094;</span>
            <span @click="mode = 'chooseYear'">{{ yearChoose }}</span>
            <span class="btn-next" @click="increaseYear">&#10095;</span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th v-for="weekday in weekdays" :key="weekday.key">
                {{ weekday.short_nm }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="n in (1, numberOfWeek)" :key="n">
              <td
                v-for="weekday in weekdays"
                :key="weekday.key"
                :class="{
                  active: checkActiveDate(
                    filterDateByGroup(n - 1)[weekday.key]
                  ),
                }"
              >
                <span
                  v-if="
                    filterDateByGroup(n - 1)[weekday.key] &&
                    filterDateByGroup(n - 1)[weekday.key] != 0
                  "
                  @click="chooseDate(filterDateByGroup(n - 1)[weekday.key])"
                  >{{ filterDateByGroup(n - 1)[weekday.key] }}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: null,
      monthChoose: null,
      months: [],
      year: null,
      yearChoose: null,
      years: [],
      weekday: null,
      weekdays: [],
      date: null,
      dates: [],
      dateByGroup: [],
      chooseDay: null,
      startDay: null,
      numberOfFirstWeek: 0,
      numberOfWeek: 0,
      mode: "chooseDate",
    };
  },
  props: {
    value: {
      default: null,
      require: true,
    },
    locale: {
      typeof: String,
    },
  },
  created() {
    this.getMonthList();
    this.getWeekDays();
    let now = new Date();
    if (this.value && this.value.length > 0) {
      now = new Date(this.value);
      this.year = now.getFullYear();
      this.date = now.getDate();
      this.month = this.months.find((c) => c.key == now.getMonth() + 1);
      this.monthChoose = this.month;
      this.yearChoose = this.year;
      this.getListYear(this.year);
    } else {
      this.monthChoose = this.months.find((c) => c.key == now.getMonth() + 1);
      this.yearChoose = now.getFullYear();
      this.getListYear(this.yearChoose);
    }
    const weekday = now.toLocaleDateString(this.locale, { weekday: "short" });
    console.log(weekday);
    this.weekday = this.weekdays.find((c) => c.short_nm == weekday);
    this.prepareDates();
  },
  computed: {
    getChooseDay() {
      if (this.date && this.month && this.year) {
        let month = this.month ? this.month.key - 1 : 0;
        const date = new Date(this.year, month, this.date);
        const dateOptions = {
          weekday: "short",
          month: "short",
          day: "numeric",
        };
        return date.toLocaleDateString(this.locale, dateOptions);
      } else {
        return "-";
      }
    },
    convertDate() {
      let month = this.month ? this.month.key - 1 : 1;
      const date = new Date(this.year, month, this.date);
      const dateOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      return date.toLocaleDateString(this.locale, dateOptions);
    },
    filterDateByGroup() {
      return (group) => {
        return this.dateByGroup.find((c) => c.key == group)
          ? this.dateByGroup.find((c) => c.key == group).date
          : [];
      };
    },
    checkActiveDate() {
      return (date) => {
        return (
          this.date == date &&
          this.monthChoose == this.month &&
          this.yearChoose == this.year
        );
      };
    },
  },
  methods: {
    getMonthList() {
      this.months = [];
      for (let i = 0; i < 12; i++) {
        let data = {
          key: i + 1,
          short_nm: new Date(null, i + 1, null).toLocaleDateString(
            this.locale,
            {
              month: "short",
            }
          ),
          long_nm: new Date(null, i + 1, null).toLocaleDateString(this.locale, {
            month: "long",
          }),
        };
        this.months.push(data);
      }
    },
    getWeekDays() {
      let baseDate = new Date(Date.UTC(2017, 0, 2));
      this.weekdays = [];
      for (let i = 0; i < 7; i++) {
        let data = {
          key: i,
          short_nm: baseDate.toLocaleDateString(this.locale, {
            weekday: "short",
          }),
          long_nm: baseDate.toLocaleDateString(this.locale, {
            weekday: "long",
          }),
        };
        this.weekdays.push(data);
        baseDate.setDate(baseDate.getDate() + 1);
      }
    },
    getListYear(from) {
      this.years = [];
      for (let j = 1; j < 9; j++) {
        this.years.push(from - j);
      }

      this.years.reverse();

      for (let i = 0; i < 10; i++) {
        this.years.push(from + i);
      }
    },
    getAllDaysInMonth(year, month) {
      const date = new Date(year, month, 1);
      const dates = [];
      while (date.getMonth() === month) {
        dates.push(new Date(date).getDate());
        date.setDate(date.getDate() + 1);
      }
      return dates;
    },
    prepareDates() {
      this.dates = this.getAllDaysInMonth(
        this.yearChoose,
        this.monthChoose.key - 1
      );
      this.startDay = new Date(this.yearChoose, this.monthChoose.key - 1, 1);
      let firstWeek = this.startDay.toLocaleDateString(this.locale, {
        weekday: "short",
      });
      this.numberOfWeek = Math.ceil(this.dates.length / 7) + 1;
      this.dateByGroup = [];
      this.numberOfFirstWeek =
        7 - this.weekdays.find((c) => c.short_nm == firstWeek).key;
      let firstDates = [];
      for (let i = 0; i < this.numberOfFirstWeek; i++) {
        firstDates.push(this.dates[i]);
      }
      if (this.numberOfFirstWeek < 7) {
        for (let k = 0; k < 7 - this.numberOfFirstWeek; k++) {
          firstDates.unshift(0);
        }
      }
      let firstData = {
        key: 0,
        date: firstDates,
      };
      this.dateByGroup.push(firstData);
      for (let i = 0; i < this.numberOfWeek - 1; i++) {
        let dates = [];
        for (
          let j = this.numberOfFirstWeek + 7 * i;
          j < this.numberOfFirstWeek + 7 * i + 7;
          j++
        ) {
          dates.push(this.dates[j]);
        }
        let data = {
          key: i + 1,
          date: dates,
        };

        this.dateByGroup.push(data);
      }
    },
    closePopup() {
      this.$emit("closePopup", false);
    },
    chooseDate(date) {
      this.date = date;
      this.month = this.monthChoose;
      this.year = this.yearChoose;
      this.$emit("input", this.convertDate);
      this.$emit("onSelect", this.convertDate);
    },
    decreaseMonth() {
      if (this.monthChoose.key == 1) {
        this.yearChoose = this.yearChoose - 1;
        this.monthChoose = this.months.find((c) => c.key == 12);
      } else {
        this.monthChoose = this.months.find(
          (c) => c.key == this.monthChoose.key - 1
        );
      }
      this.prepareDates();
    },
    increaseMonth() {
      if (this.monthChoose.key == 12) {
        this.yearChoose = this.yearChoose + 1;
        this.monthChoose = this.months.find((c) => c.key == 1);
      } else {
        this.monthChoose = this.months.find(
          (c) => c.key == this.monthChoose.key + 1
        );
      }
      this.prepareDates();
    },
    decreaseYear() {
      this.yearChoose -= 1;
      this.prepareDates();
    },
    increaseYear() {
      this.yearChoose += 1;
      this.prepareDates();
    },
    decreaseYearRange() {
      let from = this.years[0] - 10;
      this.getListYear(from);
    },
    increaseYearRange() {
      let from = this.years.slice(-1).pop() + 9;
      this.getListYear(from);
    },
    chooseYear(year) {
      this.yearChoose = year;
      this.mode = "chooseDate";
    },
    chooseMonth(month) {
      this.monthChoose = month;
      this.mode = "chooseDate";
    },
    getToday() {
      const now = new Date();
      this.date = now.getDate();
      this.year = now.getFullYear();
      this.month = this.months.find((c) => c.key == now.getMonth() + 1);
      this.prepareDates();
      this.yearChoose = this.year;
      this.monthChoose = this.month;
    },
    clear() {
      this.date = null;
      this.month = null;
      this.year = null;
      this.$emit("input", null);
      this.$emit("onClear");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 9;

  .overlay-popup {
    position: fixed;
    content: "";
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: 0 0;
    top: 0;
    left: 0;
  }
  .popup__container {
    background: #fff;
    border-radius: 4px;
    min-width: 292px;
    border: 1px solid #dcdcdc;

    .popup__header {
      padding: 16px;
      background: #0085d1;
      height: 86px;

      .year-click {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        color: #f0f0f0;
        text-align: left;
        margin-bottom: 8px;
        transition: all 0.25s;

        span {
          font-size: 14px;
          &:hover {
            cursor: pointer;
          }
        }

        button {
          background: 0 0;
          border: none;
          outline: 0;
          cursor: pointer;
          transition: all 0.25s;
          padding: 4px;
          border-radius: 4px;
          position: relative;

          .svg-icon {
            width: 18px;
            height: 18px;
            fill: #fff;
            vertical-align: middle;
            overflow: hidden;

            &:hover + .tooltiptext {
              visibility: visible;
            }
          }
          .tooltiptext {
            visibility: hidden;
            background-color: #000;
            color: #fff;
            text-align: center;
            border-radius: 4px;
            padding: 4px 12px;
            position: absolute;
            top: -29px;
            left: -12px;
            z-index: 2;
          }
        }
      }

      .display-flex {
        display: flex;
        justify-content: space-between;

        .date-month-click {
          width: 50%;
          font-size: 15px;
          font-weight: 700;
          color: #f0f0f0;
          text-align: left;
        }
      }
    }
    .popup__body {
      padding: 16px;

      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        span {
          padding: 2px 4px;
          cursor: pointer;
          transition: all 0.25s ease-in-out;
          font-size: 14px;
        }

        .month-picker {
          width: 58%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      table {
        width: 100%;
        border-collapse: collapse;
        th {
          color: #aaa;
          font-weight: 400;
          font-size: 13px;
          padding: 8px 4px;
        }
        td {
          height: 33px;
          width: 33px;

          span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            cursor: pointer;
            border-radius: 50%;
            width: 28px;
            height: 28px;
            transition: all 0.25s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
