<template>
  <div class="informtation-content">
    <div class="content">
      <!-- 头顶右侧 -->
      <div class="top">
        <div class="left">
          <img :src="notificationImg" alt />
        </div>
        <div class="right">
          <img :src="settImg" alt />
        </div>
      </div>
      <!-- 登录信息 -->
      <div class="loguser">
        <div class="left">
          <img :src="logImg" alt />
        </div>
        <div class="right">
          <div class="logname">海洋中发怒的公主</div>
          <ul>
            <li>
              <span>普通会员</span>
            </li>
            <li>关注26</li>
            <li>粉丝26</li>
          </ul>
        </div>
      </div>
      <!-- 背景图 -->
      <div class="bgimg">
        <div class="bigimg">
          <img :src="huanguanImg" alt />
          <span>完成任务赚取积分！</span>
          <span>赚积分</span>
        </div>
      </div>
      <!-- 分类 -->
      <div class="fenlei">
        <ul>
          <li v-for="(item, index) in datalistimg" :key="index">
            <img :src="item.imgUrl" alt />
            <span>{{item.titletext}}</span>
          </li>
        </ul>
      </div>
      <!-- 列表 -->
      <div class="list">
        <ul>
          <li v-for="(item, index) in myList" :key="index">
            <span>{{item.titleName}}</span>
            <img src="~@/assets/images/arrowimg.png" alt />
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部组件 -->
    <Tabbar isActive="2"></Tabbar>
  </div>
</template>


<script>
import Tabbar from "@/views/components/tabBar";
export default {
  name: "myclass",
  components: { Tabbar },
  data() {
    return {
      notificationImg: require("@/assets/images/notification.png"),
      settImg: require("@/assets/images/setting.png"),
      logImg: require("@/assets/images/touxiang.png"),
      huanguanImg: require("@/assets/images/huanguna.png"),
      datalistimg: [
        { imgUrl: require("@/assets/images/club.png"), titletext: "俱乐部" },
        {
          imgUrl: require("@/assets/images/qiandao.png"),
          titletext: "打卡签到"
        },
        {
          imgUrl: require("@/assets/images/myclass.png"),
          titletext: "我的课程"
        },
        {
          imgUrl: require("@/assets/images/myjifen.png"),
          titletext: "我的积分"
        },
        {
          imgUrl: require("@/assets/images/mywallet.png"),
          titletext: "我的钱包"
        }
      ],
      myList: [
        {
          titleName: "我的购买订单",
          imgurl: require("@/assets/images/arrowimg.png")
        },
        {
          titleName: "我的销售订单",
          imgurl: require("@/assets/images/arrowimg.png")
        },
        {
          titleName: "邀请码",
          imgurl: require("@/assets/images/arrowimg.png")
        },
        {
          titleName: "优惠券",
          imgurl: require("@/assets/images/arrowimg.png")
        },
        {
          titleName: "我的收藏",
          imgurl: require("@/assets/images/arrowimg.png")
        },
        {
          titleName: "帮助中心",
          imgurl: require("@/assets/images/arrowimg.png")
        },
        {
          titleName: "关于我们",
          imgurl: require("@/assets/images/arrowimg.png")
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.informtation-content {
  .content {
    padding: 0 15px 0 15px;
    .top {
      display: flex;
      justify-content: flex-end;
      .left {
        img {
          width: 20px;
          height: 20px;
          margin-right: 24px;
        }
      }
      .right {
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .loguser {
      display: flex;
      .left {
        img {
          width: 60px;
          height: 60px;
          margin-right: 17px;
        }
      }
      .right {
        .logname {
          font-size: 17px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
          margin-bottom: 12px;
        }
        ul {
          display: flex;
          li:nth-child(1) {
            background: url("~@/assets/images/regularremember.png") no-repeat;
            width: 80px;
            height: 20px;
            position: relative;
            background-size: cover;
            background-position: center center;
            span {
              color: #ffffff;
              font-size: 11px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 15px;
              position: absolute;
              right: 5px;
              top: 2px;
            }
          }
          li:nth-child(2) {
            width: 55px;
            height: 20px;
            background: rgba(0, 193, 168, 1);
            border-radius: 10px;
            color: #ffffff;
            font-size: 11px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 20px;
            text-align: center;
            margin-left: 10px;
          }
          li:nth-child(3) {
            width: 55px;
            height: 20px;
            background: rgba(138, 135, 231, 1);
            border-radius: 10px;
            color: #ffffff;
            font-size: 11px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 20px;
            text-align: center;
            margin-left: 10px;
          }
        }
      }
    }
    .bgimg {
      margin-top: 27px;
      margin-bottom: 25px;
      .bigimg {
        background: url("~@/assets/images/bg.png") no-repeat;
        width: 100%;
        height: 44px;
        position: relative;
        background-size: cover;
        display: flex;
        background-position: center;
        img {
          width: 20px;
          height: 18px;
          position: absolute;
          top: 13px;
          left: 15px;
        }
        span:first-of-type {
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          line-height: 44px;
          display: block;
          margin-left: 45px;
        }
        span:last-of-type {
          font-size: 14px;
          font-weight: 400;
          color: #fff;
          line-height: 25px;
          display: block;
          width: 74px;
          height: 25px;
          background: rgba(51, 51, 51, 1);
          border-radius: 13px;
          text-align: center;
          position: absolute;
          right: 15px;
          top: 10px;
        }
      }
    }
    .fenlei {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          text-align: center;
          img {
            width: 40px;
            height: 40px;
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
    .list {
      margin-top: 40px;
      ul {
        li {
          display: flex;
          justify-content: space-between;
          // margin-bottom: 35px;
          span {
            font-size: 15px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            padding-top: 18px;
            padding-bottom: 18px;
          }
          img {
            width: 8px;
            height: 14px;
            display: flex;
            padding-top: 18px;
            padding-bottom: 18px;
          }
        }
      }
    }
  }
}
</style>