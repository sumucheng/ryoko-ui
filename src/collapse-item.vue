<template>
  <div class="r-collapse-item">
    <div class="title" @click="toggle" :class="{active:active}">{{title}}</div>
    <div class="content" v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "r-collapse",
  data() {
    return {
      active: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ["eventBus", "accordion"],
  mounted() {
    this.eventBus.$on("update:selected", names => {
      this.active = names.indexOf(this.name) >= 0;
    });
  },
  methods: {
    toggle() {
      if (this.active) {
        this.active = false;
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.active = true;
        this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.r-collapse-item {
  font-size: 14px;
  color: #333;
  &:last-child {
    margin-bottom: -1px;
  }
  .title {
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #f3f3f8;
    transition: border-bottom-color 0.3s;
    outline: none;
    &.active {
      border-bottom-color: transparent;
    }
  }
  .content {
    padding-bottom: 25px;
    line-height: 1.5;
    border-bottom: 1px solid #f3f3f8;
  }
}
</style>