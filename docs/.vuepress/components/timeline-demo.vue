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
              v-for="(item,index) in events1"
              :key="index"
              :timestamp="item.timestamp"
            >{{item.content}}</r-timeline-item>
          </r-timeline>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>自定义节点样式</h3>
      <p>可根据实际场景自定义节点类型和颜色。</p>
      <div class="container">
        <div class="box">
          <r-timeline>
            <r-timeline-item
              v-for="(item,index) in events2"
              :key="index"
              :timestamp="item.timestamp"
              :color="item.color"
              :type="item.type"
            >{{item.content}}</r-timeline-item>
          </r-timeline>
        </div>
        <Code :code="code.type" />
      </div>
    </div>
    <ApiTable name="Timeline API" :apis="apis" />
    <ApiTable name="Timeline-item API" :apis="itemApis" />
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
      reverse: true,
      events1: [
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
      events2: [
        {
          content: "任务成功",
          timestamp: "2018-04-12 20:46",
          type: "success"
        },
        {
          content: "正在进行",
          timestamp: "2018-04-03 20:46",
          type: "primary"
        },
        {
          content: "错误状态",
          timestamp: "2018-04-03 20:46",
          type: "danger"
        },
        {
          content: "警告",
          timestamp: "2018-04-03 20:46",
          type: "warning"
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46"
        }
      ],
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["reverse", "指定节点排序方向，默认为正序", "boolean", "-", "false"]
        ]
      },
      itemApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["timestamp", "时间戳", "string", "-", "-"],
          [
            "type",
            "节点类型",
            "string",
            "primary | success | warning | danger",
            "-"
          ],
          ["color", "节点颜色", "string", "hex ", "-"]
        ]
      },
      code: {
        basic: `
        <template>
          <r-radio-group :radio.sync="reverse">
            <r-radio :label="true">倒序</r-radio>
            <r-radio :label="false">正序</r-radio>
          </r-radio-group>

          <r-timeline :reverse="reverse">
            <r-timeline-item
              v-for="(item,index) in events"
              :key="index"
              :timestamp="item.timestamp">
              {{item.content}}
            </r-timeline-item>
          </r-timeline>
        </template>

        <script>
          export default {
            data () {
              return {
                reverse: true,
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
              };
            }
          }
        \<\/script>`,
        type: `
        <template>
          <r-timeline>
            <r-timeline-item
              v-for="(item,index) in events"
              :key="index"
              :timestamp="item.timestamp"
              :color="item.color"
              :type="item.type">
              {{item.content}}
            </r-timeline-item>
          </r-timeline>
        </template>

        <script>
          export default {
            data () {
              return {       
                events: [
                  {
                    content: "任务成功",
                    timestamp: "2018-04-12 20:46",
                    type: "success"
                  },
                  {
                    content: "正在进行",
                    timestamp: "2018-04-03 20:46",
                    type: "primary"
                  },
                  {
                    content: "错误状态",
                    timestamp: "2018-04-03 20:46",
                    type: "danger"
                  },
                  {
                    content: "警告",
                    timestamp: "2018-04-03 20:46",
                    type: "warning"
                  },
                  {
                    content: "默认样式的节点",
                    timestamp: "2018-04-03 20:46"
                  }
                ],
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