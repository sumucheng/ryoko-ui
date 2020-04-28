<script>
export default {
  name: "r-timeline",
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  render() {
    let slot = this.$slots.default || [];
    if (this.reverse) slot = slot.reverse();
    return <ul class="r-timeline">{slot}</ul>;
  }
};
</script>