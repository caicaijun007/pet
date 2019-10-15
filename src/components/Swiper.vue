<template>
  <div id="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in galleryList" :key="item.id">
        <a href="#" v-if="item.url" @click.prevent="goDetail(item.cate_id)">
          <img :src="item.img_src" />
        </a>
        <img v-else :src="item.img_src" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    galleryList: {
      type: Array,
      default() {
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
#swiper {
  .mint-swipe {
    height: 240px;
    .mint-swipe-items-wrap {
      .mint-swipe-item {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
