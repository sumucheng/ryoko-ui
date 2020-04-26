<template>
  <div class="r-radio-group">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "r-radio-group",
  props: {
    radio: {
      type: String
    }
  },
  mounted() {
    this.$on("handleChange", value => {
      this.$emit("update:radio", value);
    });
  }
};
</script>

<style lang="scss" scoped>
.r-radio {
  cursor: pointer;
  font-size: 14px;
  margin-right: 30px;
  text-align: center;
  .outter {
    .inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      display: inline-block;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    &.active {
      .inner {
        border-color: #409eff;
        background: #409eff;
        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  }
  .text {
    padding-left: 5px;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>