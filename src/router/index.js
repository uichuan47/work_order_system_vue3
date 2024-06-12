import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {UserInfoStore} from "@/stores/counter.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('../views/Logout.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('../views/OrderView.vue'),
            children:
            [
                {
                    path: '',
                    redirect: {name: "order_user_info"}
                },
                {
                    path: 'order_user_info',
                    name: 'order_user_info',
                    component: () => import('../views/OrderUserInfo.vue')
                },
                {
                    path: 'order_data',
                    name: 'order_data',
                    component: () => import('../views/OrderData.vue')
                },
                {
                    path: 'order_charge',
                    name: 'order_charge',
                    component: () => import('../views/OrderCharge.vue')
                },
                {
                    path: 'order_purchase',
                    name: 'order_purchase',
                    component: () => import('../views/OrderPurchase.vue')
                },
            ]
        },
        {
            path: '/data_center',
            name: 'data_center',
            component: () => import('../views/DataCenterView.vue'),
            children:
            [
                {
                    path: '',
                    redirect: {name: "data_item1"}
                },
                {
                    path: 'data_item1',
                    name: 'data_item1',
                    component: () => import('../views/DataCenterItem1.vue')
                },
                {
                    path: 'data_item2',
                    name: 'data_item2',
                    component: () => import('../views/DataCenterItem2.vue')
                },
                {
                    path: 'data_visual',
                    name: 'data_visual',
                    component: () => import('../views/DataCenterVisual.vue')
                },

            ]
        },
        {
            path: '/course',
            name: 'course',
            component: () => import('../views/CourseView.vue'),

            children:
                [
                    {
                        path: '',
                        redirect: {name: "course1"}
                    },
                    {
                        path: 'course1',
                        name: 'course1',
                        component: () => import('../views/Course1View.vue')
                    },
                    {
                        path: 'course2',
                        name: 'course2',
                        component: () => import('../views/Course2View.vue')
                    }
                ]
        }
    ]
})
router.beforeEach((to, from, next) => {
    // 检查用户的登陆状态
    if (to.name === "login") {
        next()
        return
    }
    if(to.name === "home"){
        next()
        return
    }
    if(to.name === "about"){
        next()
        return
    }
    if(to.name === "register"){
        next()
        return
    }
    let username = localStorage.getItem("name")
    // 设置导航守卫
    const store = UserInfoStore()
    if (!store.userId) {
        next({name: "login"})
    }
    next()


})
export default router
