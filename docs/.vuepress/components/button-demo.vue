<template>
  <div>
    <div class="info">按钮用于触发操作。</div>
    <div class="useRule item">
      <div class="title">使用原则</div>
      <ul>
        <li>目前的按钮都应该有：Nomarl、Active、Hover、Loading、Disable 状态。</li>
        <li>按钮文字与按钮图标的颜色在各种情况下都保持一致。</li>
        <li>每个页面通常只有不超过三个的主要按钮，给用户明确的操作指引。</li>
        <li>加载状态时，加载指示器替代按钮文字，不影响按钮的尺寸与位置。</li>
      </ul>
    </div>
    <div class="basicButtons item">
      <div class="title">基础按钮</div>
      <div class="text">主要按钮承载的是用户优先级最高的按钮，给用户明确的操作指引，帮助用户完成操作。</div>
      <div class="box">
        <r-button type="default">朴素按钮</r-button>
        <r-button type="primary">主要按钮</r-button>
        <r-button type="danger">危险按钮</r-button>
      </div>
    </div>
    <div class="basicButtons item">
      <div class="title">禁用状态</div>
      <div class="text">按钮不可用状态。</div>
      <div class="box">
        <r-button type="default" disabled>朴素按钮</r-button>
        <r-button type="primary" disabled>主要按钮</r-button>
        <r-button type="danger" disabled>危险按钮</r-button>
      </div>
    </div>

    <div class="basicButtons item">
      <div class="title">不同尺寸</div>
      <div class="text">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</div>
      <div class="box">
        <r-button size="large">大型按钮</r-button>
        <r-button size="middle">默认按钮</r-button>
        <r-button size="small">小型按钮</r-button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "r-button": Button
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: #222;
  letter-spacing: 0;
  margin: 10px 0;
}
.item {
  margin-bottom: 40px;
}
.info {
  background: rgba($color: #116bfb, $alpha: 0.08);
  border-radius: 4px;
  height: 45px;
  font-size: 14px;
  color: #0161fb;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 40px;
}
.useRule {
  > ul {
    padding-left: 0;
    font-size: 15px;
    color: #444;
    > li::before {
      content: "\02022";
      color: #0161fb;
      margin-right: 8px;
    }
  }
}
.basicButtons {
  .text {
    font-size: 15px;
    color: #444;
  }
}
.box {
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px 50px;
  margin: 12px 0;
  > * {
    margin: 10px;
  }
}
</style>

