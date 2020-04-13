<template>
  <div class="demo-container">
    <slot></slot>
  </div>
</template>

<script>
import Row from ".../../../src/row";
export default {
  components: {
    "r-row": Row
  }
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 24px;
  color: #222;
  letter-spacing: 0;
  font-weight: normal;
  margin: 16px 0;
}

.item {
  margin-bottom: 40px;
}

> ul {
  font-size: 15px;
  color: #444;
  padding-left: 0;
  > li {
    margin: 0;
  }
}
.useRule {
  > ul {
    padding-left: 0;
    font-size: 15px;
    color: #444;
    > li::before {
      content: "\02022";
      color: #0161fb;
      margin-right: 8px;
    }
  }
}

.container {
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 14px 0;
  .box {
    padding: 24px;
    background: #fff;
    margin-top: 12px;
  }
}
</style>