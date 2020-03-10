export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/index',
        name: 'index',
        meta: { title: '' },
        component: () => import('../views/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/settauthentication',
        name: 'settauthentication',
        meta: { title: '实名认证' },
        component: () => import('../views/settAuthentication/settauthentication.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        meta: { title: '设置' },
        component: () => import('../views/settAuthentication/setting.vue')
    },
    {
        path: '/topteacher',
        name: 'topteacher',
        meta: { title: '名师推荐' },
        component: () => import('../views/topTeacher/topteacher.vue')
    },
    {
        path: '/news',
        name: 'news',
        meta: { title: '消息' },
        component: () => import('../views/news/news.vue')
    },
    {
        path: '/newsdetail',
        name: 'newsdetail',
        meta: { title: '消息详情' },
        component: () => import('../views/news/newsdetail.vue')
    },
]
// test测试