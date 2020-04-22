<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  name: "r-icon",
  props: {
    name: {
      type: String
    }
  },
  beforeMount() {
    import("./svg.js");
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin: 0 8px;
}
</style>