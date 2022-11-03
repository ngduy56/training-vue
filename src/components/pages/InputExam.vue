<template>
  <div class="container">
    <div class="search-block">
      <svg
        class="search-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.8536 20.6464L16.9994 16.7923C18.2445 15.382 19 13.5292 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5C13.0292 19.5 14.882 18.7445 16.2923 17.4994L20.1464 21.3536C20.3417 21.5488 20.6583 21.5488 20.8536 21.3536C21.0488 21.1583 21.0488 20.8417 20.8536 20.6464ZM18 11.5C18 15.366 14.866 18.5 11 18.5C7.13401 18.5 4 15.366 4 11.5C4 7.63401 7.13401 4.5 11 4.5C14.866 4.5 18 7.63401 18 11.5Z"
          fill="#999999"
        />
      </svg>
      <div class="chosen-list">
        <div
          v-for="chosenCity in chosenCities"
          class="chosen-item"
          :key="chosenCity.code"
        >
          <span>{{ chosenCity.name }}</span>
          <svg
            @click="removeChosenCities(chosenCity)"
            class="close-icon"
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9375 8.0625L3.0625 15.9375"
              stroke="#627D98"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9375 15.9375L3.0625 8.0625"
              stroke="#627D98"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <input
        v-model="filterName"
        class="input-search"
        placeholder="Nhập tên thành phố để tìm kiếm..."
      />
    </div>
    <div class="city-block">
      <div class="city-list">
        <div
          v-for="city in filterCities"
          @click="addChosenCities(city)"
          class="list-item"
          :key="city.name"
        >
          {{ city.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "InputExam",
  data() {
    return {
      filterName: "",
      chosenCities: [],
    };
  },
  props: {
    cities: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters({}),
    filterCities() {
      return this.cities.filter((city) => {
        return city.name.match(this.filterName);
      });
    },
  },
  methods: {
    ...mapActions({
      removeOneInCities: "city/removeOneInCities",
      addOneInCities: "city/addOneInCities",
    }),
    addChosenCities(city) {
      this.chosenCities.push({
        code: city.code,
        codename: city.codename,
        name: city.name,
      });
      this.removeOneInCities({
        code: city.code,
        codename: city.codename,
        name: city.name,
      });
    },
    removeChosenCities(chosenCity) {
      const index = this.chosenCities.findIndex(
        (c) => c.code === chosenCity.code
      );
      this.chosenCities.splice(index, 1);

      this.addOneInCities({
        code: chosenCity.code,
        codename: chosenCity.codename,
        name: chosenCity.name,
      });
    },
  },
};
</script>

<style>
.container {
  width: 400px;
  max-width: 600px;
  margin: 2rem auto;
  padding: 0;
}
.search-block {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: #333333;
  border: 1px solid #dbdbdb;
  background-color: #e5f9ff33;
  border-radius: 4px;
  font-family: Noto Sans;
  font-style: normal;
}
.search-block:hover {
  border: 1px solid #1991d2;
}
.search-icon {
  min-width: 24px;
  height: 24px;
}
.input-search {
  min-width: 120px;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 14.5px 10px 14.5px 0;
  outline: none;
  border: none;
  background-color: transparent;
  caret-color: #1991d2;
  flex: 1;
}
.input-search::placeholder {
  color: #bfbfbf;
}
.city-block {
  max-width: 400px;
  width: 400px;
  background-color: #e5f9ff33;
  box-shadow: 0px 1px 8px 0px #66666640;
  border-radius: 4px;
  margin-top: 4px;
}
.city-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.list-item {
  font-family: "Noto Sans JP";
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #486581;
}
.list-item:hover {
  background-color: #617d98;
  color: #ffffff;
  cursor: pointer;
}
.chosen-list {
  max-width: 220px;
  padding: 6px 0 6px 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.chosen-item {
  font-family: Noto Sans;
  font-size: 14px;
  height: 32px;
  min-width: 83px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  line-height: 20px;
  background: #f0f4f8;
  color: #627d98;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.chosen-item:last-child {
  margin-right: 6px;
}
.close-icon:hover {
  cursor: pointer;
}
</style>
