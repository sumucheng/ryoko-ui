<template>
  <div class="popover" @click="toggle" ref="popover">
    <div class="plain" ref="plain" v-if="visible" :style="`width:${width}px`">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="arrow"></div>
    </div>
    <span ref="triggerWrapper">
      <slot name="trigger"></slot>
    </span>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "r-popover",
  data() {
    return {
      visible: false
    };
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
    }
  },

  methods: {
    getPos() {
      let wrapper = this.$refs.triggerWrapper;
      let { top, left, height } = wrapper.getBoundingClientRect();
      let width = wrapper.children[0].offsetWidth;
      this.$refs.plain.style.left = left + width / 2 + window.scrollX + "px";
      this.$refs.plain.style.top = top - height / 2 + window.scrollY + "px";
      document.body.appendChild(this.$refs.plain);
    },
    onClickDoc(e) {
      if (!this.$refs.triggerWrapper.contains(e.target) || !this.$refs.popover)
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
.plain {
  min-width: 150px;
  position: absolute;
  z-index: 2000;
  transform: translate(-50%, -100%);
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 18px 20px;
  margin-bottom: 12px;
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
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
  }
}
</style>