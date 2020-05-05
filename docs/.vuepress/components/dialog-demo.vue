<template>
  <DemoLayout>
    <ViewTip>在保留当前页面状态的情况下，告知用户并承载相关操作。</ViewTip>
    <div class="useRule item">
      <h3>使用原则</h3>
      <ul>
        <li>对话框是用于在不离开主路径的情况下，提供用户快速执行简单的操作、确认用户信息或反馈提示的辅助窗口。</li>
      </ul>
    </div>
    <div class="item">
      <h3>基础弹窗</h3>
      <p>基础的模态弹窗由标题、内容区和操作区构成</p>
      <div class="container">
        <div class="box">
          <r-button @click="dialogVisible = true">点击打开 Dialog</r-button>

          <r-dialog title="确认删除" :visible.sync="dialogVisible">
            <span>您确定要删除该标签吗？删除后现有的推荐列表页将清空。</span>
            <span slot="footer" class="dialog-footer">
              <r-button @click="dialogVisible = false" style="marginRight:10px">取 消</r-button>
              <r-button type="danger" plain @click="dialogVisible = false">确 定</r-button>
            </span>
          </r-dialog>
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
import Dialog from "../../../src/dialog";
import Button from "../../../src/button";
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-dialog": Dialog,
    "r-button": Button
  },
  methods: {},
  data() {
    return {
      dialogVisible: false,
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["selected", "当前激活的面板", "string | array", "-", "-"],
          ["accordion", "是否手风琴模式", "boolean", "-", "false"]
        ]
      },
      code: {
        basic: ``
      }
    };
  }
};
</script>
