## 宠物商城

### 学习Vue全家桶
项目涉及知识点：vue、vue-router、vuex、axios、es6、less、mint-ui、mui、php、mysql

#### 1、全局安装vue-cli3.0脚手架工具
```cmd
# npm install -g @vue/cli
```

#### 2、使用vue-cli脚手架创建vue项目
```cmd
# vue create pets
```
选择配置Babel、ESlint、Less，其它用到再手动安装，避免脚手架创建项目时生成额外的文件或配置

#### 3、目录结构划分
- assets   				资源目录
- components		   基础组件、公共组件
- configs		               配置文件
- router			     路由
- store				     store
- utils			               公共方法
- views			             业务逻辑页面

#### 4、引入mui和安装mint-ui
```cmd
# npm i mint-ui --save
```
```js
// main.js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'

Vue.use(MintUI)
```
#### 5、安装vue-router、vuex和axios
```cmd
# npm i vue-router vuex axios --save
```
安装完再把router、store基本使用写好
```js
// router/index.js
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcar = () => import('../views/shopcar/Shopcar')
const Profile = () => import('../views/profile/Profile')

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
        path: '/shopcar',
        component: Shopcar
    },
    {
        path: '/profile',
        component: Profile
    }
]
    
export default new Router({
    linkActiveClass: 'mui-active',
    mode: 'history',
    routes
})

//store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	getters:{},
	actions:{},
	modules:{}
})

//utils/request.js
```
#### 6、默认样式处理
定义常用样式
```css
default.less
@colorE: #fff;
...
@fontA: 12px;
...
@px2: 2px;
...
```
默认样式处理
```css
@import './default.less';
body {
    margin: 0;
    padding: 0;
    font-family: Microsoft YaHei", "微软雅黑";
}
a {
    color: @colorA;
    text-decoration: none;
}
ul,li {
    list-style: none;
}
/* 清除浮动*/
.clearfix {
    zoom: 1;
    &::after{
        clear: both;
        content: ' ';
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
    }
}
```

#### 7、使用mui、vue-router实现TabBar功能
涉及到vue-router的router-link、to属性的使用

#### 8、使用mint-ui、实现NavBar功能
涉及vue的props父组件向子组件传值、slot插槽、v-bind值绑定、v-show、v-on事件监听、$router.go(-1)返回

#### 9、APP主页实现
引入TabBar、NavBar组件
涉及到vue-router的router-view和keep-alive的exclude属性的使用



