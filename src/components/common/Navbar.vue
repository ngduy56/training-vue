<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Home</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          :to="{ name: 'inputExam' }"
          class="nav-item"
          active-class="active"
          tag="li"
          exact
        >
          <a class="nav-link">Exam 1</a>
        </router-link>
        <router-link
          :to="{ name: 'dropzone' }"
          class="nav-item"
          active-class="active"
          tag="li"
          exact
        >
          <a class="nav-link">Exam 2</a>
        </router-link>
        <router-link
          :to="{ name: 'multiform' }"
          class="nav-item"
          active-class="active"
          tag="li"
          exact
        >
          <a class="nav-link">Exam 3</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-top",
};
</script>

<style></style>
