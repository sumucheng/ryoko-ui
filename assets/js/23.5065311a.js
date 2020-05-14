(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{214:function(a,t,r){},325:function(a,t,r){"use strict";var o=r(214);r.n(o).a},354:function(a,t,r){"use strict";r.r(t);var o=r(155),i=r(157),d=r(161),n=r(156),e=r(242),l=r(241),s={name:"r-radio-button",computed:{isGroup:function(){for(var a=this.$parent;a;){if("r-radio-group"===a.$options._componentTag)return this.radioGroup=a,!0;a=a.$parent}return!1},model:{get:function(){return this.isGroup?this.radioGroup.radio:this.radio},set:function(a){this.isGroup?this.radioGroup.$emit.call(this.radioGroup,"handleChange",a):this.$emit("update:radio",a)}}},props:{radio:{type:String},label:{type:String,required:!0},disabled:{type:Boolean,default:!1},plain:{type:Boolean,default:!1}},methods:{toggle:function(){var a=this;this.$nextTick((function(){a.isGroup&&a.radioGroup.$emit.call(a.radioGroup,"handleChange",a.model)}))}}},u=(r(325),r(18)),p=Object(u.a)(s,(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("label",{staticClass:"r-radio-button",class:{disabled:a.disabled,active:a.model===a.label,plain:a.plain}},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.model,expression:"model"}],staticClass:"radio-origin",attrs:{type:"radio",disabled:a.disabled,tabindex:"-1"},domProps:{value:a.label,checked:a._q(a.model,a.label)},on:{change:[function(t){a.model=a.label},a.toggle]}}),a._v(" "),r("span",{staticClass:"text"},[a._t("default")],2)])}),[],!1,null,"51c9ce00",null).exports,b={components:{ViewTip:o.default,DemoLayout:d.default,ApiTable:i.default,Code:n.default,"r-radio":e.a,"r-radio-group":l.a,"r-radio-button":p},methods:{},data:function(){return{radio:"1",radio2:"1",radio3:"1",radio4:"1",radio5:"1",apis:{header:["参数","说明","类型","可选值","默认值"],body:[["radio","当前选定的 Radio","string","-","-"],["label","Radio 的 value","string","-","-"],["disabled","是否禁用","boolean","-","false"]]},buttonApis:{header:["参数","说明","类型","可选值","默认值"],body:[["label","Radio 的 value","string","-","-"],["disabled","是否禁用","boolean","-","false"],["plain","是否朴素样式","boolean","-","false"]]},groupApis:{header:["参数","说明","类型","可选值","默认值"],body:[["radio","当前选定的 Radio","string","-","-"]]},code:{basic:'\n        <template>\n          <r-radio :radio.sync="radio" label="1">单选项</r-radio>\n          <r-radio :radio.sync="radio" label="2">单选项</r-radio>\n        </template>\n\n        <script>\n          export default {\n            data () {\n              return {\n                radio: \'1\'\n              };\n            }\n          }\n        <\/script>',disabled:'\n        <template>\n          <r-radio :radio.sync="radio2" label="1">可选项</r-radio>\n          <r-radio :radio.sync="radio2" label="2" disabled>不可选项</r-radio>\n        </template>\n\n        <script>\n          export default {\n            data () {\n              return {\n                radio: \'1\'\n              };\n            }\n          }\n        <\/script>',group:'\n        <template>\n          <r-radio-group :radio.sync="radio3">\n            <r-radio label="1">单选项</r-radio>\n            <r-radio label="2">单选项</r-radio>\n          </r-radio-group>    \n        </template>\n\n        <script>\n          export default {\n            data () {\n              return {\n                radio: \'1\'\n              };\n            }\n          }\n        <\/script>',button:'\n        <template>\n          <r-radio-group :radio.sync="radio1">\n            <r-radio-button label="1">汇总</r-radio-button>\n            <r-radio-button label="2">本日</r-radio-button>\n            <r-radio-button label="3" disabled>本周</r-radio-button>\n            <r-radio-button label="4" >本月</r-radio-button>\n          </r-radio-group>    \n\n          <r-radio-group :radio.sync="radio2" style="margin-top: 20px">\n            <r-radio-button label="1" plain>汇总</r-radio-button>\n            <r-radio-button label="2" plain>本日</r-radio-button>\n            <r-radio-button label="3" plain disabled>本周</r-radio-button>\n            <r-radio-button label="4" plain >本月</r-radio-button>\n          </r-radio-group>  \n        </template>\n\n        <script>\n          export default {\n            data () {\n              return {\n                radio1: \'1\',\n                radio2: \'1\',\n              };\n            }\n          }\n        <\/script>'}}}},c=Object(u.a)(b,(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("DemoLayout",[r("ViewTip",[a._v("在一组备选项中进行单选。")]),a._v(" "),r("div",{staticClass:"item"},[r("h3",[a._v("普通面板")]),a._v(" "),r("p",[a._v("由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。")]),a._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[r("r-radio",{attrs:{radio:a.radio,label:"1"},on:{"update:radio":function(t){a.radio=t}}},[a._v("单选项")]),a._v(" "),r("r-radio",{attrs:{radio:a.radio,label:"2"},on:{"update:radio":function(t){a.radio=t}}},[a._v("单选项")])],1),a._v(" "),r("Code",{attrs:{code:a.code.basic}})],1)]),a._v(" "),r("div",{staticClass:"item"},[r("h3",[a._v("禁用状态")]),a._v(" "),r("p",[a._v("单选框不可用的状态。")]),a._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[r("r-radio",{attrs:{radio:a.radio2,label:"1"},on:{"update:radio":function(t){a.radio2=t}}},[a._v("可选项")]),a._v(" "),r("r-radio",{attrs:{radio:a.radio2,label:"2",disabled:""},on:{"update:radio":function(t){a.radio2=t}}},[a._v("不可选项")])],1),a._v(" "),r("Code",{attrs:{code:a.code.basic}})],1)]),a._v(" "),r("div",{staticClass:"item"},[r("h3",[a._v("单选框组")]),a._v(" "),r("p",[a._v("一组互斥的单选框。")]),a._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[r("r-radio-group",{attrs:{radio:a.radio3},on:{"update:radio":function(t){a.radio3=t}}},[r("r-radio",{attrs:{label:"1"}},[a._v("单选项")]),a._v(" "),r("r-radio",{attrs:{label:"2"}},[a._v("单选项")])],1)],1),a._v(" "),r("Code",{attrs:{code:a.code.basic}})],1)]),a._v(" "),r("div",{staticClass:"item"},[r("h3",[a._v("按钮样式")]),a._v(" "),r("p",[a._v("按钮样式的单选组合。")]),a._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[r("r-radio-group",{attrs:{radio:a.radio4},on:{"update:radio":function(t){a.radio4=t}}},[r("r-radio-button",{attrs:{label:"1"}},[a._v("汇总")]),a._v(" "),r("r-radio-button",{attrs:{label:"2"}},[a._v("本日")]),a._v(" "),r("r-radio-button",{attrs:{label:"3",disabled:""}},[a._v("本周")]),a._v(" "),r("r-radio-button",{attrs:{label:"4"}},[a._v("本月")])],1),a._v(" "),r("r-radio-group",{staticStyle:{"margin-top":"20px"},attrs:{radio:a.radio5},on:{"update:radio":function(t){a.radio5=t}}},[r("r-radio-button",{attrs:{label:"1",plain:""}},[a._v("汇总")]),a._v(" "),r("r-radio-button",{attrs:{label:"2",plain:""}},[a._v("本日")]),a._v(" "),r("r-radio-button",{attrs:{label:"3",plain:"",disabled:""}},[a._v("本周")]),a._v(" "),r("r-radio-button",{attrs:{label:"4",plain:""}},[a._v("本月")])],1)],1),a._v(" "),r("Code",{attrs:{code:a.code.button}})],1)]),a._v(" "),r("ApiTable",{attrs:{name:"Radio API",apis:a.apis}}),a._v(" "),r("ApiTable",{attrs:{name:"Radio-group API",apis:a.groupApis}}),a._v(" "),r("ApiTable",{attrs:{name:"Radio-button API",apis:a.buttonApis}})],1)}),[],!1,null,"49b9ff00",null);t.default=c.exports}}]);