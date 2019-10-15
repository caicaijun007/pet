<template>
  <div class="cmt">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入评论内容（最多120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list" v-for="(item, i) in comments" :key="i">
      <div class="cmt-item">
        <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间：{{item.time}}</div>
        <div
          class="cmt-body"
        >{{(item.content === 'undefind' || item.content === '') ? '用户没评论' : item.content}}</div>
      </div>
    </div>
    <mt-button v-show="end" type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Request from "../utils/request";
import Utils from "../utils/utils";
export default {
  name: "Comment",
  data: function() {
    return {
      page: 1,
      end: false,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      Request.axios({
        url: "category/comments",
        data: {
          params: {
            no: this.id,
            page: this.page,
            page_size: 6,
            type: this.type
          }
        }
      }).then(result => {
        if (result.code === 0) {
          this.comments = this.comments.concat(result.comments);
          this.end = result.end;
        } else {
          Toast("获取评论失败！");
        }
      });
    },
    getMore() {
      this.page++;
      this.getComments();
    },
    postComment() {
      let _this = this;
      if (_this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
      Request.axios({
        url: "category/comments",
        method: "POST",
        data: {
          params: {
            no: _this.id,
            user: "匿名用户",
            time: Date.now(),
            content: _this.msg.trim(),
            type: _this.type
          }
        }
      }).then(function(result) {
        if (result.code === 0) {
          let cmt = {
            user: "匿名用户",
            time: Utils.dateFormate(Date.now()),
            content: _this.msg.trim()
          };
          _this.comments.unshift(cmt);
          _this.msg = "";
        }
      });
    }
  },
  props: ["id", "type"]
};
</script>

<style lang="less" scoped>
.cmt {
  margin-bottom: 60px;
  h3 {
    text-align: center;
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
