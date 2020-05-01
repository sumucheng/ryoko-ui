<template>
  <div class="r-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "r-collapse",
  data() {
    return {
      eventBus: new Vue(),
      selectedArray: []
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String | Array
    }
  },
  mounted() {
    if (typeof this.selected === "string") this.selectedArray = [this.selected];
    else this.selectedArray = this.accordion ? this.selected[0] : this.selected;
    this.eventBus.$emit("update:selected", this.selectedArray);

    this.eventBus.$on("update:addSelected", name => {
      if (this.accordion) this.selectedArray = [name];
      else this.selectedArray.push(name);
      this.eventBus.$emit("update:selected", this.selectedArray); // 通知子组件修改
      this.$emit("update:selected", this.selectedArray);
    });

    this.eventBus.$on("update:removeSelected", name => {
      let index = this.selectedArray.indexOf(name);
      this.selectedArray && this.selectedArray.splice(index, 1);
      this.eventBus.$emit("update:selected", this.selectedArray);
      this.$emit("update:selected", this.selectedArray);
    });
  }
};
</script>

<style lang="scss" scoped>
.r-collapse {
  border-top: 1px solid #f3f3f8;
  border-bottom: 1px solid #f3f3f8;
}
</style>