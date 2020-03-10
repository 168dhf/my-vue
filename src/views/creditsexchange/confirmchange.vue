<template>
  <div class="container">
    <!-- 头部 -->
    <Head :config="wrapConfig"></Head>
    <div class="content">
      <div class="detailcontent">
        <div class="title">订单信息</div>
        <div class="content-detail">
          <div class="left">
            <img src="~@/assets/images/video.png" alt />
          </div>
          <div class="right">
            <div class="detail">区块链的价值区块链入门基础知识学习与实战</div>
            <div class="number">
              <span>98</span>
              <span>积分</span>
            </div>
          </div>
        </div>
        <span class="way">兑换方式</span>
        <div class="jifen">
          <div class="lefttitle">积分兑换</div>
          <div class="right">余额：0（不足兑换）</div>
        </div>
        <div class="footer">
          <div class="left">
            <span>98</span>
            <span>积分</span>
          </div>
          <div class="right" @touchstart.stop="show = true">确认兑换</div>
        </div>
      </div>
      <van-number-keyboard
        :show="show"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
import { Toast } from 'vant';
export default {
  name: 'confirmchange',
  components: { Head },
  props: ['config'],
  data() {
    return {
      show: false,
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '确认兑换'
        }
      }
    };
  },
  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('删除');
    }
  }
};
</script>

<style scoped lang="less">
.container {
  .content {
    // padding-left: 15px;
    // padding-right: 15px;
    margin-top: 15px;
    .title {
      font-size: 14px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 20px;
      padding-left: 15px;
    }
    .content-detail {
      display: flex;
      margin-top: 15px;
      padding-bottom: 20px;
      padding-left: 15px;
      padding-right: 15px;
      border-bottom: 1px solid #f3f3f3ff;
      .left {
        img {
          width: 100px;
          height: 65px;
        }
      }
      .right {
        margin-left: 15px;
        .detail {
          font-size: 14px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          margin-bottom: 9px;
        }
        .number {
          font-size: 12px;
          font-weight: 400;
          color: rgba(45, 161, 219, 1);
          line-height: 17px;
        }
      }
    }
    .way {
      font-size: 14px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 20px;
      padding-left: 15px;
      margin-top: 20px;
    }
    .jifen {
      display: flex;
      justify-content: space-between;
      padding-left: 15px;
      padding-right: 15px;
      .lefttitle {
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
      }
      .right {
        font-size: 14px;
        font-weight: 400;
        color: rgba(225, 44, 44, 1);
        line-height: 20px;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      width: 375px;
      height: 60px;
      border-top: 1px solid #f3f3f3ff;
      background: #ffffff;
      position: absolute;
      bottom: 0;
      .left {
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
      .right {
        width: 140px;
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
        margin: 10px 15px 10px 0;
      }
    }
  }
}
</style>