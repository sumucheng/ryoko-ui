<template>
  <transition>
    <div class="toast" :class="type" v-show="visible">
      <Icon :name="type" />
      <div class="text">{{text}}</div>
      <div class="close" v-if="showClose" @click="close">
        <Icon name="close" />
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from "./icon";

export default {
  name: "toast",
  data() {
    return {
      visible: true
    };
  },
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
      this.visible = false;
      this.onClose && this.onClose();
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 2000);
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
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%) translateX(-50%);
  }
}

.toast {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  animation: slide-down 500ms;
  background: #e5efff;
  border: 1px solid #85b3ff;
  border-radius: 4px;
  font-size: 14px;
  color: #5f5f5f;
  letter-spacing: 0;
  padding: 10px 8px;
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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      fill: #888;
      width: 0.65em;
      height: 0.65em;
      &:hover {
        fill: #136bff;
      }
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateY(0%) translateX(-50%);
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-100%) translateX(-50%);
}
</style>