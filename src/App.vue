<template>
  <div class="common-layout">

      <div class="pg-header">
        <div class="container">
          <RouterLink to="/">主页</RouterLink>
          <RouterLink to="/about">数据采集简介</RouterLink>
          <RouterLink to="/order" v-if="store.userName">我的订单</RouterLink>
          <RouterLink to="/data_center" v-if="store.userName">数据中心</RouterLink>
          <div style="float: right">
            <div v-if="!store.userName">
              <RouterLink to="/register">注册</RouterLink>
              <RouterLink to="/login">登陆</RouterLink>
            </div>

            <el-popover
                placement="top-start"
                title="Welcome～"
                :width="220"
                trigger="hover"
                content="欢迎您登陆nb的数据采集平台"
            >
              <template #reference>
                <a>{{ store.userName }}</a>
              </template>
            </el-popover>

            <a @click="doLogout" v-if="store.userName">退出登陆</a>
          </div>
        </div>
      </div>
      <RouterView/>
      <!--      <div class="container"></div>-->
<!--      <el-footer style="height: 100px">Footer</el-footer>-->

  </div>



</template>

<style>
body {
  margin: 0;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.pg-header {
  height: 70px;
  line-height: 70px;
  background-color: #909399;
  //border-bottom: 1px solid #f5f5f5;
  font-size: 16px;
}

.pg-header a {
  display: inline-block;
  color: #e9e9eb;
  text-decoration: none;
  padding: 0 10px;
}

.pg-header a:hover {
  color: white;
}
</style>
<script setup>
import {ref} from 'vue'
import {UserInfoStore} from "@/stores/counter.js";
import {useRouter} from "vue-router";
import img1 from "../assets/home_page_img/pic1.jpg"
const router = useRouter()
const store = UserInfoStore()
console.log(store.userName)

function doLogout() {
  store.doLogout()
  router.push({path: "/login"})

}


</script>