<template>
  <div class="container">
    <!-- 头部组件 -->
    <Head :config="wrapConfig"></Head>
    <!-- 中间内容 -->
    <div class="allcontent">
      <div class="boxcontent">
        <input type="text" placeholder="请输入搜索关键字" />
        <img :src="searchimgurl" alt />
      </div>
      <!-- 轮播 -->
      <div class="isSwiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img :src="imgurl1" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="imgurl2" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="imgurl3" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="imgurl4" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 分类 -->
    <div class="listcontent">
      <ul>
        <li v-for="(item, index) in imgurlList" :key="index">
          <img :src="item.imgurl1" alt />
          <span>{{item.intexText}}</span>
        </li>
      </ul>
    </div>
    <!-- 底部组件 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
import Tabbar from '@/views/components/tabBar';
export default {
  nmae: 'index',
  components: { Head, Tabbar },
  props: [],
  data() {
    return {
      searchimgurl: require('@/assets/images/search.png'),
      imgurl1: require('@/assets/images/banner.png'),
      imgurl2: require('@/assets/images/video.png'),
      imgurl3: require('@/assets/images/banner.png'),
      imgurl4: require('@/assets/images/viedo.png'),
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '首页'
        }
      },
      imgurlList: [
        { imgurl1: require('@/assets/images/invited.png'), intexText: '邀请' },
        {
          imgurl1: require('@/assets/images/project.png'),
          intexText: '积分排行'
        },
        {
          imgurl1: require('@/assets/images/charge.png'),
          intexText: '积分任务'
        },
        {
          imgurl1: require('@/assets/images/teachername.png'),
          intexText: '俱乐部'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.container {
  .allcontent {
    padding-left: 15px;
    padding-right: 15px;
    .boxcontent {
      position: relative;
      width: 100%;
      // height: 34px;
      //  padding: 7px 0 7px 15px;
      input {
        outline: none;
        border: none;
        width: 100%;
        height: 34px;
        background: rgba(243, 243, 243, 1);
        border-radius: 17px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(179, 179, 179, 1);
        line-height: 34px;
        text-indent: 15px;
      }
      img {
        width: 15px;
        height: 15px;
        position: absolute;
        position: absolute;
        right: 15px;
        top: 26px;
      }
    }
  }
  .isSwiper {
    margin-top: 13px;
    .my-swipe .van-swipe-item {
      img {
        width: 100%;
        height: 118px;
      }
    }
  }
  .listcontent {
    ul {
      display: flex;
      justify-content: space-around;
      margin-top: 25px;
      li {
        text-align: center;
        img {
          width: 40px;
          height: 40px;
          margin-bottom: 10px;
        }
        span {
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          display: block;
        }
      }
    }
  }
}
</style>