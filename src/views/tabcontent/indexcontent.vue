<template>
  <div class="container">
    <!-- 头部组件 -->
    <div class="header-content" :style="{backgroundColor:backgroundColor}">
      <Head :config="wrapConfig"></Head>
    </div>
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
        <li v-for="(item, index) in imgurlList" :key="index" @click="changeClick(index)">
          <img :src="item.imgurl1" alt />
          <span>{{item.intexText}}</span>
        </li>
      </ul>
    </div>
    <!-- 广播 -->
    <div class="banner">
      <ul>
        <li>
          <div class="left">
            <img :src="newsimgUrl" alt />
            <span>
              {{bigtitle}}
              <b>{{headlineTitle}}</b>
            </span>
          </div>
          <div class="right">
            <img :src="moreimgUrl" alt />
          </div>
        </li>
      </ul>
    </div>
    <!-- 视频推荐 -->
    <Recommendvideo></Recommendvideo>
    <!-- 手记推荐 -->
    <Recommendnotes></Recommendnotes>
    <!-- 名师推荐 -->
    <Recommendedteacher></Recommendedteacher>
    <!-- 底部组件 -->
    <Tabbar isActive="0"></Tabbar>
  </div>
</template>

<script>
import Head from "@/components/buttom-compontens/head";
import Tabbar from "@/views/components/tabBar";
import Recommendvideo from "@/views/components/recommendvideo";
import Recommendnotes from "@/views/components/recommendnotes";
import Recommendedteacher from "@/views/components/recommendedteacher";
export default {
  nmae: "index",
  components: {
    Head,
    Tabbar,
    Recommendvideo,
    Recommendnotes,
    Recommendedteacher
  },
  props: [],
  data() {
    return {
      backgroundColor: "",
      searchimgurl: require("@/assets/images/search.png"),
      imgurl1: require("@/assets/images/banner.png"),
      imgurl2: require("@/assets/images/video.png"),
      imgurl3: require("@/assets/images/banner.png"),
      imgurl4: require("@/assets/images/viedo.png"),
      newsimgUrl: require("@/assets/images/news.png"),
      moreimgUrl: require("@/assets/images/more.png"),
      bigtitle: "听头条：",
      headlineTitle: "数字经济俱乐部上线啦！",
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: "首页",
        }
      },
      imgurlList: [
        { 
          index: 0,
          imgurl1: require("@/assets/images/invited.png"), 
          intexText: "邀请" },
        {
          index: 1,
          imgurl1: require("@/assets/images/project.png"),
          intexText: "积分排行"
        },
        {
          index: 2,
          imgurl1: require("@/assets/images/charge.png"),
          intexText: "积分任务"
        },
        {
          index: 3,
          imgurl1: require("@/assets/images/teachername.png"),
          intexText: "俱乐部"
        }
      ]
    };
  },

  created() {
    //首先，在mounted钩子window添加一个滚动滚动监听事件,这个事件写在mouthed钩子函数里面好像执行不了
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    //  console.log('我是this.handleScroll()',this.handleScroll())
  },
  methods: {
    //然后在方法中，添加这个handleScroll方法来获取滚动的位置
    handleScroll() {
      let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
      console.log("woshi顶部距离啊啊啊啊啊", scrollTop);
      if (scrollTop > 20) {
        console.log("你大于20啦", scrollTop);
        this.backgroundColor = "#2da1db";
      } else {
        this.backgroundColor = "";
      }
    },
    changeClick(index){
      if(index==0){
        //邀请
      }else if(index==1){
        //积分排行
      }else if(index==2){
        //积分任务
        this.$router.push({name:'task'});
      }else if(index==3){
        //俱乐部
      }
    }
  }
};
</script>

<style scoped lang="less">
.container {
  .header-content {
    position: fixed;
    top: 0;
    background: #ffffff;
    width: 100%;
    z-index: 999;
  }
  .allcontent {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 70px;
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
  .banner {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 25px;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        .left {
          img {
            width: 17px;
            height: 14px;
          }
          span {
            font-size: 13px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-left: 3px;

            b {
              font-size: 13px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
            }
          }
        }
        .right {
          img {
            width: 13px;
            height: 3px;
          }
        }
      }
    }
  }
}
</style>