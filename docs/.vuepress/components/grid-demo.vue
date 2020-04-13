<template>
  <DemoLayout>
    <ViewTip>通过基础的 24 栅格系统，迅速简便地创建布局。</ViewTip>
    <div class="item">
      <h3>基础布局</h3>
      <p>使用单一分栏创建基础的栅格布局。</p>
      <div class="container">
        <div class="box">
          <r-row>
            <r-col :span="24">
              <div class="grid-item light">24</div>
            </r-col>
          </r-row>
          <r-row>
            <r-col :span="12">
              <div class="grid-item dark">12</div>
            </r-col>
            <r-col :span="12">
              <div class="grid-item light">12</div>
            </r-col>
          </r-row>
          <r-row>
            <r-col :span="8">
              <div class="grid-item dark">8</div>
            </r-col>
            <r-col :span="8">
              <div class="grid-item light">8</div>
            </r-col>
            <r-col :span="8">
              <div class="grid-item dark">8</div>
            </r-col>
          </r-row>
          <r-row>
            <r-col :span="6">
              <div class="grid-item dark">6</div>
            </r-col>
            <r-col :span="6">
              <div class="grid-item light">6</div>
            </r-col>
            <r-col :span="6">
              <div class="grid-item dark">6</div>
            </r-col>
            <r-col :span="6">
              <div class="grid-item light">6</div>
            </r-col>
          </r-row>
        </div>
        <pre class="code"><code>{{code.basic}}</code></pre>
      </div>
    </div>
    <div class="item">
      <h3>列间隔</h3>
      <div class="container">
        <div class="box">
          <r-row :gutter="10">
            <r-col :span="24">
              <div class="grid-item light">24</div>
            </r-col>
          </r-row>
          <r-row :gutter="20">
            <r-col :span="12">
              <div class="grid-item light">12</div>
            </r-col>
            <r-col :span="12">
              <div class="grid-item light">12</div>
            </r-col>
          </r-row>
        </div>
        <pre class="code"><code>{{code.gutter}}</code></pre>
      </div>
    </div>
    <div class="item">
      <h3>列偏移</h3>
      <div class="container">
        <div class="box">
          <r-row :gutter="20">
            <r-col :span="6" :offset="6">
              <div class="grid-item light">6</div>
            </r-col>
            <r-col :span="6" :offset="6">
              <div class="grid-item light">6</div>
            </r-col>
          </r-row>
          <r-row :gutter="20">
            <r-col :span="6">
              <div class="grid-item light">6</div>
            </r-col>
            <r-col :span="6" :offset="6">
              <div class="grid-item light">6</div>
            </r-col>
          </r-row>
          <r-row :gutter="20">
            <r-col :span="12" :offset="6">
              <div class="grid-item light">12</div>
            </r-col>
          </r-row>
        </div>
        <pre class="code"><code>{{code.offset}}</code></pre>
      </div>
    </div>
    <ApiTable :apis="rowApis" />
    <ApiTable :apis="colApis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import DemoLayout from "./demo-common/demo-layout";
import ApiTable from "./demo-common/api-table";
import Row from "../../../src/row";
import Col from "../../../src/col";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    "r-row": Row,
    "r-col": Col
  },
  data() {
    return {
      rowApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["gutter", "栅格间隔", "number", "-", "0"]]
      },
      colApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["span", "栅格占据的列数", "number", "-", "24"],
          ["offset", "栅格左侧的间隔格数", "number", "-", "24"]
        ]
      },
      code: {
        basic: `
        <r-row>
          <r-col :span="24"><div class="grid-item light">24</div></r-col>
        </r-row>
        <r-row>
          <r-col :span="12"><div class="grid-item dark">12</div></r-col>
          <r-col :span="12"><div class="grid-item light">12</div></r-col>
        </r-row>
        <r-row>
          <r-col :span="8"><div class="grid-item dark">8</div></r-col>
          <r-col :span="8"><div class="grid-item light">8</div></r-col>
          <r-col :span="8"><div class="grid-item dark">8</div></r-col>
        </r-row>
        <r-row>
          <r-col :span="6"><div class="grid-item dark">6</div></r-col>
          <r-col :span="6"><div class="grid-item light">6</div></r-col>
          <r-col :span="6"><div class="grid-item dark">6</div></r-col>
          <r-col :span="6"><div class="grid-item light">6</div></r-col>
        </r-row>

        <style>
          .light {
            background: #e5efff;
            color: #136bff;
          }
          .dark {
            background: #136bff;
            color: white;
          }
          .grid-item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;
            border-radius: 4px;
          }
        </style>`
          .replace(/^ {8}/gm, "")
          .trim(),
        gutter: `
        <r-row :gutter="10">
          <r-col :span="24"><div class="grid-item light">24</div></r-col>
        </r-row>
        <r-row :gutter="20">
          <r-col :span="12"><div class="grid-item light">12</div></r-col>
          <r-col :span="12"><div class="grid-item light">12</div></r-col>
        </r-row>

        <style>
          .light {
            background: #e5efff;
            color: #136bff;
          }
          .grid-item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;
            border-radius: 4px;
          }
        </style>`
          .replace(/^ {8}/gm, "")
          .trim(),
        offset: `
        <r-row :gutter="20">
          <r-col :span="6" :offset="6"><div class="grid-item light">6</div></r-col>
          <r-col :span="6" :offset="6"><div class="grid-item light">6</div></r-col>
        </r-row>
        <r-row :gutter="20">
          <r-col :span="6"><div class="grid-item light">6</div></r-col>
          <r-col :span="6" :offset="6"><div class="grid-item light">6</div></r-col>
        </r-row>
        <r-row :gutter="20">
          <r-col :span="12" :offset="6"><div class="grid-item light">12</div></r-col>
        </r-row>

        <style>
          .light {
            background: #e5efff;
            color: #136bff;
          }
          .grid-item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;
            border-radius: 4px;
          }
        </style>        `
          .replace(/^ {8}/gm, "")
          .trim()
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.light {
  background: #e5efff;
  color: #136bff;
}
.dark {
  background: #136bff;
  color: white;
}
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-radius: 4px;
}
</style>

