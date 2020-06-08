<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-loading type="spinner" size="80px"></van-loading>
  </div>
</template>

<script>
import { Button, Loading } from "vant";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    [Button.name]: Button,
    [Loading.name]: Loading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped rel="stylesheet/stylus">
.about {
  width: 750px;
  font-size: 37.5px;

  h1 {
    margin: 10px 0;
  }
}
</style>