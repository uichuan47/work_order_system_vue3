<template>
  <div class="common-layout">
    <el-container class="main">
      <el-aside width="250px">

<!--        <router-link to="/data_center/data_item1">data_item1</router-link>-->
<!--        <router-link to="/data_center/data_item2">data_item2</router-link>-->
        <el-menu :router="true" default-active="activeRouter">
          <el-menu-item :route="{name:'data_item1'}" index="data_item1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>个人订单</span>
            </template>
          </el-menu-item>
          <el-menu-item :route="{name:'data_item2'}" index="data_item2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>数据中心</span>
            </template>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main class="body">

        <RouterView/>
      </el-main>
    </el-container>
  </div>
</template>


<style scoped>
.body{
  background-color: #f4f4f5;
}
.common-layout {
}

.main {
  height: calc(100vh - 70px);
  //width: 1800px;
  //margin: 0 auto;
}
</style>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {useRoute, useRouter} from "vue-router";
const router = useRouter()
const route = useRoute()


// const activeRouter = route.name
</script>