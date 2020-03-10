<template>
  <div class="container">
    <!-- 头部 -->
    <Head :config="wrapConfig"></Head>
    <div class="middle-container">
        <div class="top"></div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
export default {
  name: 'creditsexchange',
  components: { Head },
  props: ['config'],
  data() {
    return {
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '积分兑换'
        }
      }
    };
  }
};
</script>

<style scoped lang="less">
.container{
    padding-left: 15px;
    padding-right: 15px;
}
</style>