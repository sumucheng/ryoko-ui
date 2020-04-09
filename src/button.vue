<template>
  <button class="r-button" :class="[type,size]" @click="$emit('click')" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "middle",
      validator(value) {
        return value === "large" || value === "midlle" || value === "small";
      }
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        return value === "default" || value === "primary" || value === "danger";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style/normal.scss";
.r-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  border-radius: $border-radius-s;
  line-height: 1;
  border: 1px solid;
  &[disabled] {
    cursor: not-allowed;
  }
  &.default {
    background: #fff;
    border: 1px solid #ccc;
    color: #333;
    &:hover {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
    }
    &:active {
      color: #409eff;
      background: #ecf5ff;
      border-color: #409eff;
    }
    &[disabled] {
      border-color: #ebeef5;
      color: #c0c4cc;
      background: #ebeef5;
    }
  }
  &.primary {
    color: #fff;
    background-color: #136bff;
    border-color: #136bff;
    &:hover {
      color: #fff;
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      color: #fff;
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
    &[disabled] {
      border-color: #a0cfff;
      background: #a0cfff;
    }
  }
  &.danger {
    color: #fff;
    background: #f5573e;
    border-color: #f5573e;
    &:hover {
      color: #fff;
      background: #f78989;
      border-color: #f78989;
    }
    &:active {
      color: #fff;
      background: #dd6161;
      border-color: #dd6161;
    }
    &[disabled] {
      border-color: #fab6b6;
      background: #fab6b6;
    }
  }
  &.large {
    height: 36px;
  }
  &.middle {
    height: 32px;
  }
  &.small {
    height: 28px;
  }
}
</style>