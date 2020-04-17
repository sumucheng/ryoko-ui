<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-tabs-body"
};
</script>

<style lang="scss" scoped>
.tabs.card {
  .tabs-body {
    padding: 20px;
  }
}
</style>