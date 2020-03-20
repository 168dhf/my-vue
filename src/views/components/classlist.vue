<template>
  <div class="classlist">
    <van-tabs v-model="active">
      <van-tab title="视频">
        <div class="video-container">
          <ul>
            <li v-for="(item, index) in videodataList" :key="index" @click="changeLisk(item.id, 0)">
              <div class="left">
                <img :src="item.bgimg" alt />
                <div
                  :class="{'checkstatus':item.typeid==0,'losestatus':item.typeid==1,'successststus':item.typeid==2,'boughtstus':item.typeid==3,'removestatus':item.typeid==4}"
                >
                  <span>{{item.statusataitle}}</span>
                </div>
              </div>
              <div class="right">
                <div class="title">{{item.title}}</div>
                <div class="view-title">
                  <span>{{item.type === 1 ? `${item.price}积分` : '免费'}}</span>
                  <span>{{item.viewsNumber}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="手记">
        <div class="video-container">
          <ul>
            <li v-for="(item, index) in notesdataList" :key="index" @click="changeLisk(item.id, 1)">
              <div class="left">
                <img :src="item.bgimg" alt />
              </div>
              <div class="right">
                <div class="title">{{item.title}}</div>
                <div class="view-title">
                  <span>{{item.type === 1 ? `${item.price}积分` : '免费'}}</span>
                  <span>{{item.initWatch}}万人观看</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "classlist",
  components: {},
  props: ["config"],
  data() {
    return {
      active: 0,
      videodataList: [
        {
          typeid: 0,
          statusataitle: "审核中",
          bgimg: require("@/assets/images/video copy.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "10积分",
          viewsNumber: "4687万人观看",
          price: 100,
          type: 0
        },
        {
          typeid: 1,
          statusataitle: "失败",
          bgimg: require("@/assets/images/video copy.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "10积分",
          viewsNumber: "4687万人观看",
          price: 100,
          type: 1
        },
        {
          typeid: 2,
          statusataitle: "成功",
          bgimg: require("@/assets/images/video copy.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "免费",
          viewsNumber: "4687万人观看",
          price: 180,
          type: 1
        },
        {
          typeid: 3,
          statusataitle: "已购买",
          bgimg: require("@/assets/images/video copy.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "免费",
          viewsNumber: "4687万人观看",
          price: 180,
          type: 1
        },
        {
          typeid: 4,
          statusataitle: "已下架",
          bgimg: require("@/assets/images/video copy.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "免费",
          viewsNumber: "4687万人观看",
          price: 180,
          type: 1
        }
      ],
      notesdataList: [
        {
          bgimg: require("@/assets/images/viedo.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "10积分",
          viewsNumber: "4687万人观看"
        },
        {
          bgimg: require("@/assets/images/viedo.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "10积分",
          viewsNumber: "4687万人观看"
        },
        {
          bgimg: require("@/assets/images/viedo.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "免费",
          viewsNumber: "4687万人观看"
        },
        {
          bgimg: require("@/assets/images/viedo.png"),
          title: "区块链的价值区块链入门基础知识学习与实战",
          chargeTitle: "免费",
          viewsNumber: "4687万人观看"
        }
      ]
    };
  },
  methods: {
    //点击每个列表事件
    changeLisk(id, type) {
      console.log(type);
      if (type == "0") {
      } else {
      }
    }
  }
};
</script>

<style scoped lang="less">
.classlist {
  .video-container {
    ul {
      li {
        display: flex;
        padding: 15px;
        .left {
          width: 100px;
          height: 90px;
          margin-right: 15px;
          position: relative;
          img {
            width: 100px;
            height: 90px;
          }
          div {
            font-size: 8px;
            color: rgba(255, 255, 255, 1);
            position: absolute;
            top: 0;
            left: 0;
            span {
              position: absolute;
              top: -22px;
              left: -40px;
              transform: rotate(311deg);
              width: 50px;
              display: block;
              text-align: center;
            }
          }
          //   审核中
          .checkstatus {
            width: 0;
            height: 0;
            border: 35px solid #ff9a00;
            border-top-left-radius: 5px;
            border-bottom: 35px solid transparent;
            border-right: 35px solid transparent;
          }
          //   失败
          .losestatus {
            width: 0;
            height: 0;
            border: 35px solid #e12c2c;
            border-top-left-radius: 5px;
            border-bottom: 35px solid transparent;
            border-right: 35px solid transparent;
          }
          //   成功
          .successststus {
            width: 0;
            height: 0;
            border: 35px solid #2da1db;
            border-top-left-radius: 5px;
            border-bottom: 35px solid transparent;
            border-right: 35px solid transparent;
          }
          //   已购买
          .boughtstus {
            width: 0;
            height: 0;
            border: 35px solid #00c1a8;
            border-top-left-radius: 5px;
            border-bottom: 35px solid transparent;
            border-right: 35px solid transparent;
          }
          //已下架
          .removestatus {
            width: 0;
            height: 0;
            border: 35px solid #999999;
            border-top-left-radius: 5px;
            border-bottom: 35px solid transparent;
            border-right: 35px solid transparent;
          }
        }
        .right {
          .title {
            width: 230px;
            font-size: 14px;
            color: #333333;
            font-weight: 500;
            margin-bottom: 8px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .view-title {
            span:first-of-type {
              color: #2da1db;
              margin-right: 20px;
              font-size: 12px;
            }
            span:last-of-type {
              color: #666666;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  //覆盖vant样
  /deep/ .van-tabs--line {
    /deep/ .van-tabs__wrap {
      padding-bottom: 9px;
      /deep/ .van-tabs__nav {
        /deep/ .van-tab--active {
          color: #2da1db;
        }
        /deep/ .van-tabs__line {
          width: 15px !important;
        }
        /deep/ .van-tabs__line {
          position: absolute;
          left: 0;
          z-index: 1;
          height: 2px;
          background-color: #2da1db;
          border-radius: 1px;
        }
      }
    }
  }
}
</style>