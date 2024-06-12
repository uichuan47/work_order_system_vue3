<script setup>
import {ref, onMounted} from "vue";
import _axios from "@/plugins/axois.js";
import router from "@/router/index.js";

const DataList = ref(['xx', 'xxx', 'xxxxx'])
const test_authentication = ref("")
const form = ref({
  username: "wupeiqi",
  password: "wycwyc1234"
})
onMounted(function () {
  // DataList.value = [123,345,456]
  _axios.post("/api/demo/", form.value).then((res) => {
    test_authentication.value = res.data.detail
    // console.log(res.data)
    if(res.data.code === '-1')
    {
      router.push({name:"login"})
    }
  })
})

//基于axios 发送请求
</script>

<template>
  <div>
    <div>进行测试，结果   {{test_authentication}}</div>
    <ul>
      <li v-for="item in DataList">{{ item }}</li>
    </ul>
  </div>
  <div>
    <router-link to="/course/course1">course1</router-link>
    <router-link to="/course/course2">course2</router-link>
  </div>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>