<template>
  <div class="r-layout" :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-layout",
  data() {
    return {
      classList: []
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "sider") this.classList.push("hasSider");
    });
  }
};
</script>

<style lang="scss" scoped>
.r-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>