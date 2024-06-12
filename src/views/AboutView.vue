<template>
  <div class="container">
    <p><a href='https://badge.fury.io/py/weibo-spider'><img src="https://github.com/dataabc/weiboSpider/workflows/Python%20application/badge.svg" referrerpolicy="no-referrer" alt="Build Status"></a>
      <a href='https://badge.fury.io/py/weibo-spider'><img src="https://img.shields.io/pypi/pyversions/weibo-spider" referrerpolicy="no-referrer" alt="Python"></a>
      <a href='https://badge.fury.io/py/weibo-spider'><img src="https://badge.fury.io/py/weibo-spider.svg" referrerpolicy="no-referrer" alt="PyPI"></a></p>
    <h1 id='weibo-spider'>Weibo Spider</h1>
    <p>本程序可以连续爬取<strong>一个</strong>或<strong>多个</strong>新浪微博用户的数据，并将结果信息写入<strong>文件</strong>或<strong>数据库</strong>。写入信息几乎包括用户微博的所有数据，包括<strong>用户信息</strong>和<strong>微博信息</strong>两大类。</p>
    <p>爬取结果可写入文件和数据库，具体的写入文件类型如下：</p>
    <ul>
      <li><strong>txt文件</strong>（默认）</li>
      <li><strong>csv文件</strong>（默认）</li>
      <li><strong>json文件</strong>（可选）</li>
      <li><strong>MySQL数据库</strong>（可选）</li>
      <li><strong>MongoDB数据库</strong>（可选）</li>
      <li><strong>SQLite数据库</strong>（可选）</li>

    </ul>
    <p>&nbsp;</p>
    <h3 id='用户信息'>用户信息</h3>
    <ul>
      <li>用户id：微博用户id，如&quot;1669879400&quot;，其实这个字段本来就是已知字段</li>
      <li>昵称：用户昵称，如&quot;Dear-迪丽热巴&quot;</li>
      <li>性别：微博用户性别</li>
      <li>生日：用户出生日期</li>
      <li>所在地：用户所在地</li>
      <li>学习经历：用户上学时学校的名字和时间</li>
      <li>工作经历：用户所属公司名字和时间</li>
      <li>阳光信用（免cookie版）：用户的阳光信用</li>
      <li>微博注册时间（免cookie版）：用户微博注册日期</li>
      <li>微博数：用户的全部微博数（转发微博+原创微博）</li>
      <li>关注数：用户关注的微博数量</li>
      <li>粉丝数：用户的粉丝数</li>
      <li>简介：用户简介</li>
      <li>主页地址（免cookie版）：微博移动版主页url</li>
      <li>头像url（免cookie版）：用户头像url</li>
      <li>高清头像url（免cookie版）：用户高清头像url</li>
      <li>微博等级（免cookie版）：用户微博等级</li>
      <li>会员等级（免cookie版）：微博会员用户等级，普通用户该等级为0</li>
      <li>是否认证（免cookie版）：用户是否认证，为布尔类型</li>
      <li>认证类型（免cookie版）：用户认证类型，如个人认证、企业认证、政府认证等</li>
      <li>认证信息：为认证用户特有，用户信息栏显示的认证信息</li>

    </ul>
    <h3 id='微博信息'>微博信息</h3>
    <ul>
      <li>微博id：微博唯一标志</li>
      <li>微博内容：微博正文</li>
      <li>头条文章url：微博中头条文章的url，若微博中不存在头条文章，则值为&#39;&#39;</li>
      <li>原始图片url：原创微博图片和转发微博转发理由中图片的url，若某条微博存在多张图片，每个url以英文逗号分隔，若没有图片则值为&quot;无&quot;</li>
      <li>视频url: 微博中的视频url，若微博中没有视频，则值为&quot;无&quot;</li>
      <li>微博发布位置：位置微博中的发布位置</li>
      <li>微博发布时间：微博发布时的时间，精确到分</li>
      <li>点赞数：微博被赞的数量</li>
      <li>转发数：微博被转发的数量</li>
      <li>评论数：微博被评论的数量</li>
      <li>微博发布工具：微博的发布工具，如iPhone客户端、HUAWEI Mate 20 Pro等</li>
      <li>结果文件：保存在当前目录weibo文件夹下以用户昵称为名的文件夹里，名字为&quot;user_id.csv&quot;和&quot;user_id.txt&quot;的形式</li>
      <li>微博图片：原创微博中的图片和转发微博转发理由中的图片，保存在以用户昵称为名的文件夹下的img文件夹里</li>
      <li>微博视频：原创微博中的视频，保存在以用户昵称为名的文件夹下的video文件夹里</li>
      <li>微博bid（免cookie版）：为<a href='https://github.com/dataabc/weibo-crawler'>免cookie版</a>所特有，与本程序中的微博id是同一个值</li>
      <li>话题（免cookie版）：微博话题，即两个#中的内容，若存在多个话题，每个url以英文逗号分隔，若没有则值为&#39;&#39;</li>
      <li>@用户（免cookie版）：微博@的用户，若存在多个@用户，每个url以英文逗号分隔，若没有则值为&#39;&#39;</li>
      <li>原始微博（免cookie版）：为转发微博所特有，是转发微博中那条被转发的微博，存储为字典形式，包含了上述微博信息中的所有内容，如微博id、微博内容等等</li>

    </ul>

  </div>
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
</template>


<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()
</script>

<style>
.container{
  width: 1200px;
  margin: 0 auto;
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