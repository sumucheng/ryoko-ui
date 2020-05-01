<template>
  <div class="r-sider" :style="`width:${width}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-sider",
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
</script>

<style lang="scss" scoped>
.r-sider {
  width: 300px;
}
</style>