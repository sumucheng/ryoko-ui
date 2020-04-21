<template>
  <div class="tabs-pane" :class="{active:active}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-tabs-pane",
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      active: false
    };
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  display: none;
  &.active {
    display: block;
  }
}
</style>