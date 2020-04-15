<template>
  <div class="toast" :class="type">
    <Icon :name="type" />
    <div class="text">{{text}}</div>
    <div class="close" v-if="showClose" @click="close">×</div>
  </div>
</template>

<script>
import Icon from "./icon";

export default {
  name: "toast",
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    },
    duration: {
      type: Number,
      default: 2
    },
    showClose: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function
    }
  },
  methods: {
    close() {
      this.onClose && this.onClose();
      this.$el.remove();
      this.$destroy();
    }
  },
  mounted() {
    if (this.duration !== 0) {
      setTimeout(() => {
        this.close();
      }, this.duration * 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: #e5efff;
  border: 1px solid #85b3ff;
  border-radius: 4px;
  font-size: 14px;
  color: #5f5f5f;
  letter-spacing: 0;
  padding: 8px;
  display: flex;
  align-items: center;
  &.success {
    background: #f2fbed;
    border: 1px solid #a9e18e;
    .icon {
      fill: #52c41a;
    }
  }
  &.warning {
    background: #fff7e5;
    border: 1px solid #ffd87d;
    .icon {
      fill: #ffb300;
    }
  }
  &.error {
    background: #fff2f0;
    border: 1px solid #faab9f;
    .icon {
      fill: #f5573e;
    }
  }
  &.default {
    .icon {
      fill: #136bff;
    }
  }
  .close {
    padding-left: 15px;
    cursor: pointer;
  }
}
</style>