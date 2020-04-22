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
          <r-popover title="标题" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容。" :width="300">
            <r-button slot="trigger">hover me</r-button>
          </r-popover>
          <r-popover title="标题" trigger="click" content="这是一段内容,这是一段内容,这是一段内容。" :width="300">
            <r-button slot="trigger">click me</r-button>
          </r-popover>
          <r-popover title="标题" trigger="focus" content="这是一段内容,这是一段内容,这是一段内容。" :width="300">
            <r-button slot="trigger">focus me</r-button>
          </r-popover>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>

    <div class="item">
      <h3>位置</h3>
      <p>可以通过 position 属性设置气泡卡片的方向</p>
      <div class="container">
        <div class="box position">
          <div style="margin-left: 100px; white-space: nowrap">
            <r-popover title="标题" content="这是一段内容。" position="top">
              <r-button slot="trigger">top</r-button>
            </r-popover>
          </div>
          <div style=" float: left;">
            <r-popover title="标题" content="这是一段内容。" position="left">
              <r-button slot="trigger">left</r-button>
            </r-popover>
          </div>
          <div style=" margin-left: 200px;">
            <r-popover title="标题" content="这是一段内容。" position="right">
              <r-button slot="trigger">right</r-button>
            </r-popover>
          </div>
          <div style="margin-left: 100px; clear: both; white-space: nowrap;">
            <r-popover title="标题" content="这是一段内容。" position="bottom">
              <r-button slot="trigger">bottom</r-button>
            </r-popover>
          </div>
        </div>
        <Code :code="code.pos" />
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
          ["trigger", "触发方式", "string", "click | focus | hover", "click"],
          ["title", "标题", "string", "-", "-"],
          ["content", "内容", "string", "-", "-"],
          ["width", "宽度", "string | number", "-", "最小宽度 150px"],
          [
            "position",
            "卡片位置",
            "string",
            "top | bottom | left | right",
            "top"
          ]
        ]
      },

      code: {
        basic: `
        <r-popover title="标题" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容。" :width="300">
          <r-button slot="trigger">hover me</r-button>
        </r-popover>

        <r-popover title="标题" trigger="click" content="这是一段内容,这是一段内容,这是一段内容。" :width="300">
          <r-button slot="trigger">click me</r-button>
        </r-popover>

        <r-popover title="标题" trigger="focus" content="这是一段内容,这是一段内容,这是一段内容。" :width="300">
          <r-button slot="trigger">focus me</r-button>
        </r-popover>`,
        pos: `
        <div style="margin-left: 100px; white-space: nowrap">
          <r-popover title="标题" content="这是一段内容。" position="top">
            <r-button slot="trigger">top</r-button>
          </r-popover>
        </div>

        <div style=" float: left;">
          <r-popover title="标题" content="这是一段内容。" position="left">
            <r-button slot="trigger">left</r-button>
          </r-popover>
        </div>

        <div style=" margin-left: 200px;">
          <r-popover title="标题" content="这是一段内容。" position="right">
            <r-button slot="trigger">right</r-button>
          </r-popover>
        </div>

        <div style="margin-left: 100px; clear: both; white-space: nowrap;">
          <r-popover title="标题" content="这是一段内容。" position="bottom">
            <r-button slot="trigger">bottom</r-button>
          </r-popover>
        </div>`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.box.position {
  .r-button {
    width: 90px;
  }
}
</style>