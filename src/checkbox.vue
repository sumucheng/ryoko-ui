<template>
  <label class="r-checkbox" :class="{disabled:disabled}">
    <span class="outter" :class="{active:checked}">
      <span class="inner"></span>
      <input
        v-model="model"
        type="checkbox"
        :disabled="disabled"
        tabindex="-1"
        class="checkbox-origin"
        @change="toggle"
      />
    </span>
    <span class="text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "r-checkbox",
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options._componentTag === "r-checkbox-group") {
          this.checkboxGroup = parent;
          return true;
        }
        parent = parent.$parent;
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this.checkboxGroup.checkArray : this.checked;
      },
      set(val) {
        if (this.isGroup)
          this.checkboxGroup.$emit.call(
            this.checkboxGroup,
            "handleChange",
            val
          );
        else this.$emit("update:checked", val);
      }
    }
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.isGroup)
          this.checkboxGroup.$emit.call(
            this.checkboxGroup,
            "handleChange",
            this.model
          );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.r-checkbox {
  cursor: pointer;
  font-size: 14px;
  margin-right: 30px;
  text-align: center;
  .outter {
    position: relative;
    .checkbox-origin {
      opacity: 0;
      position: absolute;
      z-index: -10;
      top: 0;
      left: 0;
      margin: 0;
    }
    .inner {
      border: 1px solid #136bff;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      display: inline-block;
      border-radius: 2px;
      &::after {
        content: "";
        display: block;
        width: 3px;
        height: 7px;
        border: 1px solid white;
        position: absolute;
        left: 4px;
        top: 1px;
        border-left: 0;
        border-top: 0;
        transition: transform 0.15s ease-in 0.05s;
        transform: rotate(45deg) scaleY(0);
        transform-origin: center;
      }
    }
    &.active {
      .inner {
        border-color: #136bff;
        background: #136bff;
        &::after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
  }
  .text {
    padding-left: 5px;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    .outter {
      color: #606266;
      .inner {
        background-color: #f2f6fc;
        border-color: #dcdfe6;
        &::after {
          border-color: #c0c4cc;
        }
      }
    }
  }
}
</style>