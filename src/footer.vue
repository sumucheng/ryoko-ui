<template>
  <div class="r-footer" :style="`height:${height}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-footer",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
</script>

<style lang="scss" scoped>
.r-footer {
  height: 60px;
}
</style>