<template>
  <div
    class="col"
    :class="[`col-${span}`,`offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      gutter: {
        type: Number,
        default: 0
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.col {
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>