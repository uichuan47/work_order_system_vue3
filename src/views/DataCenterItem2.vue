<script lang="ts" setup>
import {onMounted, reactive, ref} from 'vue'
import {ElNotification, FormInstance, FormRules} from 'element-plus'
import _axios from "@/plugins/axois.js";

const ruleFormRef = ref<FormInstance>()


const ruleForm = reactive({
  OrderNumber: '',

})
const state = reactive({
  tableData: ""
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      _axios.post('/api/get_data/', ruleForm).then((res) => {
        // console.log(res)
        console.log(ruleForm.OrderNumber)
        if (res.data.code === 100) {
          state.tableData = res.data.data

          ElNotification({
            title: '数据获取成功',
            message: '数据采集结果获取成功',
            type: 'success',
          })
          // console.log(state.tableData)
        }

      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}


onMounted(function () {

  _axios.get('/api/order_list/').then((res) => {

    if (res.data.code === 200) {
      // console.log(res.data)
      // ElNotification({
      //   title: '数据获取成功',
      //   message: '订单数据获取成功',
      //   type: 'success',
      // })
      // state.tableData = res.data.data
    } else {
      ElNotification({
        title: '数据获取失败',
        message: '订单数据获取失败',
        type: 'error',
      })
    }
  })
})

function doDownload() {
  console.log("download")
  _axios.get(`/api/file_download/?OrderNumber=${ruleForm.OrderNumber}`, {responseType: 'blob'}).then(response => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv'); // 设置下载文件的文件名
    document.body.appendChild(link);
    link.click();
    console.log("File download successful");
  })
}

const generateData = (
    columns: ReturnType<typeof generateColumns>,
    length = 200,
    prefix = 'row-'
) =>
    Array.from({ length }).map((_, rowIndex) => {
      return columns.reduce(
          (rowData, column, columnIndex) => {
            rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
            return rowData
          },
          {
            id: `${prefix}${rowIndex}`,
            parentId: null,
          }
      )
    })

const columns = [
  {key:"content",dataKey:"content",title:"内容",width:200,fixed:true},
  {key:"video_url",dataKey:"video_url",title:"视频url",width:200,fixed:true},
  {key:"publish_time",dataKey:"publish_time",title:"发布时间",width:200,fixed:true},
  {key:"publish_tool",dataKey:"publish_tool",title:"发布平台",width:200,fixed:true},
  {key:"up_num",dataKey:"up_num",title:"点赞数",width:200,fixed:true},
  {key:"retweet_num",dataKey:"retweet_num",title:"转发数",width:200,fixed:true},
  {key:"comment_num",dataKey:"comment_num",title:"评论数",width:200,fixed:true},
]
const data = state.tableData

</script>

<template>
  <div>
    <el-card>
      <div>
        <el-form
            ref="ruleFormRef"
            style="max-width: 600px"
            :model="ruleForm"
            status-icon
            label-width="auto"
            class="demo-ruleForm"
        >
          <el-form-item label="微博id" prop="ordernumber" style="margin-left: 30px">
            <el-input v-model="ruleForm.OrderNumber" type="text" autocomplete="off"/>
          </el-form-item>

          <el-form-item style="margin-left: 540px">
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div style="float: right">
        <el-button type="primary" @click="doDownload">download</el-button>
      </div>
      <div class="data_table">
        <el-table :data="state.tableData" style="width: 100%">
          <el-table-column prop="content" label="内容" width="180"/>
          <el-table-column prop="video_url" label="视频url" width="180"/>
          <el-table-column prop="publish_time" label="发布时间"/>
          <el-table-column prop="publish_tool" label="发布平台"/>
          <el-table-column prop="up_num" label="点赞数"/>
          <el-table-column prop="retweet_num" label="转发数"/>
          <el-table-column prop="comment_num" label="评论数"/>
        </el-table>
      </div>
<!--      <div class="vitual_table">-->
<!--        <el-table-v2-->
<!--            :columns="columns"-->
<!--            :data="data"-->
<!--            :width="1400"-->
<!--            :height="400"-->
<!--            fixed-->
<!--        />-->
<!--      </div>-->
    </el-card>

  </div>
</template>


<style scoped>
.vitual_table{
  margin-left: 40px;
}
.data_table {
  margin-left: 30px;
  margin-top: 30px;
}
</style>