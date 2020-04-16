<template>
  <DemoLayout>
    <ViewTip>Tab 展示了与当前主页面视图相关的子视图，使得用户能够轻松地在当前页面中切换不同的子视图来查看内容。</ViewTip>
    <div class="useRule item">
      <h3>使用原则</h3>
      <ul>
        <li>同一组 Tab 的样式与形式需要保持一致。</li>
        <li>按钮文字与按钮图标的颜色在各种情况下都保持一致。</li>
        <li>Tab 上的文字需统一，并且不可省略。</li>
        <li>有一个 Tab 始终被默认选中。</li>
      </ul>
    </div>
    <div class="item">
      <h3>基本用法</h3>
      <p>Tabs 组件默认选中第一个标签页，你也可以通过 selected 属性来指定当前选中的标签页。</p>
      <div class="container">
        <div class="box">
          <r-tabs :selected.sync="selectedTab">
            <r-tabs-head>
              <r-tabs-tab name="1">Tab-1</r-tabs-tab>
              <r-tabs-tab name="2" disabled>Tab-2</r-tabs-tab>
              <r-tabs-tab name="3">Tab-3</r-tabs-tab>
            </r-tabs-head>
            <r-tabs-body>
              <r-tabs-pane name="1">Tab-1</r-tabs-pane>
              <r-tabs-pane name="2">Tab-2</r-tabs-pane>
              <r-tabs-pane name="3">Tab-3</r-tabs-pane>
            </r-tabs-body>
          </r-tabs>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>基本用法</h3>
      <p>Tabs 组件默认选中第一个标签页，你也可以通过 selected 属性来指定当前选中的标签页。</p>
      <div class="container">
        <div class="box">
          <r-tabs :selected.sync="selectedTab">
            <r-tabs-head>
              <r-tabs-tab name="1">Tab-1</r-tabs-tab>
              <r-tabs-tab name="2" disabled>Tab-2</r-tabs-tab>
              <r-tabs-tab name="3">Tab-3</r-tabs-tab>
            </r-tabs-head>
            <r-tabs-body>
              <r-tabs-pane name="1">Tab-1 页面</r-tabs-pane>
              <r-tabs-pane name="2">Tab-2 页面</r-tabs-pane>
              <r-tabs-pane name="3">Tab-3 页面</r-tabs-pane>
            </r-tabs-body>
          </r-tabs>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <ApiTable name="API" :apis="apis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import ApiTable from "./demo-common/api-table";
import DemoLayout from "./demo-common/demo-layout";
import Code from "./demo-common/code";
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsBody from "../../../src/tabs-body";
import TabsTab from "../../../src/tabs-tab";
import TabsPane from "../../../src/tabs-pane";
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-tabs": Tabs,
    "r-tabs-head": TabsHead,
    "r-tabs-body": TabsBody,
    "r-tabs-tab": TabsTab,
    "r-tabs-pane": TabsPane
  },
  methods: {},
  data() {
    return {
      selectedTab: "user",
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["text", "消息文字", "string", "-", "-"]]
      },
      code: {
        basic: `
      `
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>