<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "toast"
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: #e5efff;
  border: 1px solid #85b3ff;
  border-radius: 4px;
  font-size: 14px;
  color: #5f5f5f;
  letter-spacing: 0;
  padding: 8px 16px;
}
</style>