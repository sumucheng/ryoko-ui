<template>
  <DemoLayout>
    <ViewTip>按照时间记录事件，垂直展示的时间流信息。</ViewTip>
    <div class="item">
      <h3>基础用法</h3>
      <p>Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity。</p>
      <div class="container">
        <div class="box">
          <r-radio-group :radio.sync="reverse">
            <r-radio :label="true">倒序</r-radio>
            <r-radio :label="false">正序</r-radio>
          </r-radio-group>
          <r-timeline :reverse="reverse">
            <r-timeline-item
              v-for="(item,index) in events"
              :key="index"
              :timestamp="item.timestamp"
            >{{item.content}}</r-timeline-item>
          </r-timeline>
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
import Timeline from "../../../src/timeline";
import TimelineItem from "../../../src/timeline-item";
import Radio from "../../../src/radio";
import RadioGroup from "../../../src/radio-group";

export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-timeline": Timeline,
    "r-timeline-item": TimelineItem,
    "r-radio": Radio,
    "r-radio-group": RadioGroup
  },
  methods: {},
  data() {
    return {
      reverse: false,
      events: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ],
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["checked", "当前是否勾选", "boolean", "-", "false"],
          ["label", "Checkbox 的 value", "string", "-", "-"],
          ["disabled", "是否禁用", "boolean", "-", "false"]
        ]
      },
      code: {
        basic: `
        <template>
          <r-checkbox :checked.sync="checked1">单选项</r-checkbox>
          <r-checkbox :checked.sync="checked2">单选项</r-checkbox>
        </template>

        <script>
          export default {
            data () {
              return {
                checked1: true,
                checked2: false
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