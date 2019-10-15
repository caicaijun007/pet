<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="decrement">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="num" ref="numBox" readonly />
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: "NumBox",
  props: ["max", "cate_id", "initNum", "type"],
  data: function() {
    return {
      num: this.initNum
    };
  },
  methods: {
    countChanged() {
      if (this.type === "addToCar") {
        this.$emit("getCount", this.num);
      } else if (this.type === "shopCar") {
        this.$store.commit("updateGoodsInfo", {
          cate_id: this.cate_id,
          count: this.num
        });
      }
    },
    increment() {
      let n = parseInt(this.$refs.numBox.value);
      if (n >= this.max) {
        return;
      }
      this.num = n + 1;
      this.countChanged();
    },
    decrement() {
      let n = parseInt(this.$refs.numBox.value);
      if (n < 2) {
        return;
      }
      this.num = n - 1;
      this.countChanged();
    }
  }
};
</script>

<style lang="less" scoped>
</style>
