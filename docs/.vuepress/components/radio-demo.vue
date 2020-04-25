<template>
  <DemoLayout>
    <ViewTip>在一组备选项中进行单选。</ViewTip>
    <div class="item">
      <h3>普通面板</h3>
      <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器</p>
      <div class="container">
        <div class="box">
          <r-radio :radio.sync="radio" label="1">单选项</r-radio>
          <r-radio :radio.sync="radio" label="2">单选项</r-radio>
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
import Radio from "../../../src/radio";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-radio": Radio
  },
  methods: {},
  data() {
    return {
      radio: "1",
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["selected", "当前激活的面板", "string | array", "-", "-"],
          ["accordion", "是否手风琴模式", "boolean", "-", "false"]
        ]
      },
      code: {
        basic: `
       `
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>