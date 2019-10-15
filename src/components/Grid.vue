<template>
  <div id="grid">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li
        class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"
        v-for="item in bannerList"
        :key="item.id"
      >
        <a href="#" @click.prevent="goDetail(item.cate_id)">
          <img :src="item.img_src" />
          <div class="mui-media-body">{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    bannerList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    goDetail(cate_id) {
      this.$router.push({
        name: "category_info",
        params: { cate_id }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#grid {
  border-bottom: 10px solid #eee;
  .mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
    img {
      width: 70px;
      height: 70px;
    }
    .mui-media-body {
      font-size: 14px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }
}
</style>
