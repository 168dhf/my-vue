<template>
  <div class="container">
    <!-- 头部 -->
    <Head :config="wrapConfig"></Head>
    <div class="success">
      <span></span>
    </div>
    <div class="title">兑换成功</div>
    <div class="click">点击完成按钮去观看视频吧！</div>
    <Buttom :config="conf"></Buttom>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
import Buttom from '@/components/buttom-compontens/buttom';
export default {
  name: 'forcomplete',
  components: { Head, Buttom },
  props: ['config'],
  data() {
    return {
      conf: {
        title: '完成',
        handelClick: () => {
          console.log('1111111111');
        //   this.$router.push({name:''})
        }
      },
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '兑换完成'
        }
      }
    };
  }
};
</script>

<style scoped lang="less">
.container {
  padding-left: 15px;
  padding-right: 15px;
  .success {
    position: relative;
    width: 90px;
    height: 90px;
    background: linear-gradient(
      168deg,
      rgba(10, 114, 184, 1) 0%,
      rgba(10, 114, 184, 1) 0%,
      rgba(18, 49, 131, 1) 100%
    );
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 90px;
    span {
      position: absolute;
      width: 40px;
      height: 20px;
      display: inline-block;
      border-left: 3px solid #ffffff;
      border-bottom: 3px solid #ffffff;
      left: 28px;
      top: 28px;
      transform: rotate(-45deg);
    }
  }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
    margin-top: 20px;
  }
  .click {
    font-size: 14px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;
  }
}
</style>