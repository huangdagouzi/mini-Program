<template>
  <div class="page">
      <swiper :indicator-dots="indicatorDots" 
        :autoplay="autoplay" 
        :interval="interval" 
        :duration="duration" 
        :circular="circular" 
        @change="swiperChange" 
        @animationfinish="animationfinish"
        style="height:300px"
        >
        <div v-for="item in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
  </div>
</template>

<script>
import mptoast from "mptoast";

export default {
  components: {
    mptoast
  },
  data() {
    return {
      imgUrls: [
        "../../assets/images/1.jpg",
        "../../assets/images/2.jpg",
        "../../assets/images/3.jpg"
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      circular: true,
      duration: 1000,
    };
  },
  methods: {
    showToast() {
      this.$mptoast("我是提示信息");
    },
    swiperChange(e) {
      console.log("第" + e.mp.detail.current + "张轮播图发生了滑动");
    },
    animationfinish(e) {
      console.log("第" + e.mp.detail.current + "张轮播图滑动结束");
    },
  },

  created() {}
};
</script>

<style scoped>
.slide-image {
  width: 100%;
  height: 100%;
}
</style>