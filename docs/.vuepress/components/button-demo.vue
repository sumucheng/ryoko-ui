<template>
  <div class="demo-container">
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
    <div class="item">
      <div class="title">基础按钮</div>
      <div class="text">主要按钮承载的是用户优先级最高的按钮，给用户明确的操作指引，帮助用户完成操作。</div>
      <div class="container">
        <div class="box">
          <div class="row">
            <r-button>默认按钮</r-button>
            <r-button type="primary">主要按钮</r-button>
            <r-button type="success">成功按钮</r-button>
            <r-button type="danger">危险按钮</r-button>
          </div>
          <div class="row">
            <r-button plain>朴素按钮</r-button>
            <r-button type="primary" plain>主要按钮</r-button>
            <r-button type="success" plain>成功按钮</r-button>
            <r-button type="danger" plain>危险按钮</r-button>
          </div>
        </div>
        <pre class="code"><code>{{code.basic}}</code></pre>
      </div>
    </div>
    <div class="item">
      <div class="title">禁用状态</div>
      <div class="text">按钮不可用状态。</div>
      <div class="container">
        <div class="box">
          <div class="row">
            <r-button type="default" disabled>默认按钮</r-button>
            <r-button type="primary" disabled>主要按钮</r-button>
            <r-button type="success" disabled>成功按钮</r-button>
            <r-button type="danger" disabled>危险按钮</r-button>
          </div>
          <div class="row">
            <r-button type="default" disabled plain>朴素按钮</r-button>
            <r-button type="primary" disabled plain>主要按钮</r-button>
            <r-button type="success" disabled plain>成功按钮</r-button>
            <r-button type="danger" disabled plain>危险按钮</r-button>
          </div>
        </div>
        <pre class="code"><code>{{code.noUse}}</code></pre>
      </div>
    </div>
    <div class="item">
      <div class="title">不同尺寸</div>
      <div class="text">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</div>
      <div class="container">
        <div class="box">
          <div class="row">
            <r-button size="large">大型按钮</r-button>
            <r-button size="middle">默认按钮</r-button>
            <r-button size="small">小型按钮</r-button>
          </div>
        </div>
        <pre class="code"><code>{{code.size}}</code></pre>
      </div>
    </div>
    <div class="attr">
      <div class="title">Attributes</div>
      <table>
        <thead>
          <tr>
            <th v-for="attr in attrs.header" :key="attr">{{attr}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in attrs.body" :key="item[0]">
            <td v-for="attr in item" :key="attr">{{attr}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "r-button": Button
  },
  data() {
    return {
      attrs: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["size", "尺寸", "string", "large | middle | small", "middle"],
          [
            "type",
            "类型",
            "string",
            "default | primary | danger | success",
            "default"
          ],
          ["plain", "是否朴素按钮", "boolean", "-", "false"],
          ["disabled", "是否禁用状态", "boolean", "-", "false"]
        ]
      },
      code: {
        basic: `
          <r-button>朴素按钮</r-button>
          <r-button type="primary">主要按钮</r-button>
          <r-button type="success">成功按钮</r-button>
          <r-button type="danger">危险按钮</r-button>`
          .replace(/\t\t+|  +/g, "")
          .trim(),
        noUse: `
          <r-button type="default" disabled>朴素按钮</r-button>
          <r-button type="primary" disabled>主要按钮</r-button>
          <r-button type="danger" disabled>危险按钮</r-button>`
          .replace(/\t\t+|  +/g, "")
          .trim(),
        size: `
          <r-button size="large">大型按钮</r-button>
          <r-button size="middle">默认按钮</r-button>
          <r-button size="small">小型按钮</r-button>`
          .replace(/\t\t+|  +/g, "")
          .trim()
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: #222;
  letter-spacing: 0;
  margin: 14px 0;
}
.item {
  margin-bottom: 40px;
  .text {
    font-size: 15px;
    color: #444;
  }
}
.code {
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  margin: 0;
  > code {
    color: #3182bd;
  }
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

.container {
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 14px 0;
  .box {
    padding: 24px;
    background: #fff;
    margin-top: 12px;
    > .row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      > * {
        margin-right: 25px;
      }
    }
  }
}
</style>

