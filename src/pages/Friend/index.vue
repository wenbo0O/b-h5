<template>
  <div class="wrapper">
    <swiper-page></swiper-page>
  </div>
</template>

<script>
import mixin from "./components/Mixins";
import components from "./components";

export default {
  mixins: [components, mixin],
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



