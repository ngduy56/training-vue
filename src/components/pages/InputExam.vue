<template>
    <div class="container">
        <input class="input-search" placeholder="Nhập tên thành phố để tìm kiếm"/>
    </div>
</template>

<script>
export default {
    name: "InputExam",
}
</script>

<style>
.container {
    width: 600px;
    max-width: 600px;
    margin: 20rem auto;
}
.input-search {
    width: 400px;
    height: 49px;
    border-radius: 4px;
    padding: 8px, 10px, 8px, 10px;
    color: rgba(229, 249, 255, 0.2);
}

</style>