<template>
  <span ref="triggerWrapper" class="triggerWrapper">
    <slot name="trigger" ref="trigger"></slot>
    <div class="plain" ref="plain" v-if="visible" :style="`width:${width}px`" :class="position">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="arrow"></div>
    </div>
  </span>
</template>

<script>
export default {
  name: "r-popover",
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    switch (this.trigger) {
      case "hover":
        this.$refs.triggerWrapper.addEventListener("mouseenter", this.onOpen);
        this.$refs.triggerWrapper.addEventListener("mouseleave", this.onClose);
        break;
      case "click":
        this.$refs.triggerWrapper.addEventListener("click", this.toggle);
        break;
      case "focus":
        this.$refs.triggerWrapper.addEventListener("mousedown", this.onOpen);
        this.$refs.triggerWrapper.addEventListener("mouseup", this.onClose);
        break;
      default:
        break;
    }
  },

  beforeDestroy() {
    switch (this.trigger) {
      case "hover":
        this.$refs.triggerWrapper.removeEventListener(
          "mouseenter",
          this.onOpen
        );
        this.$refs.triggerWrapper.removeEventListener(
          "mouseleave",
          this.onClose
        );
        break;
      case "click":
        this.$refs.triggerWrapper.removeEventListener("click", this.toggle);
        break;
      case "focus":
        this.$refs.triggerWrapper.removeEventListener("mousedown", this.onOpen);
        this.$refs.triggerWrapper.removeEventListener("mouseup", this.onClose);
        break;
      default:
        break;
    }
  },
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    width: {
      type: String | Number
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["hover", "click", "focus"].indexOf(value) >= 0;
      }
    }
  },

  methods: {
    getPos() {
      let wrapper = this.$refs.triggerWrapper;
      let { top, left } = wrapper.getBoundingClientRect();
      let { offsetWidth, offsetHeight } = wrapper.children[0];
      let { scrollX, scrollY } = window;
      let posStyle = {
        top: {
          left: left + offsetWidth / 2 + scrollX,
          top: top - 12 + scrollY
        },
        bottom: {
          left: left + offsetWidth / 2 + scrollX,
          top: top + offsetHeight + scrollY
        },
        left: {
          left: left + scrollX - 12,
          top: top + offsetHeight / 2 + scrollY
        },
        right: {
          left: left + offsetWidth + scrollX,
          top: top + offsetHeight / 2 + scrollY
        }
      };
      this.$refs.plain.style.left = posStyle[this.position].left + "px";
      this.$refs.plain.style.top = posStyle[this.position].top + "px";
      document.body.appendChild(this.$refs.plain);
    },
    onClickDoc(e) {
      if (
        this.$refs.triggerWrapper &&
        !this.$refs.triggerWrapper.contains(e.target) &&
        !this.$refs.plain.contains(e.target)
      )
        this.onClose();
    },
    onOpen() {
      this.visible = true;
      this.$nextTick(() => {
        this.getPos();
        document.addEventListener("click", this.onClickDoc);
      });
    },
    onClose() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDoc);
    },
    toggle(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) this.onClose();
        else this.onOpen();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.triggerWrapper {
  margin-right: 10px;
  display: inline-block;
}
.plain {
  min-width: 150px;
  max-width: 20em;
  word-break: break-all;
  position: absolute;
  z-index: 2000;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 18px 20px;
  &.top {
    margin-bottom: 12px;
    transform: translate(-50%, -100%);
    .arrow {
      left: 50%;
      transform: translateX(-50%);
      bottom: -6px;
      border-top-color: #fff;
      border-bottom: none;
      &::after {
        margin-left: -6px;
        border-top-width: 0;
        bottom: 0;
      }
    }
  }
  &.bottom {
    margin-top: 12px;
    transform: translate(-50%, 0);
    .arrow {
      left: 50%;
      transform: translateX(-50%);
      top: -6px;
      border-bottom-color: #fff;
      border-top: none;
      &::after {
        margin-left: -6px;
        border-top-width: 0;
        top: 0;
      }
    }
  }
  &.left {
    transform: translate(-100%, -50%);
    margin-right: 12px;
    .arrow {
      top: 50%;
      transform: translateY(-50%);
      right: -6px;
      border-left-color: #fff;
      border-right: none;
      &::after {
        margin-top: -6px;
        border-right-width: 0;
        right: 0;
      }
    }
  }
  &.right {
    margin-left: 12px;
    transform: translate(0, -50%);
    .arrow {
      top: 50%;
      transform: translateY(-50%);
      left: -6px;
      border-right-color: #fff;
      border-left: none;
      &::after {
        margin-top: -6px;
        border-left-width: 0;
        left: 0;
      }
    }
  }
  .title {
    margin-bottom: 12px;
    font-size: 16px;
    color: #333333;
    line-height: 16px;
  }
  .content {
    font-size: 14px;
    color: #5f5f5f;
    line-height: 22px;
  }
  .arrow {
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.3));
    position: absolute;
    z-index: 2001;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    &::after {
      content: "";
      display: block;
      border: 6px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
  }
}
</style>