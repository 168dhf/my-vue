<template>
  <div class="newstask_content">
    <span class="title">每日任务</span>
    <ul>
      <li v-for="(item, index) in newtaskList" :key="index">
        <div class="left">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="right">
          <div class="leftcontainer">
            <span>{{item.finishedRegist}}</span>
            <span>{{item.jifentitle}}</span>
          </div>
          <div class="rightcontainer">
            <span :class="item.typeId==0?'finished':'unfinished'">{{item.finished}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "everydaytask",
  components: {},
  props: [],
  data() {
    return {
      newtaskList: [
        {
          typeId: 0,
          imgUrl: require("@/assets/images/daily-attendance.png"),
          finishedRegist: "每日签到",
          jifentitle: "积分+500",
          finished: "已完成"
        },
        {
          typeId: 1,
          imgUrl: require("@/assets/images/evaluate.png"),
          finishedRegist: "评价",
          jifentitle: "积分+20",
          finished: "去完成"
        },
        {
          typeId: 1,
          imgUrl: require("@/assets/images/invite_friend.png"),
          finishedRegist: "邀请好友",
          jifentitle: "积分+20",
          finished: "去完成"
        },
        {
          typeId: 1,
          imgUrl: require("@/assets/images/order-succefuly.png"),
          finishedRegist: "下单成功",
          jifentitle: "积分+10",
          finished: "去完成"
        },
        {
          typeId: 1,
          imgUrl: require("@/assets/images/share_nokes.png"),
          finishedRegist: "分享手记",
          jifentitle: "积分+20",
          finished: "去完成"
        },
        {
          typeId: 1,
          imgUrl: require("@/assets/images/share_video.png"),
          finishedRegist: "分享视频",
          jifentitle: "积分+50",
          finished: "去完成"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.newstask_content {
  width: 92%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 25px 0px rgba(175, 196, 223, 0.3);
  border-radius: 8px;
  margin: 15px 15px 0 15px;
  .title {
    font-size: 21px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
    padding-left: 15px;
  }
  ul {
    li {
      display: flex;
      margin-top: 20px;
      .left {
        padding-left: 15px;
        img {
          width: 35px;
          height: 35px;
          vertical-align: middle;
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f3f3f3;
        flex: 1;
        margin: 0 15px 0px 15px;
        .leftcontainer {
          margin-bottom: 20px;
          span:first-child {
            display: block;
            font-size: 15px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            display: block;
          }
          span:last-child {
            width: 60px;
            height: 20px;
            border-radius: 12px;
            border: 1px solid rgba(13, 84, 159, 1);
            font-size: 10px;
            font-weight: 400;
            color: rgba(13, 84, 159, 1);
            line-height: 20px;
            text-align: center;
            display: block;
            margin-top: 14px;
          }
        }
        .rightcontainer {
          .finished {
            width: 70px;
            height: 30px;
            border-radius: 15px;
            border: 1px solid rgba(15, 71, 149, 1);
            color: #0f4795;
            font-size: 12px;
            line-height: 30px;
            text-align: center;
            display: block;
            margin-top: 10px;
          }
          .unfinished {
            width: 70px;
            height: 30px;
            border-radius: 15px;
            background: linear-gradient(
              168deg,
              rgba(10, 114, 184, 1) 0%,
              rgba(10, 114, 184, 1) 0%,
              rgba(18, 49, 131, 1) 100%
            );
            color: #ffffff;
            font-size: 12px;
            line-height: 30px;
            text-align: center;
            display: block;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>