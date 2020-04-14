<template>
  <DemoLayout>
    <ViewTip>吐司提示承载了对用户操作的即时反馈，可以让用户更准确地感知当前操作的步骤或结果。</ViewTip>
    <div class="item">
      <h3>普通提示</h3>
      <p>从顶部出现，2 秒后自动消失</p>
      <div class="container">
        <div class="box">
          <r-button @click="open">打开吐司提示</r-button>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <ApiTable name="Header API" :apis="headerApis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import ApiTable from "./demo-common/api-table";
import DemoLayout from "./demo-common/demo-layout";
import Code from "./demo-common/code";
import Button from "../../../src/button";
import Toast from "../../../src/toast";
import plugin from "../../../src/plugin";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-button": Button,
    "r-toast": Toast
  },
  methods: {
    open() {
      this.$toast({ text: "这是一条消息提示", type: "default" });
    }
  },
  data() {
    return {
      headerApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["height", "header 的高度", "string", "-", "60px"]]
      },
      code: {
        basic: `

        <style>

        </style>
        `
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

