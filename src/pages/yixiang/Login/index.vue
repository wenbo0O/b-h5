<template>
  <div>
    <!-- 遗像 -->
    <from-login></from-login>
  </div>
</template>

<script>
import mixin from "./components/Mixins";
import components from "./components";
export default {
  mixins: [components, mixin],

  data() {
    return {};
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



