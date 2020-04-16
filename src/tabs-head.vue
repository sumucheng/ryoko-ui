<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="scrollLine" ref="scrollLine"></div>
  </div>
</template>

<script>
export default {
  name: "r-tabs-head",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      this.$refs.scrollLine.style.width = `${
        vm.$el.getBoundingClientRect().width
      }px`;
      this.$refs.scrollLine.style.transform = `translateX(${vm.$el.offsetLeft}px)`;
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs-head {
  margin-bottom: 20px;
  display: flex;
  position: relative;
  .scrollLine {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: #136bff;
    z-index: 2;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &:after {
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