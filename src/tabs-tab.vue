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
  inject: ["eventBus", "type"],
  methods: {
    changeTab() {
      if (this.disabled) return;
      this.eventBus.$emit("update:selected", this.name, this);
    }
  },
  created() {
    this.eventBus.$on("update:selected", (name, vm) => {
      this.active = name === this.name;
      this.$el.tabIndex = name === this.name ? 1 : 0;
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs-tab {
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  padding: 12px 0;

  color: #5f5f5f;
  &.active {
    color: #136bff;
    border-bottom: 1px solid #fff;
  }
  &.disabled {
    color: #ccc;
    cursor: not-allowed;
    &:hover {
      color: #ccc;
    }
  }
  &:hover {
    color: #136bff;
  }
}
.line {
  .tabs-tab {
    padding: 12px 0;
    margin: 0 32px 0 0;
    text-align: left;
  }
}
.card {
  .tabs-tab {
    border: 1px solid transparent;
    margin-left: -1px;
    margin-top: -1px;
    padding: 8px 16px;
    &.active {
      color: #136bff;
      background-color: #fff;
      border-right: 1px solid #e4e7ed;
      border-left: 1px solid #e4e7ed;
    }
  }
}
</style>