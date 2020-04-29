<template>
  <li class="r-timeline-item">
    <div class="line"></div>
    <div class="dot" :class="type"></div>
    <div class="wrapper">
      <slot></slot>
      <div class="time">{{timestamp}}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "r-timeline-item",
  computed: {},
  props: {
    timestamp: {
      type: String
    },
    type: {
      type: String
    },
    color: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.r-timeline-item {
  position: relative;
  font-size: 14px;
  padding-bottom: 18px;
  margin: 0;
  &:last-child {
    .line {
      display: none;
    }
  }
  .line {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
  }
  .dot {
    border-radius: 100%;
    background: #e4e7ed;
    width: 12px;
    height: 12px;
    position: absolute;
    left: -1px;
    &.success {
      background: #52c41a;
    }
    &.primary {
      background: #136bff;
    }
    &.warning {
      background: #fe8f12;
    }
    &.danger {
      background: #f5573e;
    }
  }
  .wrapper {
    position: relative;
    padding-left: 30px;
    top: -6px;
    .time {
      font-size: 13px;
      color: #909399;
      margin-top: 6px;
      line-height: 1;
    }
  }
}
</style>