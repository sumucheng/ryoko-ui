<template>
  <div>
    <div class="box">
      <r-button type="default">朴素按钮</r-button>
      <r-button type="primary">主要按钮</r-button>
      <r-button type="danger">危险按钮</r-button>
    </div>
    <div class="box">
      <r-button type="default" disabled>朴素按钮</r-button>
      <r-button type="primary" disabled>主要按钮</r-button>
      <r-button type="danger" disabled>危险按钮</r-button>
    </div>
    <div class="box">
      <r-button size="large">大型按钮</r-button>
      <r-button size="middle">默认按钮</r-button>
      <r-button size="small">小型按钮</r-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "r-button": Button
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  > * {
    margin: 10px;
  }
}
</style>

