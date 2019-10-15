<template>
  <div id="category">
    <!-- 分类 -->
    <div class="category-scroll">
      <div
        class="category-scroll-item"
        v-for="item in category_type"
        :key="item.id"
        :class="{active: item.cate_id === cate_type}"
      >
        <span @click="handleClick(item.cate_id)">{{item.cate_name}}</span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="category-list">
      <div
        class="category-list-item"
        v-for="item in category_list[cate_type].data"
        :key="item.id"
        @click="goDetail(item.cate_id)"
      >
        <img :src="item.img_src" alt />
        <h1 class="name">{{item.name}}</h1>
        <div class="info">
          <p class="price">
            <span>￥{{item.sell_price}}</span>
          </p>
          <p class="sell">
            <span>{{item.stock_quantity > 10 ? '劲爆热卖' : '正在热卖'}}</span>
            <span>库存{{item.stock_quantity}}只</span>
          </p>
        </div>
      </div>
      <mt-button
        v-show="category_list[cate_type].end"
        type="danger"
        size="large"
        @click="getMore"
      >加载更多</mt-button>
    </div>
    <div class="no-more" v-show="!category_list[cate_type].end">没有更多</div>
  </div>
</template>

<script>
import Request from "../../utils/request";
export default {
  name: "Category",
  data: function() {
    return {
      cate_type: "P1001",
      category_type: [],
      category_list: {
        P1001: {
          page: 0,
          end: true,
          data: []
        },
        P1002: {
          page: 0,
          end: true,
          data: []
        },
        P1003: {
          page: 0,
          end: true,
          data: []
        },
        P1004: {
          page: 0,
          end: true,
          data: []
        },
        P1005: {
          page: 0,
          end: true,
          data: []
        }
      }
    };
  },
  methods: {
    handleClick(index) {
      this.cate_type = index;
    },
    getData(cate_type, page = 1, page_size = 6, cate = 0) {
      Request.axios({
        url: "category/data_list",
        data: {
          params: {
            cate,
            page,
            page_size,
            cate_type
          }
        }
      }).then(result => {
        if (result.code === 0) {
          let list = this.category_list[cate_type];
          if (result.category_type) {
            this.category_type = result.category_type;
          }
          list.page = parseInt(result.page);
          list.end = result.end;
          list.data = list.data.concat(result.category_list);
        }
      });
    },
    goDetail(cate_id) {
      this.$router.push({ name: "category_detail", params: { cate_id } });
    },
    getMore() {
      let page = (this.category_list[this.cate_type].page += 1);
      this.getData(this.cate_type, page);
    }
  },
  created() {
    this.getData(this.cate_type, 1, 6, 1);
    this.getData("P1002");
    this.getData("P1003");
    this.getData("P1004");
    this.getData("P1005");
  }
};
</script>

<style lang='less' scoped>
#category {
  margin-top: 80px;
  .category-scroll {
    position: fixed;
    left: 0;
    right: 0;
    top: 40px;
    z-index: 9;
    display: flex;
    text-align: center;
    background-color: #fff;
    .category-scroll-item {
      flex: 1;
      padding: 10px;
    }
    .active {
      color: #00b7ff;
    }
  }
  .category-list {
    display: flex;
    flex-wrap: wrap;
    padding: 6px;
    justify-content: space-between;
    margin-bottom: 60px;
    .category-list-item {
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      width: 49%;
      margin: 4px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        width: 100%;
        max-height: 106px;
      }
    }
    .name {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0px;
        padding: 4px;
      }
      .price {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
  .no-more {
    font-size: 14px;
    color: #aaa;
    text-align: center;
    position: relative;
    left: 0;
    right: 0;
    bottom: 60px;
  }
}
</style>