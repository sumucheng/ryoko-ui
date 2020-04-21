<template>
  <DemoLayout>
    <ViewTip>点击/鼠标移入元素，弹出气泡式的卡片浮层。</ViewTip>
    <div class="useRule item">
      <h3>使用原则</h3>
      <ul>
        <li>气泡浮层为非阻碍式信息提示，它不打断用户当前操作。</li>
        <li>按钮文字与按钮图标的颜色在各种情况下都保持一致。</li>
      </ul>
    </div>
    <div class="item">
      <h3>基本用法</h3>
      <p>Tabs 组件默认选中第一个标签页，你也可以通过 selected 属性来指定当前选中的标签页。</p>
      <div class="container">
        <div class="box">
          <r-popover title="标题" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" :width="300">
            <r-button slot="trigger">hover me</r-button>
          </r-popover>
          <r-popover title="标题" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" :width="300">
            <r-button slot="trigger">click me</r-button>
          </r-popover>
          <r-popover title="标题" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" :width="300">
            <r-button slot="trigger">focus me</r-button>
          </r-popover>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>

    <ApiTable name="Popover API" :apis="popoverApis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import ApiTable from "./demo-common/api-table";
import DemoLayout from "./demo-common/demo-layout";
import Code from "./demo-common/code";
import Popover from "../../../src/popover";
import Button from "../../../src/button";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-popover": Popover,
    "r-button": Button
  },
  methods: {},
  data() {
    return {
      popoverApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["selected", "选中面板的 name", "string", "-", "第一个面板的 name"],
          ["type", "样式类型", "string", "line | card", "line"]
        ]
      },

      code: {
        basic: ``
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