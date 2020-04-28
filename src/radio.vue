<template>
  <label class="r-radio" :class="{disabled:disabled}">
    <span class="outter" :class="{active:model===label}">
      <span class="inner"></span>
      <input
        v-model="model"
        :value="label"
        type="radio"
        :disabled="disabled"
        tabindex="-1"
        class="radio-origin"
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
  name: "r-radio",
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options._componentTag === "r-radio-group") {
          this.radioGroup = parent;
          return true;
        }
        parent = parent.$parent;
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this.radioGroup.radio : this.radio;
      },
      set(val) {
        if (this.isGroup)
          this.radioGroup.$emit.call(this.radioGroup, "handleChange", val);
        else this.$emit("update:radio", val);
      }
    }
  },
  props: {
    radio: {
      type: String | Boolean
    },
    label: {
      type: String | Boolean,
      required: true
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
          this.radioGroup.$emit.call(
            this.radioGroup,
            "handleChange",
            this.model
          );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.r-radio {
  cursor: pointer;
  font-size: 14px;
  margin-right: 30px;
  text-align: center;
  .outter {
    position: relative;
    .radio-origin {
      opacity: 0;
      position: absolute;
      z-index: -10;
      top: 0;
      left: 0;
      margin: 0;
    }
    .inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      display: inline-block;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    &.active {
      .inner {
        border-color: #136bff;
        background: #136bff;
        &::after {
          transform: translate(-50%, -50%) scale(1);
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
  }
}
</style>