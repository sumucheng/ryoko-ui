<template>
  <div class="r-tag" :class="[type,effect]">
    <div class="square" v-if="effect==='cube'"></div>
    <slot></slot>
    <Icon v-if="closable" name="close" @click.native="handleClick" />
  </div>
</template>

<script>
import Vue from "vue";
import Icon from "./icon";
export default {
  name: "r-tag",
  components: { Icon },
  props: {
    type: {
      type: String,
      validator: function validator(value) {
        return value === "warning" || value === "danger" || value === "success";
      }
    },
    effect: {
      type: String,
      validator: function validator(value) {
        return value === "light" || value === "cube";
      }
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("close");
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
  .icon {
    height: 0.6em;
    width: 0.6em;
    position: relative;
    top: -2px;
    margin: 0 0 0 5px;
    cursor: pointer;
  }
  &.warning {
    background-color: #fcf1e5;
    border-color: #ffbb96;
    color: #fe8f12;
    &.cube {
      .square {
        background-color: #fe8f12;
      }
    }
  }
  &.danger {
    background-color: #ffece4;
    border-color: #ffa39e;
    color: #f5573e;
    &.cube {
      .square {
        background-color: #f5573e;
      }
    }
  }
  &.success {
    background-color: #e4fdda;
    border-color: #b7eb8f;
    color: #52c41a;
    &.cube {
      .square {
        background-color: #52c41a;
      }
    }
  }
  &.cube {
    height: 26px;
    line-height: 24px;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    padding: 0 10px;
    .square {
      display: inline-block;
      height: 14px;
      width: 14px;
      background: #178bf5;
      margin-right: 8px;
      border-radius: 2px;
      position: relative;
      vertical-align: middle;
      top: -2px;
    }
  }
}
</style>