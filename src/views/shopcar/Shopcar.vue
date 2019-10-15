<template>
  <div id="shopcar">
    <!-- goods-list -->
    <div class="goods-list">
      <div class="mui-card" v-for="(item, i) in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSeleted[item.cate_id]"
              @change="seletedChange(item.cate_id, $store.getters.getGoodsSeleted[item.cate_id])"
            ></mt-switch>
            <img :src="item.img_src" />
            <div class="info">
              <h3>{{item.name}}</h3>
              <p>
                <span class="price">￥{{item.sell_price.split('-')[0]}}</span>
                <NumBox
                  type="shopCar"
                  :initNum="$store.getters.getGoodsCount[item.cate_id]"
                  :cate_id="item.cate_id"
                  :max="item.stock_quantity"
                />
                <a href="#" @click.prevent="remove(item.cate_id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- account -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner account">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品：
              <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 只，总价：
              <span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumBox from "../../components/NumBox";
import Request from "../../utils/request";
export default {
  name: "Shopcar",
  data() {
    return {
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      let ids = [];
      this.$store.state.shopcar.forEach(item => ids.push(item.cate_id));
      if (ids.length <= 0) {
        return;
      } else {
        ids = ids.join(",");
      }

      Request.axios({
        url: "category/goods_list",
        data: {
          params: { ids }
        }
      }).then(result => {
        if (result.code === 0) {
          this.goodsList = result.goodsList;
        }
      });
    },
    remove(cate_id, index) {
      this.goodsList.splice(index, 1);
      this.$store.commit("removeFromCar", cate_id);
    },
    seletedChange(cate_id, seleted) {
      this.$store.commit("updateGoodsSeleted", {
        cate_id,
        seleted
      });
    }
  },
  components: {
    NumBox
  }
};
</script>

<style lang="less" scoped>
#shopcar {
  margin-top: 40px;
  margin-bottom: 50px;
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 80px;
      height: 60px;
    }
    h3 {
      font-size: 14px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: blod;
      }
    }
  }
  .account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: blod;
      font-size: 16px;
    }
  }
}
</style>