<template>
  <div>
    <div class="file-block">
      <div class="file-item">
        <div class="content">
          <ExcelIcon />
          <div class="file-info">
            <p>sample.excel</p>
            <p>905kB</p>
          </div>
        </div>
        <RemoveIcon />
      </div>
      <div class="file-item">
        <div class="content">
          <PdfIcon />
          <div class="file-info">
            <p>sample.pdf</p>
            <p>905kB</p>
          </div>
        </div>
        <RemoveIcon />
      </div>
      <div class="file-item">
        <div class="content">
          <DocIcon />
          <div class="file-info">
            <p>sample.doc</p>
            <p>905kB</p>
          </div>
        </div>
        <RemoveIcon />
      </div>
      <NextIcon />
    </div>
    <div class="unknown-block">
      <div class="file-item">
        <div class="content">
          <UnknownIcon />
          <div class="file-info">
            <p>sample.js</p>
            <p>905kB</p>
          </div>
        </div>
        <RemoveIcon />
      </div>
    </div>
  </div>
</template>

<script>
import RemoveIcon from "../icons/RemoveIcon.vue";
import ExcelIcon from "../icons/ExcelIcon.vue";
import PdfIcon from "../icons/PdfIcon.vue";
import DocIcon from "../icons/DocIcon.vue";
import UnknownIcon from "../icons/UnknownIcon.vue";
import NextIcon from "../icons/NextIcon.vue";
export default {
  components: {
    RemoveIcon,
    ExcelIcon,
    PdfIcon,
    DocIcon,
    UnknownIcon,
    NextIcon,
  },
};
</script>

<style scoped>
.file-block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 33px;
  gap: 17px;
}
.unknown-block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 14px;
  gap: 17px;
}
.file-item {
  width: 244px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  padding: 0 8px 0 4px;
}
.content {
  display: flex;
  align-items: center;
}
.file-info {
  margin-left: 14px;
}
.file-info p {
  margin-bottom: 0;
  font-family: "Noto Sans";
  font-style: normal;
}
.file-info p:first-child {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
}
.file-info p:nth-child(2) {
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
}
</style>
