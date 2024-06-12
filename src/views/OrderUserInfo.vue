<template>
  <el-card>
    <!--    {{ store.userName }}-->
    <!--    <div>用户id是 {{id}}</div>-->
    <!--    <div>电子邮箱是{{email}}</div>-->

    <div><h4>用户信息</h4></div>
    <div class="basic_info">
      <el-avatar :size="50" :src="state.circleUrl"/>
      <div>欢迎 {{ store.userName }} 登陆</div>
    </div>
    <div class="detail_info">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="info" label="" width="200"/>
        <el-table-column prop="value" label=""/>

      </el-table>
    </div>
  </el-card>
</template>

<style scoped>
.basic_info {
  display: flex;
  flex-direction: row;
  margin-left: 80px;
  margin-top: 50px;
}

.basic_info div {
  margin: auto 20px;
}

.detail_info {
  margin-top: 40px;
  margin-left: 50px;
  margin-bottom: 70px;
}
</style>


<script setup lang="ts">
import {onMounted, ref, reactive} from 'vue'
import {UserInfoStore} from "@/stores/counter.js";
import _axios from "@/plugins/axois.js";
import {useTransition} from '@vueuse/core'
import {ChatLineRound, Male} from '@element-plus/icons-vue'

const store = UserInfoStore()
// let data = ref("")
let id = ref("")
let phone = ref("")
let username = ref("")
let balance = ref("")
let email = ref("")
onMounted(function () {
  _axios.get('/api/userinfo/').then((res) => {
    console.log(res.data)
    username.value = res.data.data.username
    balance.value = res.data.data.balance
    email.value = res.data.data.email
    id.value = res.data.data.id
    phone.value = res.data.data.phone
    console.log(username)
    console.log(id)
  })
})

const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

console.log("test")
console.log(username.value)
console.log(phone.value)
const tableData = [
  {
    info: '用户名',
    value: username,
  },
  {
    info: '电子邮箱',
    value: email,
  },
  {
    info: '账户余额',
    value: balance,
  },
  {
    info: 'user_id',
    value: id,
  },


]
</script>