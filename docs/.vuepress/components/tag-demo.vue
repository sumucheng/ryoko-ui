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
          <r-tag>标签一</r-tag>
          <r-tag type="success">标签二</r-tag>
          <r-tag type="warning">标签三</r-tag>
          <r-tag type="danger">标签四</r-tag>
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
import Tag from "../../../src/tag";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-tag": Tag
  },
  methods: {},
  data() {
    return {
      radio: "1",
      radio2: "1",
      radio3: "1",
      radio4: "1",
      radio5: "1",
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["radio", "当前选定的 Radio", "string", "-", "-"],
          ["label", "Radio 的 value", "string", "-", "-"],
          ["disabled", "是否禁用", "boolean", "-", "false"]
        ]
      },
      buttonApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["label", "Radio 的 value", "string", "-", "-"],
          ["disabled", "是否禁用", "boolean", "-", "false"],
          ["plain", "是否朴素样式", "boolean", "-", "false"]
        ]
      },
      groupApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["radio", "当前选定的 Radio", "string", "-", "-"]]
      },
      code: {
        basic: `
        <template>
          <r-radio :radio.sync="radio" label="1">单选项</r-radio>
          <r-radio :radio.sync="radio" label="2">单选项</r-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: '1'
              };
            }
          }
        \<\/script>`,
        disabled: `
        <template>
          <r-radio :radio.sync="radio2" label="1">可选项</r-radio>
          <r-radio :radio.sync="radio2" label="2" disabled>不可选项</r-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: '1'
              };
            }
          }
        \<\/script>`,
        group: `
        <template>
          <r-radio-group :radio.sync="radio3">
            <r-radio label="1">单选项</r-radio>
            <r-radio label="2">单选项</r-radio>
          </r-radio-group>    
        </template>

        <script>
          export default {
            data () {
              return {
                radio: '1'
              };
            }
          }
        \<\/script>`,
        button: `
        <template>
          <r-radio-group :radio.sync="radio1">
            <r-radio-button label="1">汇总</r-radio-button>
            <r-radio-button label="2">本日</r-radio-button>
            <r-radio-button label="3" disabled>本周</r-radio-button>
            <r-radio-button label="4" >本月</r-radio-button>
          </r-radio-group>    

          <r-radio-group :radio.sync="radio2" style="margin-top: 20px">
            <r-radio-button label="1" plain>汇总</r-radio-button>
            <r-radio-button label="2" plain>本日</r-radio-button>
            <r-radio-button label="3" plain disabled>本周</r-radio-button>
            <r-radio-button label="4" plain >本月</r-radio-button>
          </r-radio-group>  
        </template>

        <script>
          export default {
            data () {
              return {
                radio1: '1',
                radio2: '1',
              };
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