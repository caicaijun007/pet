<template>
  <div id="app">
    <!-- <NavBar title="app" :isBack="true" :isMore="true" /> -->
    <NavBar :title="getTitle()" :isBack="$route.path.split('/').length <=2 ? false : true" />
    <keep-alive exclude="CategoryDetail,CategoryInfo,CategoryComment,Shopcar">
      <router-view></router-view>
    </keep-alive>
    <TabBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";
import routerTitle from "./configs/router.config";
export default {
  name: "App",
  methods: {
    getTitle() {
      let paths = this.$route.path.split("/");
      if (paths.length > 2) {
        return routerTitle[paths[2]];
      } else {
        return routerTitle[paths[1]];
      }
    }
  },
  components: {
    TabBar,
    NavBar
  }
};
</script>

<style lang="less">
@import "./assets/css/base.less";
</style>
