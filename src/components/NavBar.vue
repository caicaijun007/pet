<template>
  <div class="nav-bar">
    <mt-header :title="title">
      <mt-button v-show="isBack" slot="left" icon="back" @click="goBack">返回</mt-button>
      <mt-button v-show="isMore" icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "萌宠"
    },
    isBack: {
      type: Boolean,
      default: false
    },
    isMore: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>