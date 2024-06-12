import axios from "axios";
import {UserInfoStore} from "@/stores/counter.js";

let config = {
    baseURL:"http://localhost:8000",
    // timeout:20
}
const _axios = axios.create(config)
_axios.interceptors.request.use(function (config){
    console.log("请求前")
    // 去pinia中读取用户token
    const infoStore = UserInfoStore()
    if(infoStore.userToken)
    {
        if(config.params){
            config.params['token'] = infoStore.userToken
        }else{
            config.params = {token:infoStore.userToken}
        }
    }
    // 发送请求时携带token
    return config;
})

export default _axios;