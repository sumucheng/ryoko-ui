<template>
  <DemoLayout>
    <ViewTip>按钮用于触发操作。</ViewTip>
    <div class="useRule item">
      <h3>使用原则</h3>
      <ul>
        <li>按钮文字与按钮图标的颜色在各种情况下都保持一致。</li>
        <li>每个页面通常只有不超过三个的主要按钮，给用户明确的操作指引。</li>
        <li>加载状态时，加载指示器替代按钮文字，不影响按钮的尺寸与位置。</li>
      </ul>
    </div>
    <div class="item">
      <h3>基础按钮</h3>
      <p>主要按钮承载的是用户优先级最高的按钮，给用户明确的操作指引，帮助用户完成操作。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-button>默认按钮</r-button>
            <r-button type="primary">主要按钮</r-button>
            <r-button type="success">成功按钮</r-button>
            <r-button type="danger">危险按钮</r-button>
          </r-row>
          <r-row>
            <r-button plain>朴素按钮</r-button>
            <r-button type="primary" plain>主要按钮</r-button>
            <r-button type="success" plain>成功按钮</r-button>
            <r-button type="danger" plain>危险按钮</r-button>
          </r-row>
        </div>
        <pre class="code"><code>{{code.basic}}</code></pre>
      </div>
    </div>
    <div class="item">
      <h3>禁用状态</h3>
      <p>按钮不可用状态。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-button type="default" disabled>默认按钮</r-button>
            <r-button type="primary" disabled>主要按钮</r-button>
            <r-button type="success" disabled>成功按钮</r-button>
            <r-button type="danger" disabled>危险按钮</r-button>
          </r-row>
          <r-row>
            <r-button type="default" disabled plain>朴素按钮</r-button>
            <r-button type="primary" disabled plain>主要按钮</r-button>
            <r-button type="success" disabled plain>成功按钮</r-button>
            <r-button type="danger" disabled plain>危险按钮</r-button>
          </r-row>
        </div>
        <pre class="code"><code>{{code.noUse}}</code></pre>
      </div>
    </div>
    <div class="item">
      <h3>不同尺寸</h3>
      <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-button size="large">大型按钮</r-button>
            <r-button size="middle">默认按钮</r-button>
            <r-button size="small">小型按钮</r-button>
          </r-row>
        </div>
        <pre class="code"><code>{{code.size}}</code></pre>
      </div>
    </div>
    <div class="apis">
      <h3>API</h3>
      <table>
        <thead>
          <tr>
            <th v-for="api in apis.header" :key="api">{{api}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in apis.body" :key="item[0]">
            <td v-for="attr in item" :key="attr">{{attr}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DemoLayout>
</template>

<script>
import Button from "../../../src/button";
import ViewTip from "./view-tip";
import DemoLayout from "./demo-layout";
import Row from "../../../src/row";
export default {
  components: {
    "r-button": Button,
    "r-row": Row,
    ViewTip: ViewTip,
    DemoLayout: DemoLayout
  },
  data() {
    return {
      apis: {
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
.row {
  align-items: center;
}
.r-button {
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
}
</style>

