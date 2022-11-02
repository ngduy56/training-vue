<template>
  <div class="container">
    <input class="input-search" placeholder="Nhập tên thành phố để tìm kiếm" />
  </div>
</template>

<script>
export default {
  name: "InputExam",
};
</script>

<style>
.container {
  width: 600px;
  max-width: 600px;
  margin: 15rem auto;
}
.input-search {
  padding: 8px, 10px, 8px, 10px !important;
  width: 400px;
  height: 49px;
  border-radius: 4px;
  color: #bfbfbf;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #dbdbdb;
  background-color: #e5f9ff33;
}
</style>
