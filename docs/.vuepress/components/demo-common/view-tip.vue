<template>
  <div class="viewTip">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.viewTip {
  background: rgba($color: #116bfb, $alpha: 0.08);
  border-radius: 4px;
  padding: 12px;
  font-size: 12px;
  line-height: 1.6em;
  color: #0161fb;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
</style>