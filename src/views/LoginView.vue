<template>

  <div class="box">
    <h3>用户登陆</h3>
    <!--    <p>-->
    <!--      <input type="text" placeholder="username" v-model="form.username">-->
    <!--    </p>-->
    <!--    <p>-->
    <!--      <input type="password" placeholder="password" v-model="form.password">-->
    <!--    </p>-->
    <!--    <button @click="doLogin">Login</button>-->


    <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        status-icon
        label-width="auto"
        class="demo-ruleForm"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model.number="form.username"/>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input v-model="form.password" type="password" autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="doLogin"
        >Submit
        </el-button
        >
        <span style="color: red">{{ error }}</span>
      </el-form-item>
    </el-form>
  </div>
  <el-footer>
    <el-divider></el-divider>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 南京工业大学 经济与管理学院 信息管理与信息系统. All Rights Reserved.</p>
        <ul class="footer-links">
          <li>
            <RouterLink to="/">主页</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">关于我们</RouterLink>
          </li>
          <li><a href="https://uichuan47.github.io/library/">关于作者 kento</a></li>
        </ul>
      </div>
    </footer>
  </el-footer>
</template>
<script setup lang="ts">
import {reactive, ref} from 'vue'
import {useRouter} from "vue-router";
import {UserInfoStore} from "@/stores/counter.js";
import _axios from "@/plugins/axois.js";
import type {FormInstance, FormRules} from 'element-plus'
import {ElNotification} from 'element-plus'

const store = UserInfoStore()
const router = useRouter()
const form = ref({
  username: "",
  password: ""
})
const error = ref("")

function doLogin() {
  _axios.post("/api/auth/", form.value).then((res) => {
    console.log(res.data)
    if (res.data.code === 0) {
      store.doLogin(res.data.data)
      router.push({name: "home"})
      ElNotification({
        title: '登陆成功',
        message: '登陆成功，跳转到首页',
        type: 'success',
      })
    } else {
      // error.value = res.data.msg
      // setTimeout(function () {
      //       error.value = ""
      //     },
      //     5000)
      ElNotification({
        title: '登陆失败',
        message: '用户名或密码错误',
        type: 'error',
      })
    }
  })
}

</script>
<style scoped>
.box {
  width: 300px;
  margin: 100px auto;
  margin-bottom: 310px;
}

.footer {
  background-color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer p {
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.footer-links li {
  display: inline;
  margin-right: 10px;
}

.footer-links li a {
  color: #333;
  text-decoration: none;
}
</style>