<template>
  <div class="r-tag" :class="type">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "r-tag",
  data() {
    return {};
  },

  props: {
    type: {
      type: String,
      validator: function validator(value) {
        return value === "warning" || value === "danger" || value === "success";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.r-tag {
  background-color: #ecf5ff;
  display: inline-block;
  height: 22px;
  padding: 0 8px;
  line-height: 20px;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  &.warning {
    background-color: #fcf1e5;
    border-color: #ffbb96;
    color: #fe8f12;
  }
  &.danger {
    background-color: #ffece4;
    border-color: #ffa39e;
    color: #f5573e;
  }
  &.success {
    background-color: #e4fdda;
    border-color: #b7eb8f;
    color: #52c41a;
  }
}
</style>