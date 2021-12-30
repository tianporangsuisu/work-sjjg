<template>
  <div>
    <header>历史记录</header>
    <p/>
    <div>
      <el-table
          :data="tableData"
          height="250"
          border
          style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="routes"
            label="路线">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result"
}
</script>

<style scoped>

</style>