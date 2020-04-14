<template>
  <div class="header" :style="`height:${height}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>