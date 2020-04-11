<template>
  <div class="demo-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 24px;
  color: #222;
  letter-spacing: 0;
  font-weight: normal;
  margin: 16px 0;
}
table {
  width: 100%;
  display: table;
  background-color: #fff;
}
th {
  text-align: left;
  color: #909399;
  font-weight: normal;
}
thead > tr {
  border-top: 0;
  > th {
    border-top: 0;
  }
}
td {
  color: #606266;
}
td,
th {
  background: #fff;
  border-left: 0;
  border-right: 0;
  padding: 15px;
}
.item {
  margin-bottom: 40px;
  .text {
    font-size: 15px;
    color: #444;
  }
}
.code {
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  margin: 0;
  > code {
    color: #3182bd;
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
    > .row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      > * {
        margin-right: 25px;
      }
    }
  }
}
</style>