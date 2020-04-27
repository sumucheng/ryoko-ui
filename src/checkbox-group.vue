<template>
  <div class="r-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "r-checkbox-group",
  props: {
    checkArray: {
      type: Array
    }
  },
  mounted() {
    this.$on("handleChange", value => {
      this.$emit("update:checkArray", value);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>