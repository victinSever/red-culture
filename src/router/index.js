import Vue from 'vue'
import VueRouter from 'vue-router'

// 登陆
import login from '@/views/login/login.vue'
import register from '@/views/login/register.vue'
import home from '@/views/other/home.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: login,
        meta: {
            title: "登陆"
        }
    },
    {
        path: '/register',
        component: register,
        meta: {
            title: "管理员注册"
        }
    },
    {
        path: '/home',
        component: home,
        name: 'home',
        meta: {
            title: "重庆数字化红色文化移动课堂"
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

//为路由对象加上导航守卫
router.beforeEach((to, from, next) => {
    //设置标题
    document.title = to.meta.title;

    // // 普通拦截
    // if (to.path === '/login' || to.path === '/register') {
    //     next()
    // } else {
    //     //从sessionStorage获取token
    //     const tokenStr = window.sessionStorage.getItem('token');
    //     if (!tokenStr) {
    //         next('/login')
    //     } else {
    //         next()
    //     }
    // }
    next()
})

export default router