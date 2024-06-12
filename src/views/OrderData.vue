<script setup lang="ts">
import _axios from "@/plugins/axois.js";
import {ElNotification} from 'element-plus'
import {onMounted, ref, reactive, readonly} from 'vue'

const state = reactive({
  tableData: ""
})
onMounted(function () {
  _axios.get('/api/order_list/').then((res) => {

    if (res.data.code === 200) {
      // console.log(res.data)
      ElNotification({
        title: '数据获取成功',
        message: '订单数据获取成功',
        type: 'success',
      })
      state.tableData = res.data.data
    } else {
      ElNotification({
        title: '数据获取失败',
        message: '订单数据获取失败',
        type: 'error',
      })
    }
  })
})


// console.log(state.tableData)


</script>

<template>
  <el-card>
    <div><h4>订单信息</h4></div>
    <div class="order_table">
      <el-table :data="state.tableData" style="width: 100%">
        <el-table-column prop="user_name" label="用户名" width="180"/>
        <el-table-column prop="OrderNumber" label="订单号" width="180"/>
        <el-table-column prop="category" label="采集内容"/>
        <el-table-column prop="weibo_id" label="微博id"/>
        <el-table-column prop="cost" label="订单花费"/>
        <el-table-column prop="item_number" label="数据量"/>
        <el-table-column prop="create_time" label="订单时间"/>
      </el-table>
    </div>

    <div class="order_table">

    </div>
  </el-card>

</template>

<style scoped>
.order_table {
  margin: 20px;
  height: calc(100vh-300px);
}
</style>