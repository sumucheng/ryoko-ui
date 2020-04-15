<template>
  <DemoLayout>
    <ViewTip>吐司提示承载了对用户操作的即时反馈，可以让用户更准确地感知当前操作的步骤或结果。</ViewTip>
    <div class="item">
      <h3>普通提示</h3>
      <p>从顶部出现，2 秒后自动消失</p>
      <div class="container">
        <div class="box">
          <r-button @click="open1">打开吐司提示</r-button>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>不同类型</h3>
      <p>用来显示「消息、错误、成功、警告」类的操作反馈。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-button @click="open1">默认</r-button>
            <r-button @click="open2">错误</r-button>
            <r-button @click="open3">成功</r-button>
            <r-button @click="open4">警告</r-button>
          </r-row>
        </div>
        <Code :code="code.type" />
      </div>
    </div>
    <div class="item">
      <h3>手动关闭</h3>
      <p>可以添加关闭按钮。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-button @click="open5">默认</r-button>
          </r-row>
        </div>
        <Code :code="code.close" />
      </div>
    </div>
    <div class="item">
      <h3>显示时长</h3>
      <p>可以通过 duration 属性自定义显示时长，duration 为 0 时不会自动关闭。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-button @click="open6">不会自动关闭</r-button>
            <r-button @click="open7">10 秒后自动关闭</r-button>
          </r-row>
        </div>
        <Code :code="code.time" />
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
import Button from "../../../src/button";
import plugin from "../../../src/plugin";
import Row from "../../../src/row";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-button": Button,
    "r-row": Row
  },
  methods: {
    open1() {
      this.$toast({
        text: "这是一条普通的消息提示。",
        type: "default"
      });
    },
    open2() {
      this.$toast({
        text: "系统错误，请稍后重试。",
        type: "error"
      });
    },
    open3() {
      this.$toast({
        text: "恭喜！你所提交的信息已经审核通过，如有问题请联系客服。",
        type: "success"
      });
    },
    open4() {
      this.$toast({
        text: "警告！系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！",
        type: "warning"
      });
    },
    open5() {
      this.$toast({
        text: "可以手动关闭。",
        showClose: true
      });
    },
    open6() {
      this.$toast({
        text: "不会自动关闭。",
        showClose: true,
        duration: 0
      });
    },
    open7() {
      this.$toast({
        text: "10 秒后自动关闭。",
        duration: 10
      });
    }
  },
  data() {
    return {
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["text", "消息文字", "string", "-", "-"],
          [
            "type",
            "类型",
            "string",
            "default | success | warning | error",
            "default"
          ],
          [
            "duration",
            "显示时间（秒），设为 0 则不会自动关闭",
            "number",
            "-",
            "2"
          ],
          ["showClose", "是否显示关闭按钮", "boolean", "-", "false"],
          ["onClose", "关闭时触发的回调函数", "function", "-", "-"]
        ]
      },
      code: {
        basic: `
        <r-button @click="open">打开吐司提示</r-button>
        
        open(){
          this.$toast({ text: "这是一条普通的消息提示。" });
        }`,
        type: `
        <r-row>
          <r-button @click="open1">默认</r-button>
          <r-button @click="open2">错误</r-button>
          <r-button @click="open3">成功</r-button>
          <r-button @click="open4">警告</r-button>
        </r-row>

        open1() {
          this.$toast({
            text: "这是一条普通的消息提示。",
            type: "default"
          });
        },
        open2() {
          this.$toast({
            text: "系统错误，请稍后重试。",
            type: "error"
          });
        },
        open3() {
          this.$toast({
            text: "恭喜！你所提交的信息已经审核通过，如有问题请联系客服。",
            type: "success"
          });
        },
        open4() {
          this.$toast({
            text: "警告！系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！",
            type: "warning"
          });
        }`,
        close: `
        <r-button @click="open">默认</r-button>
        
        open() {
          this.$toast({
            text: "可以手动关闭。",
            showClose: true
          });
        }
        `,
        time: `
        <r-row>
          <r-button @click="open1">不会自动关闭</r-button>
          <r-button @click="open2">10 秒后自动关闭</r-button>
        </r-row>

        open1() {
          this.$toast({
            text: "不会自动关闭。",
            showClose: true,
            duration: 0
          });
        },
        open2() {
          this.$toast({
            text: "10 秒后自动关闭。",
            duration: 10
          });
        }`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.r-button {
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
}
</style>