<template>
  <div class="col" :class="colClassList" :style="colStyle">
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
    },
    phone: {
      type: Number | Object
    },
    pad: {
      type: Number | Object
    },
    pc: {
      type: Number | Object
    }
  },
  data() {
    return {
      gutter: {
        type: Number,
        default: 0
      }
    };
  },
  computed: {
    colClassList() {
      function getClass(name, value) {
        if (typeof value === "number") classList.push(`col-${name}-${value}`);
        else {
          value.span !== undefined &&
            classList.push(`col-${name}-${value.span}`);
          value.offset !== undefined &&
            classList.push(`offset-${name}-${value.offset}`);
        }
      }
      let classList = [`col-${this.span}`, `offset-${this.offset}`];
      this.phone && getClass("phone", this.phone);
      this.pad && getClass("pad", this.pad);
      this.pc && getClass("pc", this.pc);
      return classList;
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  $class: col-;
  @for $n from 0 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-;
  @for $n from 0 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  @media (max-width: 576px) {
    $class: col-phone-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class: offset-phone-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 576px) and (max-width: 992px) {
    $class: col-pad-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class: offset-pad-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    $class: col-pc-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class: offset-pc-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>