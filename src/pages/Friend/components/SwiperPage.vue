<template>
  <div id="video-list">
    <swiper ref="mySwiper" :options="swiperOptions">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" src="@/assets/images/version1/beijing.png" alt />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "SwiperPage",
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        width: window.innerWidth,
        height: window.innerHeight,
        runCallbacksOnInit: true, //如果不想触发，将此设置为false
        on: {
          resize: function() {
            this.params.width = window.innerWidth;
            this.update();
          },
          slideChangeTransitionStart: function() {
            //alert("触发了runCallbacksOnInit回调");
          }
        },
        resistanceRatio: 0.9,
        grabCursor: true
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
        }
      ]
    };
  },

  components: {
    Swiper,
    SwiperSlide
  }
};
</script>
<style scoped>
#video-list {
  height: 100%;
}
#video-list .swiper-container {
  height: 100%;
}
</style>

<style lang='stylus' scoped>
.wrapper >>>.swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.6666667%;
  background: #ccc;

  .swiper-item {
    width: 100%;

    .swiper-img {
      width: 100%;
    }
  }
}
</style>
