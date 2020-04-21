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
          <r-tabs :selected.sync="selected">
            <r-tabs-head>
              <r-tabs-tab name="1">Tab-1</r-tabs-tab>
              <r-tabs-tab name="2">Tab-2</r-tabs-tab>
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
      <h3>卡片样式</h3>
      <p>将 type 设置为 card 。</p>
      <div class="container">
        <div class="box">
          <r-tabs :selected.sync="selected" type="card">
            <r-tabs-head>
              <r-tabs-tab name="1">Tab-1</r-tabs-tab>
              <r-tabs-tab name="2">Tab-2</r-tabs-tab>
              <r-tabs-tab name="3">Tab-3</r-tabs-tab>
            </r-tabs-head>
            <r-tabs-body>
              <r-tabs-pane name="1">Tab-1 页面</r-tabs-pane>
              <r-tabs-pane name="2">Tab-2 页面</r-tabs-pane>
              <r-tabs-pane name="3">Tab-3 页面</r-tabs-pane>
            </r-tabs-body>
          </r-tabs>
        </div>
        <Code :code="code.card" />
      </div>
    </div>
    <div class="item">
      <h3>禁用选项卡</h3>
      <p>将需要禁用的选项卡的 disable 设置为 true 。</p>
      <div class="container">
        <div class="box">
          <r-tabs :selected.sync="selected">
            <r-tabs-head>
              <r-tabs-tab name="1">Tab-1</r-tabs-tab>
              <r-tabs-tab name="2">Tab-2</r-tabs-tab>
              <r-tabs-tab name="3" disabled>Tab-3</r-tabs-tab>
            </r-tabs-head>
            <r-tabs-body>
              <r-tabs-pane name="1">Tab-1 页面</r-tabs-pane>
              <r-tabs-pane name="2">Tab-2 页面</r-tabs-pane>
              <r-tabs-pane name="3">Tab-3 页面</r-tabs-pane>
            </r-tabs-body>
          </r-tabs>
        </div>
        <Code :code="code.disabled" />
      </div>
    </div>
    <!-- <div class="item">
      <h3>位置</h3>
      <p>可以通过 tabs 的 position 属性设置标签的位置。</p>
      <div class="container">
        <div class="box">
          <div class="radio">
            <div>
              <input type="radio" name="position" value="top" id="top" v-model="tabPosition" />
              <label for="top">top</label>
            </div>
            <div>
              <input type="radio" name="position" value="bottom" id="bottom" v-model="tabPosition" />
              <label for="bottom">bottom</label>
            </div>
            <div>
              <input type="radio" name="position" value="left" id="left" v-model="tabPosition" />
              <label for="left">left</label>
            </div>
            <div>
              <input type="radio" name="position" value="right" id="right" v-model="tabPosition" />
              <label for="right">right</label>
            </div>
          </div>
          <r-tabs :selected.sync="selected" :position="tabPosition" style="height: 200px;">
            <r-tabs-head>
              <r-tabs-tab name="1">Tab-1</r-tabs-tab>
              <r-tabs-tab name="2">Tab-2</r-tabs-tab>
              <r-tabs-tab name="3">Tab-3</r-tabs-tab>
            </r-tabs-head>
            <r-tabs-body>
              <r-tabs-pane name="1">Tab-1 页面</r-tabs-pane>
              <r-tabs-pane name="2">Tab-2 页面</r-tabs-pane>
              <r-tabs-pane name="3">Tab-3 页面</r-tabs-pane>
            </r-tabs-body>
          </r-tabs>
        </div>
        <Code :code="code.disabled" />
      </div>
    </div>-->
    <ApiTable name="Tabs API" :apis="tabsApis" />
    <ApiTable name="Tabs-tab API" :apis="tabsTabApis" />
    <ApiTable name="Tabs-pane API" :apis="tabsPaneApis" />
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
      selected: "1",
      tabPosition: "top",
      tabsApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["selected", "选中面板的 name", "string", "-", "第一个面板的 name"],
          ["type", "样式类型", "string", "line | card", "line"]
        ]
      },
      tabsTabApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["name", "选项卡的名字，和面板的 name 属性对应", "string", "-", "-"],
          ["disabled", "是否禁用", "boolean", "-", "false"]
        ]
      },
      tabsPaneApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["name", "面板的名字，和选项卡的 name 属性对应", "string", "-", "-"]
        ]
      },
      code: {
        basic: `
         <r-tabs :selected.sync="selected">
          <r-tabs-head>
            <r-tabs-tab name="1">Tab-1</r-tabs-tab>
            <r-tabs-tab name="2">Tab-2</r-tabs-tab>
            <r-tabs-tab name="3">Tab-3</r-tabs-tab>
          </r-tabs-head>
          <r-tabs-body>
            <r-tabs-pane name="1">Tab-1</r-tabs-pane>
            <r-tabs-pane name="2">Tab-2</r-tabs-pane>
            <r-tabs-pane name="3">Tab-3</r-tabs-pane>
          </r-tabs-body>
        </r-tabs>`,
        card: `
         <r-tabs :selected.sync="selected" type="card">
          <r-tabs-head>
            <r-tabs-tab name="1">Tab-1</r-tabs-tab>
            <r-tabs-tab name="2">Tab-2</r-tabs-tab>
            <r-tabs-tab name="3">Tab-3</r-tabs-tab>
          </r-tabs-head>
          <r-tabs-body>
            <r-tabs-pane name="1">Tab-1 页面</r-tabs-pane>
            <r-tabs-pane name="2">Tab-2 页面</r-tabs-pane>
            <r-tabs-pane name="3">Tab-3 页面</r-tabs-pane>
          </r-tabs-body>
        </r-tabs>`,
        disabled: `
        <r-tabs :selected.sync="selected">
          <r-tabs-head>
            <r-tabs-tab name="1">Tab-1</r-tabs-tab>
            <r-tabs-tab name="2">Tab-2</r-tabs-tab>
            <r-tabs-tab name="3" disabled>Tab-3</r-tabs-tab>
          </r-tabs-head>
          <r-tabs-body>
            <r-tabs-pane name="1">Tab-1 页面</r-tabs-pane>
            <r-tabs-pane name="2">Tab-2 页面</r-tabs-pane>
            <r-tabs-pane name="3">Tab-3 页面</r-tabs-pane>
          </r-tabs-body>
        </r-tabs>`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.radio {
  display: flex;
  margin-bottom: 20px;
}
</style>