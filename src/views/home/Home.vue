<template>
  <div id="home">
    <Swiper class="swiper" :galleryList="galleryList" />
    <Grid :bannerList="bannerList" />
    <div class="recommend">
      <div class="recommend-item" v-for="item in recommendList" :key="item.id">
        <a href="#" @click.prevent="goDetail(item.cate_id)">
          <img :src="item.img_src" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../../components/Swiper";
import Grid from "../../components/Grid";
import Request from "../../utils/request";
export default {
  name: "Home",
  data: function() {
    return {
      galleryList: [],
      bannerList: [],
      recommendList: []
    };
  },
  components: {
    Swiper,
    Grid
  },
  methods: {
    goDetail(cate_id) {
      this.$router.push({
        name: "category_info",
        params: { cate_id }
      });
    }
  },
  created() {
    Request.axios({
      url: "home/data_list",
      data: {
        params: {}
      }
    }).then(result => {
      if (result.code === 0) {
        this.galleryList = result.gallery;
        this.bannerList = result.banner;
        this.recommendList = result.recommend;
      }
    });
  }
};
</script>

<style lang='less' scoped>
#home {
  .swiper {
    margin-top: 40px;
  }
  .recommend {
    width: 100%;
    margin-bottom: 50px;
    .recommend-item {
      padding: 6px 8px;
      a {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>