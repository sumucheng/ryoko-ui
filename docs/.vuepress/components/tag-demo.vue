<template>
  <DemoLayout>
    <ViewTip>标签是用来标记、选择的组件。</ViewTip>
    <div class="useRule item">
      <h3>使用原则</h3>
      <ul>
        <li>标记类的标签需配合主内容使用。</li>
        <li>可选标签由2个以上的标签组成，可用于筛选或分类选择。更具需求可以做单选，也可以用做复选。</li>
      </ul>
    </div>
    <div class="item">
      <h3>标记类标签</h3>
      <p>标记类标签可标记信息状态，也可对信息进行分类。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-tag>标签一</r-tag>
            <r-tag type="success">标签二</r-tag>
            <r-tag type="warning">标签三</r-tag>
            <r-tag type="danger">标签四</r-tag>
          </r-row>
          <r-row>
            <r-tag effect="cube">标签一</r-tag>
            <r-tag effect="cube" type="success">标签二</r-tag>
            <r-tag effect="cube" type="warning">标签三</r-tag>
            <r-tag effect="cube" type="danger">标签四</r-tag>
          </r-row>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>

    <div class="item">
      <h3>动态编辑标签</h3>
      <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-tag :key="tag" v-for="tag in tags" closable @close="handleClose(tag)">{{tag}}</r-tag>
          </r-row>
        </div>
        <Code :code="code.closable" />
      </div>
    </div>

    <ApiTable name="API" :apis="apis" />
    <ApiTable name="Event" :apis="event" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import ApiTable from "./demo-common/api-table";
import DemoLayout from "./demo-common/demo-layout";
import Code from "./demo-common/code";
import Tag from "../../../src/tag";
import Row from "../../../src/row";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-tag": Tag,
    "r-row": Row
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    }
  },
  data() {
    return {
      tags: ["标签一", "标签二", "标签三"],
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["type", "类型", "string", "success | warning | danger", "-"],
          ["closable", "是否可关闭", "boolean", "-", "false"],
          ["effect", "主题", "string", "light | cube", "light"]
        ]
      },
      event: {
        header: ["事件名称", "说明", "	回调参数"],
        body: [["close", "关闭 Tag 时触发的事件", "-"]]
      },
      code: {
        basic: `
        <r-row>
          <r-tag>标签一</r-tag>
          <r-tag type="success">标签二</r-tag>
          <r-tag type="warning">标签三</r-tag>
          <r-tag type="danger">标签四</r-tag>
        </r-row>
        <r-row>
          <r-tag effect="cube">标签一</r-tag>
          <r-tag effect="cube" type="success">标签二</r-tag>
          <r-tag effect="cube" type="warning">标签三</r-tag>
          <r-tag effect="cube" type="danger">标签四</r-tag>
        </r-row>`,
        closable: `
        <r-tag :key="tag" v-for="tag in tags" closable @close="handleClose(tag)">{{tag}}</r-tag>
        
        <script>
        export default {
          data() {
            return {
              tags: ['标签一', '标签二', '标签三']
            };
          },
          methods: {
            handleClose(tag) {
              this.tags.splice(this.tags.indexOf(tag), 1);
            }   
          }
        }
        \<\/script>`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.r-tag {
  margin-right: 10px;
}
</style>