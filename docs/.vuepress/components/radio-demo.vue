<template>
  <DemoLayout>
    <ViewTip>在一组备选项中进行单选。</ViewTip>
    <div class="item">
      <h3>普通面板</h3>
      <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
      <div class="container">
        <div class="box">
          <r-radio :radio.sync="radio" label="1">单选项</r-radio>
          <r-radio :radio.sync="radio" label="2">单选项</r-radio>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>禁用状态</h3>
      <p>单选框不可用的状态。</p>
      <div class="container">
        <div class="box">
          <r-radio :radio.sync="radio2" label="1">可选项</r-radio>
          <r-radio :radio.sync="radio2" label="2" disabled>不可选项</r-radio>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>单选框组</h3>
      <p>一组互斥的单选框。</p>
      <div class="container">
        <div class="box">
          <r-radio-group :radio.sync="radio3">
            <r-radio label="1">单选项</r-radio>
            <r-radio label="2">单选项</r-radio>
          </r-radio-group>    
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>按钮样式</h3>
      <p>按钮样式的单选组合。</p>
      <div class="container">
        <div class="box">
          <r-radio-group :radio.sync="radio4">
            <r-radio-button label="1">汇总</r-radio-button>
            <r-radio-button label="2">本日</r-radio-button>
            <r-radio-button label="3" disabled>本周</r-radio-button>
            <r-radio-button label="4" >本月</r-radio-button>
          </r-radio-group>    
          <r-radio-group :radio.sync="radio5" style="margin-top: 20px">
            <r-radio-button label="1" plain>汇总</r-radio-button>
            <r-radio-button label="2" plain>本日</r-radio-button>
            <r-radio-button label="3" plain disabled>本周</r-radio-button>
            <r-radio-button label="4" plain >本月</r-radio-button>
          </r-radio-group>  
        </div>
        <Code :code="code.button" />
      </div>
    </div>
    <ApiTable name="Radio API" :apis="apis" />
      <ApiTable name="Radio-group API" :apis="groupApis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import ApiTable from "./demo-common/api-table";
import DemoLayout from "./demo-common/demo-layout";
import Code from "./demo-common/code";
import Radio from "../../../src/radio";
import RadioGroup from '../../../src/radio-group';
import RadioButton from '../../../src/radio-button';
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-radio": Radio,
    "r-radio-group":RadioGroup,
     "r-radio-button":RadioButton
  },
  methods: {},
  data() {
    return {
      radio: "1",
      radio2:'1',
      radio3:'1',
      radio4:'1',
      radio5:'1',
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["radio", "当前选定的 Radio", "string", "-", "-"],
          ["label", "Radio 的 value", "string", "-", "-"],
          ["disabled", "是否禁用", "boolean", "-", "false"],
        ]
      },
      groupApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["radio", "当前选定的 Radio", "string", "-", "-"],
        ]
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
        button:`
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
</style>