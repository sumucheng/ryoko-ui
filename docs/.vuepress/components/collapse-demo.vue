<template>
  <DemoLayout>
    <ViewTip>吐司提示承载了对用户操作的即时反馈，可以让用户更准确地感知当前操作的步骤或结果。</ViewTip>
    <div class="useRule item">
      <h3>使用原则</h3>
      <ul>
        <li>折叠面板是用在当信息展示的区域有限，但部分内容又可隐藏时，通过折叠面板收纳内容区域。</li>
        <li>根据Collapse交互功能分为两类：每次只能展开一个面板（手风琴面板），同时可展开多个面板（普通面板）。</li>
      </ul>
    </div>
    <div class="item">
      <h3>普通面板</h3>
      <p>可同时展开多个面板，面板之间不影响</p>
      <div class="container">
        <div class="box">
          <r-collapse :selected.sync="selected">
            <r-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </r-collapse-item>
            <r-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </r-collapse-item>
            <r-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </r-collapse-item>
            <r-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </r-collapse-item>
          </r-collapse>
        </div>
        <Code :code="code.basic" />
      </div>
    </div>
    <div class="item">
      <h3>手风琴面板</h3>
      <p>每次只能展开一个面板</p>
      <div class="container">
        <div class="box">
          <r-collapse :selected.sync="selected" accordion>
            <r-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </r-collapse-item>
            <r-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </r-collapse-item>
            <r-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </r-collapse-item>
            <r-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </r-collapse-item>
          </r-collapse>
        </div>
        <Code :code="code.accordion" />
      </div>
    </div>

    <ApiTable name="Collapse API" :apis="apis" />
    <ApiTable name="Collapse-item API" :apis="itemApis" />
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import ApiTable from "./demo-common/api-table";
import DemoLayout from "./demo-common/demo-layout";
import Code from "./demo-common/code";
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout,
    ApiTable: ApiTable,
    Code: Code,
    "r-collapse": Collapse,
    "r-collapse-item": CollapseItem
  },
  methods: {},
  data() {
    return {
      selected: ["1"],
      apis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["selected", "当前激活的面板", "string | array", "-", "-"],
          ["accordion", "是否手风琴模式", "boolean", "-", "false"]
        ]
      },
      itemApis: {
        header: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["name", "面板的唯一标识符", "string", "-", "-"],
          ["title", "面板标题", "string", "-", "-"]
        ]
      },
      code: {
        basic: `
        <r-collapse :selected.sync="selected">
          <r-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </r-collapse-item>
          <r-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </r-collapse-item>
          <r-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </r-collapse-item>
          <r-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </r-collapse-item>
        </r-collapse>`,
        accordion: `
        <r-collapse :selected.sync="selected" accordion>
          <r-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </r-collapse-item>
          <r-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </r-collapse-item>
          <r-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </r-collapse-item>
          <r-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </r-collapse-item>
        </r-collapse>`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>