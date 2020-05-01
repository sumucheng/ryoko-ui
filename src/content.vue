<template>
  <div class="r-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-content"
};
</script>

<style lang="scss" scoped>
.r-content {
  flex-grow: 1;
}
</style>