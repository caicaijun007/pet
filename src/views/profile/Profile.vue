<template>
  <div id="profile">
    <!-- user-info -->
    <div class="user-info" @click="login">
      <img class="user" src="../../assets/img/user.png" alt />
      <div class="info">
        <div class="login">登录 / 注册</div>
        <div class="phone">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="arrow">
        <img src="../../assets/img/right.png" alt />
      </div>
    </div>
    <!-- account -->
    <div class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">积分</div>
      </div>
    </div>
    <!-- normal-list -->
    <div class="normal-list">
      <div v-for="(item, index) in orderList" :key="index" class="item" @click="goInfo(item.type)">
        <span class="icon">
          <img :src="getIcon(item.icon)" alt />
        </span>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
    <div class="normal-list">
      <div
        v-for="(item, index) in serviceList"
        :key="index"
        class="item"
        @click.prevent="goInfo(item.type)"
      >
        <span class="icon">
          <img :src="getIcon(item.icon)" alt />
        </span>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    return {
      orderList: [
        { icon: "message.png", title: "我的消息", type: "profile_message" },
        { icon: "integral.png", title: "积分商城", type: "profile_integral" },
        { icon: "vip.png", title: "会员卡", type: "profile_vip" }
      ],
      serviceList: [
        { icon: "shop.png", title: "我的购物车", type: "shopcar" },
        { icon: "download.png", title: "下载APP", type: "profile_download" }
      ]
    };
  },
  methods: {
    login() {
      this.$router.push("login");
    },
    getIcon(url) {
      return require(`../../assets/img/${url}`);
    },
    goInfo(type) {
      if (type === "shopcar") {
        this.$router.push(type);
      } else {
        this.$router.push({ name: type, params: { uid: "111" } });
      }
    }
  }
};
</script>

<style lang="less" scoped>
#profile {
  margin-top: 40px;
  .user-info {
    height: 90px;
    background-color: #00b7ff;
    padding: 10px 15px;

    display: flex;
    color: #fff;
    .user {
      width: 70px;
      height: 70px;
    }
    .info {
      padding-left: 15px;
      flex: 1;
      .login {
        margin-top: 15px;
      }
    }
    .phone {
      span {
        font-size: 12px;
      }
    }
    .arrow {
      width: 20px;
      line-height: 90px;
      img {
        width: 20px;
      }
    }
  }

  .account {
    display: flex;
    .account-item {
      width: 100%;
      background-color: #fff;
      margin-right: 1px;
      text-align: center;
      &:last-of-type {
        margin-right: 0;
      }
      color: #666;
      font-size: 12px;
      padding: 18px;
      .balance {
        font-size: 24px;
        font-weight: 700;
        color: #ff2a00;
      }
      .account-info {
        margin-top: 6px;
      }
    }
  }

  .normal-list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
    margin-top: 15px;
    .item {
      height: 44px;
      line-height: 44px;
      position: relative;
      .icon {
        margin-top: 10px;
        position: absolute;
        left: 16px;
        top: -6px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .title {
        margin-left: 40px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
        padding-left: 6px;
      }
      &:last-of-type {
        .title {
          border-bottom: none;
        }
      }
    }
  }
}
</style>