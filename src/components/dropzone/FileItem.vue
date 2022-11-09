<template>
  <div class="file-item">
    <div class="content">
      <ExcelIcon v-if="isPub" />
      <DocIcon v-if="isDoc" />
      <PdfIcon v-if="isPdf" />
      <UnknownIcon v-if="unknownFile" />
      <div class="file-info">
        <p>{{ name }}</p>
        <p>{{ sizeNum }} kB</p>
      </div>
    </div>
    <RemoveIcon @click.native="$emit('input', name)" />
  </div>
</template>

<script>
import RemoveIcon from "../icons/RemoveIcon.vue";
import ExcelIcon from "../icons/ExcelIcon.vue";
import DocIcon from "../icons/DocIcon.vue";
import PdfIcon from "../icons/PdfIcon.vue";
import UnknownIcon from "../icons/UnknownIcon.vue";
export default {
  props: {
    fileItem: { type: [Object, File], required: true },
  },
  data() {
    return {
      isPub: false,
      isDoc: false,
      isPdf: false,
      unknownFile: false,
      name: this.fileItem.name,
      size: this.fileItem.size,
    };
  },
  components: {
    RemoveIcon,
    ExcelIcon,
    DocIcon,
    PdfIcon,
    UnknownIcon,
  },
  created() {
    this.changeIcon(this.name);
  },
  computed: {
    sizeNum() {
      return Math.ceil(this.size / 1024);
    },
  },
  methods: {
    changeIcon(name) {
      if (
        name.includes(".pub") ||
        name.includes(".xlsx") ||
        name.includes(".xls")
      ) {
        this.isPub = true;
      } else if (name.includes(".docx") || name.includes(".doc")) {
        this.isDoc = true;
      } else if (name.includes(".pdf")) {
        this.isPdf = true;
      } else {
        this.unknownFile = true;
      }
    },
  },
};
</script>

<style scoped>
.file-item {
  min-width: 244px;
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
.file-item:hover {
  background-color: #e5f9ff33;
  border-color: #1991d2;
  cursor: pointer;
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
