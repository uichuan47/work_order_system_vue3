

<template>
  <div class="common-layout">
    <el-container class="main">
      <el-aside width="250px">

        <!--        <router-link to="/data_center/data_item1">data_item1</router-link>-->
        <!--        <router-link to="/data_center/data_item2">data_item2</router-link>-->
        <el-menu :router="true" default-active="">
          <el-menu-item :route="{name:'order_user_info'}" index="order_user_info">
            <template #title>
              <el-icon><House /></el-icon>
              <span>个人信息</span>
            </template>
          </el-menu-item>
          <el-menu-item :route="{name:'order_data'}" index="order_data">
            <template #title>
              <el-icon><Discount /></el-icon>
              <span>订单信息</span>
            </template>
          </el-menu-item>
          <el-menu-item :route="{name:'order_purchase'}" index="order_purchase">
            <template #title>
              <el-icon><MessageBox /></el-icon>
              <span>下单中心</span>
            </template>
          </el-menu-item>
          <el-menu-item :route="{name:'order_charge'}" index="order_charge">
            <template #title>
              <el-icon><location /></el-icon>
              <span>充值中心</span>
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
<script setup>

import {Location,House,MessageBox,Discount} from "@element-plus/icons-vue";

</script>