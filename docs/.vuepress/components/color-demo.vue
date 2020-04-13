<template>
  <DemoLayout>
    <ViewTip>色彩是视觉体验中最重要的一条信息通道。合理地使用颜色可以加强大脑对物件的响应与感知。我们建议尽可能少的使用复杂的色板，以帮助用户更有效地用颜色区分功能类型。</ViewTip>
    <div class="item" v-for="color in colorList" :key="color.en">
      <h3>{{color.zh}}</h3>
      <p>{{color.info}}</p>
      <div class="row">
        <div class="color-box" v-for="sub in color.subColor" :key="sub.style">
          <div class="color-bg" :style="sub.style"></div>
          <div class="color-name">{{color.en||sub.name}}</div>
          <div class="color-info" v-for="info in sub.info">{{info}}</div>
        </div>
      </div>
    </div>
    <div class="item">
      <h3>{{grey.name}}</h3>
      <p>{{grey.info}}</p>
      <div class="grey-color" v-for="grey in grey.subColor" :key="grey.style" :class="grey.class">
        <div class="grey-color-box" :style="grey.style"></div>
        <div class="grey-color-info">{{grey.info}}</div>
      </div>
    </div>
  </DemoLayout>
</template>

<script>
import ViewTip from "./demo-common/view-tip";
import DemoLayout from "./demo-common/demo-layout";
export default {
  components: {
    ViewTip: ViewTip,
    DemoLayout: DemoLayout
  },
  data() {
    return {
      grey: {
        name: "灰度颜色",
        info:
          "针对正文和图标，占位符，分割线、背景等元素和组件，根据不同的使用场景应使用恰当的正文灰色。",
        subColor: [
          { style: "background: #333333;", info: "", class: "a" },
          { style: "background: #5F5F5F;", info: "正文/图标", class: "a" },
          { style: "background: #888888;", info: "", class: "a" },
          {
            style: "background: #A0A0A0;",
            info: "正文/图标（禁用状态）",
            class: "b"
          },
          { style: "background: #CCCCCC;", info: "按钮描边", class: "c" },
          { style: "background: #E9E9E9;", info: "分割线", class: "b" },
          {
            style: "background: #F3F3F8;",
            info: "背景色／表头底色／表单选中/表格内部分割线",
            class: "b"
          }
        ]
      },
      colorList: {
        blue: {
          en: "Blue",
          zh: "品牌色",
          info: "品牌色，在页面中的使用比重需占到80%",
          subColor: [
            {
              style: "background:#136BFF",
              info: ["HEX  #136BFF", "RGB  19 107 255"]
            },
            {
              style: "background:#E5EFFF",
              info: ["HEX  #E5EFFF", "RGB  229 239 255"]
            },
            {
              style: "background:#0047C0",
              info: ["HEX  #0047C0", "RGB  0 71 279"]
            },
            {
              style:
                "background-image: linear-gradient(270deg, #31CBFF 0%, #0160FF 100%);",
              info: ["#0160FF >", "#31CBFF"]
            }
          ]
        },
        orange: {
          en: "Orange",
          zh: "警示颜色",
          info:
            "橘色是警示专色，通常应用在警告操作以及警告提醒等组件或场景中。",
          subColor: [
            {
              style: "background:#FE8F12",
              info: ["HEX  #FE8F12", "RGB  254 143 18"]
            },
            {
              style: "background:#FCF1E5;",
              info: ["HEX  #FCF1E5", "RGB  252 241 299"]
            }
          ]
        },
        red: {
          en: "Red",
          zh: "危险颜色",
          info:
            "红色是危险专色，通常应用在异常危险操作以及警告提醒等组件或场景中。",
          subColor: [
            {
              style: "background:#F5573E",
              info: ["HEX  #F5573E", "RGB  255 48 0"]
            },
            {
              style: "background:#FFECE4;",
              info: ["HEX  #FFECE4", "RGB  255 226 238"]
            }
          ]
        },
        green: {
          en: "Green",
          zh: "成功颜色",
          info:
            "绿色是成功专色，通常应用在一些操作确认，状态确认等组件或场景中。",
          subColor: [
            {
              style: "background:#52C41A",
              info: ["HEX  #52C41A", "RGB  82 186 26"]
            },
            {
              style: "background:#E4FDDA;",
              info: ["HEX  #E4FDDA", "RGB  228 253 218"]
            }
          ]
        },
        table: {
          zh: "图表颜色",
          info:
            "针对表格，图表等元素和组件，按照以下从左至右的排序顺序出现显示。",
          subColor: [
            {
              name: "Color-1",
              style: "background:#0F9C2E",
              info: ["HEX  #0F9C2E", "RGB  15 156 46"]
            },
            {
              name: "Color-2",
              style: "background:#01C1B2;",
              info: ["HEX  #01C1B2", "RGB  228 253 218"]
            },
            {
              name: "Color-3",
              style: "background:#8272EC",
              info: ["HEX  #8272EC", "RGB  15 156 46"]
            },
            {
              name: "Color-4",
              style: "background:#178BF5;",
              info: ["HEX  #178BF5", "RGB  23 139 245"]
            },
            {
              name: "Color-5",
              style: "background:#8A2CBB",
              info: ["HEX  #8A2CBB", "RGB  15 156 46"]
            },
            {
              name: "Color-6",
              style: "background:#FF445F;",
              info: ["HEX  #FF445F", "RGB  228 253 218"]
            },
            {
              name: "Color-7",
              style: "background: #FF6A00;",
              info: ["HEX  #FF6A00", "RGB  15 156 46"]
            },
            {
              name: "Color-8",
              style: "background: #FFD74D;",
              info: ["HEX  #FFD74D", "RGB  228 253 218"]
            },
            {
              name: "Color-9",
              style: "background: #4DDE6D;",
              info: ["HEX  #4DDE6D", "RGB  15 156 46"]
            },
            {
              name: "Color-10",
              style: "background: #0636A6;",
              info: ["HEX  #0636A6", "RGB  228 253 218"]
            },
            {
              name: "Color-11",
              style: "background: #18C6F7;",
              info: ["HEX  #18C6F7", "RGB  15 156 46"]
            },
            {
              name: "Color-12",
              style: "background: #3C2CA6;",
              info: ["HEX  #3C2CA6", "RGB  228 253 218"]
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.grey-color {
  display: flex;
  &.b {
    margin-top: 5px;
  }
  &.c {
    margin-top: 35px;
  }
}
.grey-color-box {
  min-width: 400px;
  height: 30px;
  margin-right: 14px;
  flex-wrap: nowrap;
}
.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > * {
    margin-right: 25px;
    margin-bottom: 25px;
  }
}
.color-box {
  height: 180px;
  width: 120px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  .color-bg {
    height: 110px;
  }
}
.color-name {
  font-size: 14px;
  color: #000000;
  padding-top: 8px;
  padding-bottom: 4px;
  padding-left: 12px;
}
.color-info {
  font-size: 12px;
  color: #888888;
  letter-spacing: 0;
  padding-left: 12px;
}
</style>