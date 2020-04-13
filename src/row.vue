<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  height: 36px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>