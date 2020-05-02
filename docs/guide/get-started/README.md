---
title:快速上手
---
# 快速上手

### 引入 Ryoko-UI

你可以引入整个 Ryoko-ui ，或是根据需要引入部分组件。

#### 完整引入

在 main.js 中写入以下内容：

``` js
import Vue from 'vue';
import App from './App.vue';

import { install } from "ryoko-ui";
import "ryoko-ui/dist/index.css";

Vue.use(install);

new Vue({
  render: h => h(App),
}).$mount('#app')
```

需要注意的是，样式文件需要单独引入。

#### 部分引入

如果你只希望引入部分组件，比如 Timeline 和 TimelineItem，那么你需要在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import App from './App.vue'

import { Timeline, TimelineItem } from "ryoko-ui";
import "ryoko-ui/dist/index.css"

Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);

new Vue({
  render: h => h(App),
}).$mount('#app')

```



