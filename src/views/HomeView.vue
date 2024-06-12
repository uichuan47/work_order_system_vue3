<template>
  <!--  <p>欢迎{{ store.userName ? store.userName : "not login" }}进入</p>-->

  <div class="container">
    <div class="nb">
      <p>简单便捷的数据采集服务</p>
    </div>

    <div>
      <el-carousel :interval="4000" type="card" height="400px" autoplay>
        <el-carousel-item v-for="item in img_urls" :key="item">
          <el-image :src="item.url" lazy/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="title2"><p>数据采集样例</p></div>
    <el-divider></el-divider>
    <div class="cards">
      <div class="card">
        <el-card style="width: 280px;height: 450px">
          <template #header>微博明星数据采集</template>
          <img
              src="/Users/kento/Documents/graduation/project/vue_codes/vue01/assets/home_page_img/weibo.png"
              style="width: 100%"
          />
          <el-divider content-position="left"></el-divider>
          <div>
            <ul>
              <li>选择目标明星</li>
              <li>海量数据获取</li>
              <li>获取点赞，评论，转发等数据</li>
            </ul>
          </div>
          <el-button plain @click="dialogTableVisible1 = true">
            数据模板展示
          </el-button>
          <el-dialog v-model="dialogTableVisible1" title="数据模板展示" width="1400">
            <el-table :data="gridData1">
              <el-table-column property="content" label="内容" width="350"/>
              <el-table-column property="time" label="时间" width="200"/>
              <el-table-column property="up" label="点赞数"/>
              <el-table-column property="forword" label="转载"/>
              <el-table-column property="comment" label="评论"/>
            </el-table>
          </el-dialog>
        </el-card>

      </div>

      <div class="card">
        <el-card style="width: 280px;height: 450px">
          <template #header>微博新闻采集</template>
          <img
              src="/Users/kento/Documents/graduation/project/vue_codes/vue01/assets/home_page_img/news.png"
              style="width: 100%"
          />
          <el-divider content-position="left"></el-divider>
          <div>
            <ul>
              <li>海量新闻获取</li>
              <li>选择合适的新闻平台</li>
              <li>获取点赞，评论，转发等数据</li>
            </ul>
          </div>
          <el-button plain @click="dialogTableVisible2 = true">
            数据模板展示
          </el-button>
          <el-dialog v-model="dialogTableVisible2" title="数据模板展示" width="1400">
            <el-table :data="gridData2">
              <el-table-column property="content" label="内容" width="350"/>
              <el-table-column property="time" label="时间" width="200"/>
              <el-table-column property="up" label="点赞数"/>
              <el-table-column property="forword" label="转载"/>
              <el-table-column property="comment" label="评论"/>
            </el-table>
          </el-dialog>
        </el-card>
      </div>
      <div class="card">
        <el-card style="width: 280px;height: 450px">
          <template #header>更多数据采集产品...</template>
          <img
              src="/Users/kento/Documents/graduation/project/vue_codes/vue01/assets/home_page_img/pic1.jpg"
              style="width: 100%"
          />
          <el-divider content-position="left"></el-divider>
          敬请期待
        </el-card>
      </div>
    </div>
  </div>
  <el-footer>
    <el-divider></el-divider>
    <div>
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
    </div>
  </el-footer>

</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import {UserInfoStore} from "@/stores/counter.js";
import img1 from "../../assets/home_page_img/pic1.jpg"
import img2 from "../../assets/home_page_img/pic2.jpg"
import img3 from "../../assets/home_page_img/pic3.jpg"

const store = UserInfoStore()

const img_urls = ref([
  {'url': img1},
  {'url': img2},
  {'url': img3},
])

const dialogTableVisible1 = ref(false)
const dialogTableVisible2 = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const gridData1 = [
  {
    content: '[置顶]复活节的两场I AM GLORIA合肥站，圆满落幕！新曲目、新道具、新舞美、新舞台装置、新乐队成员⋯',
    time: '2024-04-02 12:52',
    up: '58782',
    forword: '64713',
    comment: '34322',
  },
  {
    content: '合肥, 长沙, 佛山, 天津,大连, 太原, 上海, 成都,青岛, 南京, 郑州, 福州,哈尔滨, 台州, 呼和浩特…',
    time: '2024-03-12 12:00',
    up: '69059',
    forword: '82421',
    comment: '41307',
  },
  {
    content: '《Amazing Grace》现已全网上线🤍🙏🏻这是我在2024的第一个焕新作品。',
    time: '2024-02-24 12:00',
    up: '49872',
    forword: '67168',
    comment: '33065',
  },
  {
    content: '#邓紫棋IAMGLORIA世界巡回演唱会##邓紫棋合肥站官宣加场##邓紫棋长沙佛山天津站官宣#',
    time: '2024-02-24 12:00',
    up: '49872',
    forword: '64713',
    comment: '34322',
  },
  {
    content: 'Merry Christmas!!!这个圣诞在南宁连开两场演唱会，与8万人一起度过🥳请收下我专门为大家准备的20米高圣诞树',
    time: '2023-12-25 16:17',
    up: '96173',
    forword: '92426',
    comment: '45966',
  },
  {
    content: '我准备好撼动世界了！I AM GLORIA！完整观影，只在巡演现场！Only available on I AM GLORIA WORLD TOUR！#邓紫棋',
    time: '2024-04-02 12:52',
    up: '58782',
    forword: '64713',
    comment: '34322',
  },

]

const gridData2 = [
  {
    content: '【#神十八发射场区全系统合练#】#神十八近日将择机发射#神舟十八号载人飞船计划将于近日择机发射',
    time: '2024-04-02 12:52',
    up: '58782',
    forword: '64713',
    comment: '34322',
  },
  {
    content: '【#建230个吃瓜群发谣言给境外网站引流#】#在吃瓜群扫个码到黄赌网站了#近日，上海警方破获一起利用谣言为境外网站引流的案件。',
    time: '2024-03-12 12:00',
    up: '69059',
    forword: '82421',
    comment: '41307',
  },
  {
    content: '【#周冠宇头盔含沪量好高#】#周冠宇说国旗一直是我的动力#今天15时，中国首位F1车手@车手周冠宇 ，将在家乡上海参加F1中国大奖赛正赛。',
    time: '2024-02-24 12:00',
    up: '49872',
    forword: '67168',
    comment: '33065',
  },
  {
    content: '【#广西一厂房房顶被强风撕碎#】#广西多地雷暴大风冰雹#4月19日白天至20日早上，广西部分地区出现暴雨到大暴雨天气，多地出现雷暴、大风、冰雹等天气。',
    time: '2024-02-24 12:00',
    up: '49872',
    forword: '64713',
    comment: '34322',
  },
  {
    content: '【#珠江流域北江将有特大洪水#】总台记者从水利部了解到，受近日强降雨影响，珠江流域北江出现明显洪水过程，4月20日20时45分，北江发生2024年第2号洪水。',
    time: '2023-12-25 16:17',
    up: '96173',
    forword: '92426',
    comment: '45966',
  },
  {
    content: '【直播！#山谷间4000亩杜鹃花海宛如粉色云霞#】这两天，辽宁本溪的老边沟风景区内，#漫山遍野的杜鹃花绚烂了整个春天#，像给山谷涂上胭脂。',
    time: '2024-04-02 12:52',
    up: '58782',
    forword: '64713',
    comment: '34322',
  },

]
</script>

<style>
.title2 {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 40px;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.nb {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 40px;
}

.cards {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.card {
  margin-left: 70px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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