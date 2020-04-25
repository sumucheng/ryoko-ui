<template>
  <label class="r-radio" @click="toggle">
    <span class="outter" :class="{active:active}">
      <span class="inner"></span>
    </span>
    <span class="text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "r-radio",
  data() {
    return {
      active: false
    };
  },
  props: {
    radio: {
      type: String
    },
    label: {
      type: String,
      required: true
    }
  },
  watch: {
    radio: function(value) {
      if (value !== this.label) this.active = false;
    }
  },
  methods: {
    toggle() {
      if (this.active) {
        this.active = false;
        this.$emit("update:radio", "");
      } else {
        this.active = true;
        this.$emit("update:radio", this.label);
      }
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
        border-color: #409eff;
        background: #409eff;
        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  }

  .text {
    padding-left: 5px;
  }
}
</style>