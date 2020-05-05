<template>
  <div class="wrapper" v-if="visible">
    <div class="r-dialog">
      <div class="title">
        <div v-if="title">{{title}}</div>
        <div v-else>
          <slot name="title"></slot>
        </div>
      </div>
      <div class="close" v-if="showClose">
        <Icon name="close" />
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "r-dialog",
  components: { Icon },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    showClose: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 2049;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
}
.r-dialog {
  background: #ffffff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  position: relative;
  margin: 0 auto 50px;
  margin-top: 15vh;
  width: 30%;
  .icon {
    height: 0.8em;
    width: 0.8em;
    color: #888888;
  }
  .title {
    font-size: 16px;
    color: #333333;
    margin-bottom: 26px;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
  }
  .content {
    font-size: 14px;
    color: #5f5f5f;
    line-height: 22px;
  }
  .footer {
    margin-top: 36px;
    text-align: right;
  }
}
</style>