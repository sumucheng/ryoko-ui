<script>
export default {
  name: "r-timeline",
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  render(createElement) {
    let slots = this.$slots.default || [];
    if (this.reverse) slots = slots.reverse();
    return createElement("ul", { class: "r-timeline" }, slots);
    // return (<ul class="r-timeline"> { slots} </ul>);
  }
};
</script>