<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "r-tabs",
  props: {
    type: {
      type: String,
      default: "default"
    },
    selected: {
      type: String
    },
    position: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    if (this.$children.length === 0) console.warn("你没有在tabs中添加子组件");
    this.$children.forEach(vm => {
      if (vm.$options.name === "r-tabs-head") {
        vm.$children.forEach(child => {
          if (
            child.$options.name === "r-tabs-tab" &&
            child.name === this.selected
          )
            this.eventBus.$emit("update:selected", this.selected, child);
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>