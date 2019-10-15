import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const CategoryDetail = () => import('../views/category/CategoryDetail')
const CategoryInfo = () => import('../views/category/CategoryInfo')
const CategoryComment = () => import('../views/category/CategoryComment')
const Shopcar = () => import('../views/shopcar/Shopcar')
const Profile = () => import('../views/profile/Profile')
const ProfileMessage = () => import('../views/profile/ProfileMessage')
const ProfileIntegral = () => import('../views/profile/ProfileIntegral')
const ProfileVip = () => import('../views/profile/ProfileVip')
const ProfileDownload = () => import('../views/profile/ProfileDownload')
const Login = () => import('../views/profile/Login')

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/category/category_detail/:cate_id',
        component: CategoryDetail,
        name: 'category_detail'
    },
    {
        path: '/category/category_info/:cate_id',
        component: CategoryInfo,
        name: 'category_info'
    },
    {
        path: '/category/category_comment/:cate_id',
        component: CategoryComment,
        name: 'category_comment'
    },
    {
        path: '/shopcar',
        component: Shopcar
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/profile/profile_message/:uid',
        component: ProfileMessage,
        name: 'profile_message'
    },
    {
        path: '/profile/profile_integral/:uid',
        component: ProfileIntegral,
        name: 'profile_integral'
    },
    {
        path: '/profile/profile_vip/:uid',
        component: ProfileVip,
        name: 'profile_vip'
    },
    {
        path: '/profile/profile_download/:uid',
        component: ProfileDownload,
        name: 'profile_download'
    },
    {
        path: '/login',
        component: Login
    }
]

export default new Router({
    linkActiveClass: 'mui-active',
    mode: 'history',
    routes
})