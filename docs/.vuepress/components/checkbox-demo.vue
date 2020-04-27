<template>
  <DemoLayout>
    <ViewTip>在一组备选项中进行单选。</ViewTip>
    <div class="item">
      <h3>基础用法</h3>
      <p>单独使用可以表示两种状态之间的切换。</p>
      <div class="container">
        <div class="box">
          <r-checkbox :checked.sync="checked1">单选项</r-checkbox>
          <r-checkbox :checked.sync="checked2">单选项</r-checkbox>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>禁用状态</h3>
      <p>多选框不可用状态。</p>
      <div class="container">
        <div class="box">
          <r-checkbox :checked.sync="checked3" disabled>不可选项</r-checkbox>
          <r-checkbox :checked.sync="checked4" disabled>不可选项</r-checkbox>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>多选框组</h3>
      <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
      <div class="container">
        <div class="box">
          <r-checkbox-group :checkArray.sync="checkArray">
            <r-checkbox label="1">选项1</r-checkbox>
            <r-checkbox label="2">选项2</r-checkbox>
          </r-checkbox-group>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <ApiTable name="Checkbox API" :apis="apis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import ApiTable from "./demo-common/api-table";
import DemoLayout from "./demo-common/demo-layout";
import Code from "./demo-common/code";
import Checkbox from "../../../src/checkbox";
import CheckboxGroup from "../../../src/checkbox-group";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-checkbox-group": CheckboxGroup,
    "r-checkbox": Checkbox
  },
  methods: {},
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: true,
      checked4: false,
      checkArray: ["1"],
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
        \<\/script>`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>