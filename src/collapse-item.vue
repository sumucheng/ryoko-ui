<template>
  <div class="r-collapse-item">
    <div class="title" @click="toggle" :class="{active:active}">
      {{title}}
      <Icon name="right" />
    </div>
    <div class="content" v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "r-collapse",
  components: {
    Icon
  },
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
  inject: ["eventBus"],
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
    position: relative;
    &.active {
      border-bottom-color: transparent;
      .icon {
        transform: rotate(90deg);
      }
    }
    .icon {
      width: 0.8em;
      height: 0.8em;
      color: #ccc;
      line-height: 60px;
      transition: transform 0.3s;
      position: absolute;
      right: 5px;
    }
  }
  .content {
    padding-bottom: 25px;
    line-height: 1.5;
    border-bottom: 1px solid #f3f3f8;
  }
}
</style>