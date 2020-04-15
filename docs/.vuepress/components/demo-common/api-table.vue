<template>
  <div class="apis">
    <h3>{{name}}</h3>
    <table>
      <thead>
        <tr>
          <th v-for="header in apis.header" :key="header">{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="api in apis.body" :key="api[0]">
          <td v-for="(item,index) in api" :key="index">{{item}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "API"
    },
    apis: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.apis {
  margin-bottom: 30px;
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
}
</style>