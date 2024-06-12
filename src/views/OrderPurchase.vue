<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {ElMessageBox, ElNotification} from 'element-plus'
import {UserInfoStore} from "@/stores/counter.js";
import {reactive} from 'vue'
import {MoreFilled} from '@element-plus/icons-vue'
import _axios from "@/plugins/axois.js";

onMounted(function () {
  console.log(store.userId)
})
const store = UserInfoStore()
const activities = [

  {
    content: '选择数据产品',
    timestamp: 'step1',
    color: '#0bbd87',
  },
  {
    content: '充值氪金',
    timestamp: 'step2',
    size: 'large',
  },
  {
    content: '下单数据产品',
    timestamp: 'step2',
    size: 'large',
  },
  {
    content: '得到数据',
    timestamp: 'step3',
    type: 'primary',
    hollow: true,
  },
]


// do not use same name with ref
const form = reactive({
  // category: '',
  weibo_id: '',
  // spider_name: '新浪微博',
  item_number: '',
  cost: '',
  user: store.userId
})




const onSubmit = () => {
  ElNotification({
    title: '系统通知',
    message: "数据采集开始，请耐心等待",
    type: 'info',
  })
  form.cost = form.item_number
  _axios.post("/api/order_purchase/", form).then((res) => {
    if (res.data.code === 200) {
      ElNotification({
        title: '采集成功',
        message: `订单号为${res.data.data.OrderNumber}，余额为${res.data.balance}`,
        type: 'success',
      })

    } else {

    }
  })
}
</script>

<template>
  <div>
    <el-card style="box-shadow: none">
      <h3>数据产品下单</h3>
      <el-divider></el-divider>
      <el-timeline style="max-width: 600px">
        <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :hollow="activity.hollow"
            :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
      <el-divider></el-divider>
      <div class="order_form">
        <div style="margin-bottom: 20px">单价：每条数据¥1</div>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <el-form-item label="数据源">
            <el-checkbox>新浪微博</el-checkbox>
          </el-form-item>
          <el-form-item label="新浪微博id:">
            <el-input v-model="form.weibo_id"/>
          </el-form-item>
          <el-form-item label="采集数量:">
            <el-input v-model="form.item_number"/>
          </el-form-item>
          <el-form-item label="价格:">
            <div>[{{ form.item_number }}] * 1 = {{ form.item_number }}元</div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>

</template>

<style scoped>
.order_form {
  margin-top: 30px;
  margin-left: 30px;
}
</style>