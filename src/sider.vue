<template>
  <div class="sider" :style="`width:${width}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sider",
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
</script>

<style lang="scss" scoped>
.sider {
  width: 300px;
}
</style>