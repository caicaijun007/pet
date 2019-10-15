import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let shopcar = localStorage.getItem("shopcar") ? JSON.parse(localStorage.getItem("shopcar")) : []

export default new Vuex.Store({
    state: {
        shopcar
    },
    mutations: {
        // 加入购物车
        addToCar(state, goodsinfo) {
            let flag = false
            state.shopcar.some(item => {
                if (item.cate_id == goodsinfo.cate_id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.shopcar.push(goodsinfo)
            }

            localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
        },
        // 更新商品信息
        updateGoodsInfo(state, goodsinfo) {
            state.shopcar.some(item => {
                if (item.cate_id == goodsinfo.cate_id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })

            localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
        },
        // 从购物车中删除商品
        removeFromCar(state, cate_id) {
            state.shopcar.some((item, i) => {
                if (item.cate_id == cate_id) {
                    state.shopcar.splice(i, 1)
                    return true
                }
            })

            localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
        },
        // 切换商品选购状态
        updateGoodsSeleted(state, info) {
            state.shopcar.some(item => {
                if (item.cate_id == info.cate_id) {
                    item.seleted = info.seleted
                }
            })

            localStorage.setItem("shopcar", JSON.stringify(state.shopcar))
        }
    },
    getters: {
        // 获取所有商品总数
        getAllCount(state) {
            let count = 0
            state.shopcar.forEach(item => {
                count += item.count
            })
            return count
        },
        // 获取商品总数
        getGoodsCount(state) {
            let count = {}
            state.shopcar.forEach(item => {
                count[item.cate_id] = item.count
            })
            return count
        },
        // 获取商品选购状态
        getGoodsSeleted(state) {
            let seleted = {}
            state.shopcar.forEach(item => {
                seleted[item.cate_id] = item.seleted
            })
            return seleted
        },
        // 获取商品总数、总价格
        getGoodsCountAndAmount(state) {
            let all = {
                count: 0,
                amount: 0
            }
            state.shopcar.forEach(item => {
                if (item.seleted) {
                    all.count += item.count
                    all.amount += item.price * item.count
                }
            })

            return all
        }
    },
    actions: {},
    modules: {}
})
