<template>
  <div class="col" :class="`col-${span}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: String,
      default: "24"
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  background: #99a9bf;
  border-radius: 4px;

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>