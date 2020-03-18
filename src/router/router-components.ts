export default [
    {
        path: '/',
        redirect: '/login'
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
    {
        path: '/creditsexchange',
        name: 'creditsexchange',
        meta: { title: '消息详情' },
        component: () => import('../views/creditsexchange/creditsexchange.vue')
    },
    {
        path: '/forcomplete',
        name: 'forcomplete',
        meta: { title: '兑换完成' },
        component: () => import('../views/creditsexchange/forcomplete.vue')
    },
    {
        path: '/conversion',
        name: 'conversion',
        meta: { title: '兑换内容' },
        component: () => import('../views/creditsexchange/conversion.vue')
    },
    {
        path: '/confirmchange',
        name: 'confirmchange',
        meta: { title: '兑换内容' },
        component: () => import('../views/creditsexchange/confirmchange.vue')
    },
    {
        path: '/personaldata',
        name: 'personaldata',
        meta: { title: '个人资料' },
        component: () => import('../views/my/personaldata.vue')
    },
    {
        path: '/nickname',
        name: 'nickname',
        meta: { title: '昵称' },
        component: () => import('../views/my/nickname.vue')
    },
    {
        path: '/personalIntroductor',
        name: 'personalIntroductor',
        meta: { title: '个人简介' },
        component: () => import('../views/my/personalIntroductor.vue')
    },
    {
        path: '/changecourse',
        name: 'changecourse',
        meta: { title: '已兑换成功课程' },
        component: () => import('../views/convertedcourse/changecourse.vue')
    },
    {
        path: '/tabBar',
        name: 'tabBar',
        meta: { title: '首页' },
        component: () => import('../views/components/tabBar.vue')
    },
    {
        path: '/indexcontent',
        name: 'indexcontent',
        meta: { title: '首页' },
        component: () => import('../views/tabcontent/indexcontent.vue')
    },
    {
        path: '/checkmore',
        name: 'checkmore',
        meta: { title: '查看更按钮' },
        component: () => import('../components/buttom-compontens/checkmore.vue')
    },
    {
        path: '/recommendvideo',
        name: 'recommendvideo',
        meta: { title: '视频推荐' },
        component: () => import('../views/components/recommendvideo.vue')
    },
    {
        path: '/recommendnotes',
        name: 'recommendnotes',
        meta: { title: '视频推荐' },
        component: () => import('../views/components/recommendnotes.vue')
    },
    {
        path: '/recommendedteacher',
        name: 'recommendedteacher',
        meta: { title: '视频推荐' },
        component: () => import('../views/components/recommendedteacher.vue')
    },
]