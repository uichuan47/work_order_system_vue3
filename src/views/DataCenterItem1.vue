<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>个人订单内容</span>
      </div>
      <div class="order_table" style="margin-top: 30px">
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
    </template>


  </el-card>
</template>

<style scoped>

</style>

<script setup lang="ts">
import _axios from "@/plugins/axois.js";
import {ElNotification} from 'element-plus'
import {onMounted, ref, reactive} from 'vue'

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