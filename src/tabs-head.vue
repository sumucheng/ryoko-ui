<template>
  <div class="wrapper" :class="type">
    <div class="tabs-head" :class="type">
      <slot></slot>
      <div class="scrollLine" ref="scrollLine" v-if="type==='line'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "r-tabs-head",
  inject: ["eventBus", "type"],
  mounted() {
    // this.eventBus.$on("posChange", (pos, name) => {
    //   if (this.$refs.scrollLine) {
    //      this.$refs.scrollLine.style.height = "";
    //     this.$refs.scrollLine.style.width = "";
    //      if (pos === "top" || pos === "bottom") {
    //       this.$refs.scrollLine.style.height = "";
    //      } else {
    //        this.$refs.scrollLine.style.width = "";
    //     }
    //   }
    // });
    this.eventBus.$on("update:selected", (name, vm) => {
      // let pos = vm.$parent.$options.parent.position;
      // if (pos === "top" || pos === "bottom") {
      let width = vm.$el.getBoundingClientRect().width;
      let transform = vm.$el.offsetLeft;
      // width = vm.$el.previousElementSibling ? width - 40 : width - 20;
      // transform = vm.$el.previousElementSibling ? transform + 20 : transform;
      if (this.$refs.scrollLine) {
        this.$refs.scrollLine.style.height = "";
        this.$refs.scrollLine.style.width = `${width}px`;
        this.$refs.scrollLine.style.transform = `translateX(${transform}px)`;
      }
      // else {
      //   let transform = vm.$el.offsetTop;
      //   let height = vm.$el.getBoundingClientRect().height;
      //   if (this.$refs.scrollLine) {
      //     this.$refs.scrollLine.style.width = "";
      //     this.$refs.scrollLine.style.height = `${height}px`;
      //     this.$refs.scrollLine.style.transform = `translateY(${transform}px)`;
      //   }
      // }
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  &.card {
    border-bottom: 1px solid #e4e7ed;
    background: #f9fafb;
    margin: 0;
  }
}

.tabs-head {
  display: flex;
  position: relative;
  &.line {
    margin-bottom: 20px;
  }
  &.card {
    overflow: hidden;
    margin-bottom: -1px;
  }
  .scrollLine {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: #136bff;
    z-index: 2;
    width: 2px;
    height: 2px;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &.line:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #e9e9e9;
    z-index: 1;
  }
}
.left.line {
  .wrapper {
    float: left;
    margin-right: 10px;
    .tabs-head {
      flex-direction: column;
      .tabs-tab {
        height: 40px;
      }
      .scrollLine {
        top: 0;
        bottom: auto;
        width: 2px;
      }
      .scrollLine:after {
        height: 100%;
        width: 2px;
        bottom: auto;
        top: 0;
        left: auto;
        right: 0;
      }
    }
  }
}
.right.line {
  .wrapper {
    float: right;
    margin-left: 10px;
    .tabs-head {
      flex-direction: column;
      .tabs-tab {
        height: 40px;
      }
      .scrollLine {
        top: 0;
        bottom: auto;
        width: 2px;
        left: auto;
        right: 0;
        transform: translateY(0px);
        height: 40px;
      }
      .scrollLine:after {
        left: 0;
        right: auto;
      }
    }
  }
}
</style>