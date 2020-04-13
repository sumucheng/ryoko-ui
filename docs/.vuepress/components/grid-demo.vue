<template>
  <DemoLayout>
    <ViewTip>24 栅格系统。</ViewTip>
    <div class="item">
      <h3>基础布局</h3>
      <p>使用单一分栏创建基础的栅格布局。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-col span="24" class="grid-item light">24</r-col>
          </r-row>
          <r-row>
            <r-col span="12" class="grid-item dark">12</r-col>
            <r-col span="12" class="grid-item light">12</r-col>
          </r-row>
          <r-row>
            <r-col span="8" class="grid-item dark">8</r-col>
            <r-col span="8" class="grid-item light">8</r-col>
            <r-col span="8" class="grid-item dark">8</r-col>
          </r-row>
          <r-row>
            <r-col span="6" class="grid-item dark">6</r-col>
            <r-col span="6" class="grid-item light">6</r-col>
            <r-col span="6" class="grid-item dark">6</r-col>
            <r-col span="6" class="grid-item light">6</r-col>
          </r-row>
        </div>
        <pre class="code"><code>{{code.basic}}</code></pre>
      </div>
    </div>
    <div class="attr">
      <h3>Attributes</h3>
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
  </DemoLayout>
</template>

<script>
import ViewTip from "./view-tip";
import DemoLayout from "./demo-layout";
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    "r-row": Row,
    "r-col": Col
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
        basic: ``.replace(/\t\t+|  +/g, "").trim()
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.light {
  background: #e5efff;
}
.dark {
  background: #136bff;
  color: white;
}
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

