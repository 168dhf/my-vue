<template>
  <div class="detailcontent">
    <!-- 头部 -->
    <Head :config="wrapConfig"></Head>
    <div class="container">
      <div class="title">{{title}}</div>
      <div class="time">{{time}}</div>
      <div class="content">{{container}}</div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
export default {
  name: 'newsdetail',
  components: { Head },
  props: ['config'],
  data() {
    return {
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '消息详情'
        }
      },
      title: '系统升级提醒',
      time: '2019.07.23 09:23:50',
      container:
        '我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！我是一条升级内容，这里是升级文案！'
    };
  },
  created() {
    console.log('我是this.$route', this.$route);
  }
};
</script>

<style scoped lang="less">
.detailcontent {
  .container {
    padding-left: 15px;
    padding-right: 15px;
    .title {
      font-size: 14px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 10px;
    }
    .time {
      font-size: 12px;
      margin-bottom: 15px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    .content {
      font-size: 12px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      text-align: justify;
    }
  }
}
</style>