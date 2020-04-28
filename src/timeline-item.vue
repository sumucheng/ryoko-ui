<template>
  <li class="r-timeline-item">
    <div class="line"></div>
    <div class="dot"></div>
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
    }
  },
  methods: {}
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