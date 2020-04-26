<template>
  <div class="r-radio-group">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "r-radio-group",
  props: {
    radio: {
      type: String
    }
  },
  mounted() {
    this.$on("handleChange", value => {
      this.$emit("update:radio", value);
    });
  }
};
</script>

<style lang="scss" scoped>
.r-radio-group {
  font-size: 0;
}
</style>