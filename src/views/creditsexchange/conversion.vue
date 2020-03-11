<template>
  <div class="container">
    <!-- 头部 -->
    <Head :config="wrapConfig">
      <div slot="headRight" @click="shearClick()" class="share">
        <img :src="imgUrl" alt />
      </div>
    </Head>
    <div class="contet">
      <span class="title">手机</span>
      <div class="detail">区块链的价值细说区块链带来的价值体系等等</div>
      <div class="integral">
        <span>98</span>
        <span>积分</span>
      </div>
      <div class="browser">76人浏览</div>
      <div class="introductory">
        <div class="title-introduc">简介</div>
        <div class="content">区块链的价值区块链的价值区块链的价值区块链的价值区块链的价值区块链的价值区块链的价值区块链的价值区块链的价值区块链的价</div>
      </div>
      <!-- 讲师 -->
      <div class="teachercontent">
        <div class="topname">讲师</div>
        <div class="content">
          <div class="left">
            <div class="leftimg">
              <img src="~@/assets/images/avatar.png" alt />
            </div>
            <div class="rightcontent">
              <div class="name">TED</div>
              <div class="job">设计师</div>
              <span class="foucu">455人关注</span>
              <span>433条内容</span>
            </div>
          </div>
          <div class="right">已关注</div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <div class="left">
          <img src="~@/assets/images/collection.png" alt />
          <div class="collection">已收藏</div>
        </div>
        <div class="right" @click="clickChange()">立即兑换</div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
export default {
  name: 'forcomplete',
  components: { Head },
  props: ['config'],
  data() {
    return {
      imgUrl: require('@/assets/images/search.png'),
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '兑换完成'
        }
      }
    };
  },
  methods:{
      clickChange(){
        //   console.log('你点击了我的兑换')
          this.$router.push({name:'confirmchange'});
      }
  }
};
</script>

<style scoped lang="less">
.container {
  .share {
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
  }
  .contet {
    .title {
      display: block;
      width: 70px;
      height: 30px;
      background: linear-gradient(
        129deg,
        rgba(10, 114, 184, 1) 0%,
        rgba(18, 49, 131, 1) 100%
      );
      border-radius: 10px 0px 10px 0px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
      text-align: center;
      margin-left: 15px;
    }
    .detail {
      font-size: 24px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 34px;
      margin-top: 15px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .integral {
      padding-left: 15px;
      span:first-child {
        font-size: 24px;
        font-weight: 500;
        color: rgba(45, 161, 219, 1);
        line-height: 34px;
        margin-right: 5px;
      }
      span:last-child {
        font-size: 14px;
        font-weight: 500;
        color: rgba(45, 161, 219, 1);
        // line-height: 20px;
      }
    }
    .browser {
      font-size: 12px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 17px;
      margin-top: 20px;
      padding-left: 15px;
    }
    .introductory {
      margin-top: 40px;
      margin-bottom: 20px;
      padding-left: 15px;
      padding-right: 15px;
      .title-introduc {
        font-size: 14px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .content {
        font-size: 12px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 17px;
        margin-top: 10px;
        text-align: justify;
      }
    }
    .teachercontent {
      border-top: 1px solid #f3f3f3ff;
      border-bottom: 1px solid #f3f3f3ff;
      padding: 15px;
      .topname {
        font-size: 14px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
        margin-bottom: 14px;
      }
      .content {
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          .leftimg {
            img {
              width: 52px;
              height: 52px;
              background: rgba(255, 255, 255, 1);
              border-radius: 32px;
              margin-right: 17px;
            }
          }
          .rightcontent {
            .name {
              font-size: 14px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              margin-bottom: 5px;
            }
            .job {
              font-size: 12px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              margin-bottom: 6px;
            }
            span {
              font-size: 12px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
            }
            .foucu::after {
              content: '';
              display: inline-block;
              content: '';
              width: 1px;
              height: 10px;
              background: #b3b3b3;
              margin-right: 15px;
              margin-left: 15px;
            }
          }
        }
        .right {
          width: 70px;
          height: 30px;
          background: rgba(179, 179, 179, 1);
          border-radius: 15px;
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 30px;
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 375px;
      height: 60px;
      background: #ffffff;
      display: flex;
      padding-left: 22px;
      padding-bottom: 9px;
      border-top: 1px solid #F3F3F3FF;
      .left {
        img {
          width: 20px;
          height: 18px;
        }
        .collection {
          font-size: 12px;
          font-weight: 400;
          color: rgba(45, 161, 219, 1);
        }
      }
      .right {
        width: 280px;
        height: 40px;
        background: linear-gradient(
          168deg,
          rgba(10, 114, 184, 1) 0%,
          rgba(10, 114, 184, 1) 0%,
          rgba(18, 49, 131, 1) 100%
        );
        border-radius: 20px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
        text-align: center;
        margin: 10px 15px 10px 22px;
      }
    }
  }
}
</style>