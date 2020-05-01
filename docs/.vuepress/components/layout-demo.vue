<template>
  <DemoLayout>
    <ViewTip>用于快速搭建页面的基本结构。</ViewTip>
    <div class="item">
      <h3>常见布局</h3>
      <div class="container">
        <div class="box">
          <r-layout>
            <r-header>Header</r-header>
            <r-content>Content</r-content>
            <r-footer>Footer</r-footer>
          </r-layout>
          <r-layout>
            <r-header>Header</r-header>
            <r-layout>
              <r-sider width="200px">Sider</r-sider>
              <r-content>Content</r-content>
            </r-layout>
            <r-footer>Footer</r-footer>
          </r-layout>
          <r-layout>
            <r-sider>Sider</r-sider>
            <r-layout>
              <r-header>Header</r-header>
              <r-content>Content</r-content>
              <r-footer>Footer</r-footer>
            </r-layout>
          </r-layout>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <ApiTable name="Header API" :apis="headerApis" />
    <ApiTable name="Sider API" :apis="siderApis" />
    <ApiTable name="Footer API" :apis="footerApis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import DemoLayout from "./demo-common/demo-layout";
import ApiTable from "./demo-common/api-table";
import Code from "./demo-common/code";
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Sider from "../../../src/sider";
import Content from "../../../src/content";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-layout": Layout,
    "r-header": Header,
    "r-footer": Footer,
    "r-content": Content,
    "r-sider": Sider
  },
  data() {
    return {
      headerApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["height", "header 的高度", "string", "-", "60px"]]
      },
      siderApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["width", "sider 的宽度", "string", "-", "300px"]]
      },
      footerApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["height", "footer 的高度", "string", "-", "60px"]]
      },
      code: {
        basic: `
        <r-layout>
          <r-header>Header</r-header>
          <r-content>Content</r-content>
          <r-footer>Footer</r-footer>
        </r-layout>

        <r-layout>
          <r-header>Header</r-header>
          <r-layout>
            <r-sider width="200px">Sider</r-sider>
            <r-content>Content</r-content>
          </r-layout>
          <r-footer>Footer</r-footer>
        </r-layout>

        <r-layout>
          <r-sider>Sider</r-sider>
          <r-layout>
            <r-header>Header</r-header>
            <r-content>Content</r-content>
            <r-footer>Footer</r-footer>
          </r-layout>
        </r-layout>
        
        <style>
        .header, .footer {
          background-color: #b3c0d1;
          color: #333;
          text-align: center;
          line-height: 60px;
        }
        .sider {
          background-color: #d3dce6;
          color: #333;
          text-align: center;
          line-height: 150px;
        }
        .content {
          background-color: #e9eef3;
          color: #333;
          text-align: center;
          line-height: 150px;
        }
        </style>
        `
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.box > .r-layout {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}
.r-header,
.r-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.r-sider {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 150px;
}
.r-content {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 150px;
}
</style>

