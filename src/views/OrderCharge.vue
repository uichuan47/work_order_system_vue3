<script setup lang="ts">
import {reactive, ref} from 'vue'
import {ElNotification, FormInstance} from 'element-plus'
import _axios from "@/plugins/axois.js";
const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  money: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      _axios.post("/api/charge/",numberValidateForm).then((res) =>{
        if(res.data.code === 100)
        {
          ElNotification({
            title: '充值成功',
            message: `充值成功，余额为${res.data.data.balance}`,
            type: 'success',
          })
        }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })

}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div>
    <el-card>
      <h3>充值中心</h3>
      <div class="charge_area">
        <div style="margin-bottom: 10px;margin-left: 15px">氪金多多，收益多多</div>
        <el-card style="box-shadow: none">
          <div class="charge_button_row">
            <el-form
                ref="formRef"
                style="max-width: 600px"
                :model="numberValidateForm"
                label-width="auto"
                class="demo-ruleForm"
            >
              <el-form-item
                  label="充值金额"
                  prop="money"
                  :rules="[
        { required: true, message: '充值金额不能为空' },
        { type: 'number', message: '充值金额必须是数字' },
      ]"
              >
                <el-input
                    v-model.number="numberValidateForm.money"
                    type="text"
                    autocomplete="off"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(formRef)">充值</el-button>
                <el-button @click="resetForm(formRef)">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="show_balance"></div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<style scoped>

</style>