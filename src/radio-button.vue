<template>
  <label class="r-radio-button" :class="{disabled:disabled,active:model===label,plain:plain}">
    <input
      v-model="model"
      :value="label"
      type="radio"
      :disabled="disabled"
      tabindex="-1"
      class="radio-origin"
      @change="toggle"
    />
    <span class="text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "r-radio-button",
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
      type: String
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
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
.r-radio-button {
  position: relative;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  &.disabled {
    .text {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &:first-child {
    .text {
      border-radius: 4px 0 0 4px;
    }
  }
  &:last-child {
    .text {
      border-radius: 0 4px 4px 0;
      border-right: 1px solid #dcdfe6;
    }
  }
  .radio-origin {
    opacity: 0;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    margin: 0;
  }
  .text {
    transition: all 0.3s;
    border: 1px solid #dcdfe6;
    border-right: transparent;
    padding: 10px 24px;
    display: inline-block;
    font-size: 14px;
  }
  &.active {
    .text {
      color: #fff;
      background-color: #136bff;
      border-color: #136bff;
    }
  }
  &.plain {
    &:not(:last-child) {
      .text {
        &::before {
          transition: background-color 0.3s;
          content: "";
          display: block;
          height: 100%;
          width: 1px;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    &.active {
      .text {
        background: #fff;
        color: #136bff;
        border-color: #136bff;
        &::before {
          background: #136bff;
        }
      }
    }
  }
}
</style>