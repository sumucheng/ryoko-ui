<template>
  <div class="wrapper" :class="type">
    <div class="tabs-head" :class="type">
      <slot></slot>
      <div class="scrollLine" ref="scrollLine" v-if="type==='line'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "r-tabs-head",
  inject: ["eventBus", "type"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      let width = vm.$el.getBoundingClientRect().width;
      let transform = vm.$el.offsetLeft;
      width = vm.$el.previousElementSibling ? width - 40 : width - 20;
      transform = vm.$el.previousElementSibling ? transform + 20 : transform;
      if (this.$refs.scrollLine) {
        this.$refs.scrollLine.style.width = `${width}px`;
        this.$refs.scrollLine.style.transform = `translateX(${transform}px)`;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper.card {
  border-bottom: 1px solid #e4e7ed;
  background: #f9fafb;
  margin: 0;
}
.tabs-head {
  display: flex;
  position: relative;
  &.line {
    margin-bottom: 20px;
  }
  &.card {
    overflow: hidden;
    margin-bottom: -1px;
  }
  .scrollLine {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: #136bff;
    z-index: 2;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &.line:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #e9e9e9;
    z-index: 1;
  }
}
</style>