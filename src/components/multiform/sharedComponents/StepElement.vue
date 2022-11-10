<template>
  <div class="step-block">
    <h5 class="title">Đơn ứng tuyển</h5>
    <div class="step-list">
      <div class="step-item">
        <div class="step-num"><span>1</span></div>
        <div class="step-title">Thông tin cá nhân</div>
      </div>
      <div class="step-item">
        <div class="step-num"><span>2</span></div>
        <div class="step-title">Kinh nghiệm làm việc</div>
      </div>
      <div class="step-item">
        <div class="step-num"><span>3</span></div>
        <div class="step-title">Xác nhận thông tin</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.step-block {
  width: 100%;
  .title {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
  }
  .step-list {
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin: 22px 0 32px 0;
    gap: 58px;

    .step-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .step-num {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 6px 12px;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          border-radius: 50%;
          color: #ffffff;
          background-color: #617d98;
        }
      }
      .step-title {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
      }
    }
  }
}
</style>
