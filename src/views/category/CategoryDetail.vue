<template>
  <div class="category_detail">
    <!-- swiper -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :galleryList="galleryList"></Swiper>
        </div>
      </div>
    </div>
    <!-- shopcar -->
    <div class="mui-card">
      <div class="mui-card-header">{{detail.name}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <span class="now-price">￥{{detail.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <NumBox
              type="addToCar"
              :initNum="selectedCount"
              :cate_id="detail.cate_id"
              :max="detail.stock_quantity"
              @getCount="getSelectedCount"
            ></NumBox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- detail -->
    <div class="mui-card">
      <div class="mui-card-header">基本参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>分类编号：{{detail.cate_no}}</p>
          <p>库存情况：{{detail.stock_quantity}}只</p>
          <p>上架时间：{{detail.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="getDesc(detail.cate_id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="getComment(detail.cate_id)">相关评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../../components/Swiper";
import NumBox from "../../components/NumBox";
import Request from "../../utils/request";
import { Toast } from "mint-ui";
export default {
  name: "CategoryDetail",
  data: function() {
    return {
      cate_id: this.$route.params.cate_id,
      selectedCount: 1,
      detail: [],
      galleryList: []
    };
  },
  methods: {
    getDetail(cate_id) {
      Request.axios({
        url: "category/detail",
        data: {
          params: { cate_id }
        }
      }).then(result => {
        if (result.code === 0) {
          this.detail = result.detail[0];
          this.galleryList = result.galleryList;
        }
      });
    },
    addToShopcar() {
      let shopInfo = {
        cate_id: this.cate_id,
        count: this.selectedCount,
        price: this.detail.sell_price.split("-")[0],
        seleted: true
      };

      this.$store.commit("addToCar", shopInfo);
      if (
        localStorage.getItem("shopcar") &&
        JSON.parse(localStorage.getItem("shopcar")).length > 0
      ) {
        Toast("已添加到购物车");
      }
    },
    getSelectedCount(count) {
      this.selectedCount = count;
    },
    getDesc(cate_id) {
      this.$router.push({ name: "category_info", params: { cate_id } });
    },
    getComment(cate_id) {
      this.$router.push({ name: "category_comment", params: { cate_id } });
    }
  },
  components: {
    Swiper,
    NumBox
  },
  created() {
    this.getDetail(this.cate_id);
  }
};
</script>

<style lang="less" scoped>
.category_detail {
  margin-top: 40px;
  background-color: #eee;
  overflow: hidden;
  margin-bottom: 50px;
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
}
</style>