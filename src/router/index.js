import Vue from 'vue'
import VueRouter from 'vue-router'

// 登陆
import login from '@/views/login/login.vue'
import register from '@/views/login/register.vue'

// 主页模块和组织模块
import home from '@/views/other/home.vue'
import manage from '@/views/other/manage.vue'

// 资源模块

// 红色文化
import redPerson from '@/views/function/redPerson'
import redPersonHome from '@/views/function/redPerson/views/home.vue'
import redPersonSimple from '@/views/function/redPerson/views/simpleList.vue'
import redPersonDetail from '@/views/function/redPerson/views/detail.vue'

// 红色诗抄
import redPoem from '@/views/function/redPoem'
import redPoemHome from '@/views/function/redPoem/views/home.vue'
import redPoemSimple from '@/views/function/redPoem/views/simpleList.vue'
import redPoemDetail from '@/views/function/redPoem/views/detail.vue'

// 红色歌曲
import redMusic from '@/views/function/redMusic'
import redMusicHome from '@/views/function/redMusic/views/home.vue'
import redMusicSimple from '@/views/function/redMusic/views/simpleList.vue'
import redMusicDetail from '@/views/function/redMusic/views/detail.vue'

// 红色文物
import redGoods from '@/views/function/redGoods'
import redGoodsHome from '@/views/function/redGoods/views/home.vue'
import redGoodsSimple from '@/views/function/redGoods/views/simpleList.vue'
import redGoodsDetail from '@/views/function/redGoods/views/detail.vue'

// 更多模块

//收集创意
import collection from '@/views/more/collection'
import coHome from '@/views/more/collection/views/coHome.vue'


import cultureProduction from '@/views/more/cultureProduction.vue'
import communication from '@/views/more/communication.vue'


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
    },
    {
        path: '/manage',
        component: manage,
        name: 'manage',
        redirect: '/manage/redPerson',
        meta: {
            title: ""
        },
        children: [{
                path: 'redPerson',
                component: redPerson,
                name: 'redPerson',
                meta: {
                    title: "红色人物"
                },
                redirect: '/manage/redPerson/redPersonHome',
                children: [{
                    path: 'redPersonHome',
                    component: redPersonHome,
                    name: 'redPersonHome',
                    meta: {
                        title: "红色人物"
                    },
                }, {
                    path: 'redPersonSimple',
                    component: redPersonSimple,
                    name: 'redPersonSimple',
                    meta: {
                        title: "红色人物"
                    },
                }, {
                    path: 'redPersonDetail',
                    component: redPersonDetail,
                    name: 'redPersonDetail',
                    meta: {
                        title: "红色人物"
                    },
                }]
            }, {
                path: 'redPoem',
                component: redPoem,
                name: 'redPoem',
                meta: {
                    title: "红色诗抄"
                },
                redirect: '/manage/redPoem/redPoemHome',
                children: [{
                    path: 'redPoemHome',
                    component: redPoemHome,
                    name: 'redPoemHome',
                    meta: {
                        title: "红色诗抄"
                    },
                }, {
                    path: 'redPoemSimple',
                    component: redPoemSimple,
                    name: 'redPoemSimple',
                    meta: {
                        title: "红色诗抄"
                    },
                }, {
                    path: 'redPoemDetail',
                    component: redPoemDetail,
                    name: 'redPoemDetail',
                    meta: {
                        title: "红色诗抄"
                    },
                }]
            }, {
                path: 'redMusic',
                component: redMusic,
                name: 'redMusic',
                meta: {
                    title: "红色歌曲"
                },
                redirect: '/manage/redMusic/redMusicHome',
                children: [{
                    path: 'redMusicHome',
                    component: redMusicHome,
                    name: 'redMusicHome',
                    meta: {
                        title: "红色歌曲"
                    },
                }, {
                    path: 'redMusicSimple',
                    component: redMusicSimple,
                    name: 'redMusicSimple',
                    meta: {
                        title: "红色歌曲"
                    },
                }, {
                    path: 'redMusicDetail',
                    component: redMusicDetail,
                    name: 'redMusicDetail',
                    meta: {
                        title: "红色歌曲"
                    },
                }]
            }, {
                path: 'redGoods',
                component: redGoods,
                name: 'redGoods',
                meta: {
                    title: "红色文物"
                },
                redirect: '/manage/redGoods/redGoodsHome',
                children: [{
                    path: 'redGoodsHome',
                    component: redGoodsHome,
                    name: 'redGoodsHome',
                    meta: {
                        title: "红色文物"
                    },
                }, {
                    path: 'redGoodsSimple',
                    component: redGoodsSimple,
                    name: 'redGoodsSimple',
                    meta: {
                        title: "红色文物"
                    },
                }, {
                    path: 'redGoodsDetail',
                    component: redGoodsDetail,
                    name: 'redGoodsDetail',
                    meta: {
                        title: "红色文物"
                    },
                }]
            },


        ]
    },
    {
        path: '/collection',
        component: collection,
        name: 'collection',
        meta: {
            title: "创意收集"
        },
        redirect: '/collection/coHome',
        children: [{
            path: 'coHome',
            component: coHome,
            name: 'coHome',
            meta: {
                title: "创意收集"
            },
        }]
    }, {
        path: '/cultureProduction',
        component: cultureProduction,
        name: 'cultureProduction',
        meta: {
            title: "文创产品"
        }
    }, {
        path: '/communication',
        component: communication,
        name: 'communication',
        meta: {
            title: "互动留言"
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