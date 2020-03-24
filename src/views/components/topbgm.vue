<template>
  <div class="bgm">
    <Head :config="wrapConfig"></Head>
    <div class="toptitle">完成任务 奖励多多</div>
    <div class="jifentitle">完成任务赚取积分</div>
  </div>
</template>

<script>
import Head from "@/components/buttom-compontens/head";
export default {
  name: "tobgm",
  components: { Head },
  props: [],
  data() {
    return {
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: ""
        }
      }
    };
  }
};
</script>

<style scoped lang="less">
.bgm {
  background: url("~@/assets/images/topbgm.png") no-repeat;
  background-size: contain;
  height: 265px;
  width: 100%;
  .toptitle {
    font-size: 24px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 10px;
  }
  .jifentitle {
    font-size: 17px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
}
</style>