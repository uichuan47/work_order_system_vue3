import {ref, computed, compile} from 'vue'
import {defineStore} from 'pinia'

export const UserInfoStore = defineStore('UserInfo', () => {

    //state
    const userString = ref(localStorage.getItem("info"))
    const userDict = computed(() => userString.value ? JSON.parse(userString.value) : null)
    const userId = computed(() => userDict.value ? userDict.value.id : null)
    const userName = computed(() => userDict.value ? userDict.value.name : null)
    const userToken = computed(() => userDict.value ? userDict.value.token : null)
    //getter
    //action
    function doLogin(info) {
        localStorage.setItem("info",JSON.stringify(info))
        userString.value = JSON.stringify(info)
    }
    function doLogout(){
        localStorage.clear()
        userString.value = null
    }
    return {userName,userToken,userId,doLogin,doLogout}
})
