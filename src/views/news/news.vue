<template>
  <div class="news_content">
    <!-- 头部 -->
    <div class="header">
      <Head :config="wrapConfig"></Head>
    </div>
    <!-- 列表 -->
    <newsList></newsList>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
import newsList from '@/views/components/newsList';
export default {
  name: 'news',
  components: { Head, newsList },
  props: ['config'],
  data() {
    return {
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '消息'
        }
      }
    };
  }
};
</script>

<style scoped lang="less">
.news_content {
  .header {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>