<template>
  <div class="code">
    <div class="codeControl" @click="toggleCode">
      <span>{{show?"隐藏代码":"显示代码"}}</span>
    </div>
    <pre v-if="show"><code>{{trimCode}}</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    trimCode() {
      return this.code.replace(/^ {8}/gm, "").trim();
    }
  },
  methods: {
    toggleCode() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
.code {
  font-size: 12px;
  .codeControl {
    padding: 10px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    text-align: center;
    cursor: pointer;
    color: #999;
    &:hover {
      color: #333;
    }
  }
  pre {
    background-color: #fafafa;
    margin: 0;
    padding: 18px 24px;
    > code {
      color: #3182bd;
    }
  }
}
</style>