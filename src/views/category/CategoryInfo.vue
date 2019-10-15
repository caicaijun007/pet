<template>
  <div class="category_info">
    <!-- info -->
    <h3>{{detail.name}}</h3>
    <hr />
    <div class="content" v-html="detail.content"></div>
    <img :src="detail.img_src" alt />
  </div>
</template>

<script>
import Request from "../../utils/request";
export default {
  name: "CategoryInfo",
  data: function() {
    return {
      detail: []
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
        }
      });
    }
  },
  components: {},
  created() {
    this.getDetail(this.$route.params.cate_id);
  }
};
</script>

<style lang="less" scoped>
.category_info {
  margin-top: 50px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content {
    text-indent: 2em;
    padding: 8px;
  }
  img {
    margin-bottom: 50px;
    width: 100vw;
    padding: 8px;
  }
}
</style>