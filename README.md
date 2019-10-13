## 宠物商城

### 学习Vue全家桶
项目涉及知识点：vue、vue-router、vuex、axios、es6、less、mint-ui、mui、php、mysql

作品展示：

![pet](https://github.com/caicaijun007/xiaocaicai07.github.io/blob/master/pet.gif)



#### 1、全局安装vue-cli3.0脚手架工具
```cmd
# npm install -g @vue/cli
```

#### 2、使用vue-cli脚手架创建vue项目
```cmd
# vue create pet
```
选择配置Babel、ESlint、Less，其它用到再手动安装，避免脚手架创建项目时生成额外的文件或配置

#### 3、目录结构划分
- assets			资源目录
- components	       基础组件、公共组件
- configs			 配置文件
- router			路由
- store				store
- utils				 公共方法
- views			        业务逻辑页面

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

#### 7、封装TabBar组件
- router-link、to属性的使用

#### 8、封装NavBar组件
- props父组件向子组件传值、slot插槽、v-bind值绑定、v-show、v-on事件监听
- $router.go(-1)返回

#### 9、APP主页
- 导入TabBar、NavBar组件
- router-view和keep-alive的exclude属性的使用

#### 10、封装Swiper组件
- v-if、v-else、v-for、v-bind值绑定、v-on事件监听
- 事件修饰符prevent、props父组件向子组件传值
- this.$router.push({name: '', params:{}})

#### 11、封装Grid组件
- v-for、v-bind值绑定、v-on事件监听、事件修饰符prevent
- Mustache语法{{}}、props父组件向子组件传值
- this.$router.push({name: '', params:{}})

#### 12、Home主页
- 导入Swiper、Grid组件
- 导入封装的Request异步请求方法
- 在created生命周期函数一次性请求所有数据
- 父组件向之组件传值使用v-bind值绑定
- 详情页跳转this.$router.push({name: '', params:{}})

#### 13、Category分类
- 导入封装的Request异步请求方法
- axios请求data数据方法传递参数为分类ID、当前页数、每页总条数、分类数组
- 在created生命周期函数一次性请求所有数据
- v-for、v-bind值绑定、v-on事件监听、绑定class属性值、v-show、Mustache语法{{}}
- 获取路由参数this.$route.params.参数名

#### 14、封装NumBox组件
- v-bind值绑定、v-on事件监听、ref属性值
- props父组件向子组件传值、$emit('方法名',  参数)子组件向父组件传值
- store的state保存shopcar；mutations定义加入购物车保存状态方法、更新购物车状态发方法
- 商品数目改变调用$store.commit('方法名', 参数)
- 获取input输入框当前value值this.$refs.numBox.value
- 定义商品数目增加或减少方法；判断最大值、最小值

#### 15、封装Comment组件
- v-for、v-bind值绑定、v-on事件监听、Mustache语法{{}}、v-model双向数据绑定
- 导入封装的Request异步请求方法；get方法获取评论；post发表评论；注意this指向问题
- 导入公共方法Utilts.dateFormate()时间格式化方法
- props父组件向子组件传值

#### 16、Shopcar购物车
- v-for、:src属性值绑定、@change事件监听、@click.prevent事件修饰符
- Mustache语法{{}}、v-model双向数据绑定
- 获取购物车状态$store.state.shopcar
- 从购物车中删除商品、切换商品选购状态调用$store.commit('方法名', 参数)
- 获取store里定义的计算属性$store.getters

#### 17、Profile我的
- v-for、:src属性值绑定、@click事件监听、@click.prevent事件修饰符、Mustache语法{{}}

- this.$router.push("路由地址")

- this.$router.push({ name: '', params: { } })

  
