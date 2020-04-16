<template>
  <div class="tabs-tab" :class="{active:active,disabled:disabled}" @click="changeTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-tabs-tab",
  props: {
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false
    };
  },
  inject: ["eventBus"],
  methods: {
    changeTab() {
      if (this.disabled) return;
      this.eventBus.$emit("update:selected", this.name, this);
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs-tab {
  margin-right: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 52px;
  cursor: pointer;
  &.active {
    color: #136bff;
  }
  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
}
</style>