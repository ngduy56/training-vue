<script>
import Navbar from "./components/common/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
* {
  box-sizing: border-box;
}
body {
  overflow-y: scroll;
}
#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
</style>
