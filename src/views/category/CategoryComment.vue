<template>
  <div class="category_comment">
    <!-- comment -->
    <Comment :id="$route.params.cate_id" :type="1"></Comment>
  </div>
</template>

<script>
import Comment from "../../components/Comment";
export default {
  name: "CategoryComment",
  components: {
    Comment
  }
};
</script>

<style lang="less" scoped>
.category_comment {
  margin-top: 50px;
}
</style>