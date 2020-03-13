<template>
  <div class="container">
    <!-- 头部 -->
    <Head :config="wrapConfig">
      <div class="righttitle" slot="headRight">兑换课程</div>
    </Head>
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        <div class="title">
         {{item.title}}
        </div>
        <div class="btn" @click="changeWatch">{{item.watch}}</div>
      </li>
    </ul>
    <!-- 弹框 -->
    <Popu ref="showDailog"></Popu>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
import Popu from '@/views/components/popus'
export default {
  name: 'changecourse',
  components: { Head, Popu },
  props: ['config'],
  data() {
    return {
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '已兑换课程'
        }
      },
      dataList:[
          {title:' 介绍redispy的安装和使用，讲解使用get/set等命令操作类型的数据课程',watch:'立即观看'},
          {title:' 介绍redispy的安装和使用，讲解使用get/set等命令操作类型的数据课程',watch:'立即观看'},
          {title:' 介绍redispy的安装和使用，讲解使用get/set等命令操作类型的数据课程',watch:'立即观看'}
      ]
    };
  },
  methods:{
      changeWatch(){
          //弹出模态框
          this.$refs.showDailog.show=true;
      }
  }
};
</script>

<style scoped lang="less">
.container {
  .righttitle {
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    opacity: 1;
  }
  ul {
    width: 375px;
    height: 722px;
    background: rgba(250, 250, 250, 1);
    opacity: 1;
    padding: 15px 15px 0 15px;
    li {
      width: 345px;
      height: 114px;
      background: rgba(255, 255, 255, 1);
      opacity: 1;
      border-radius: 8px;
      margin-bottom: 15px;
      .title {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
        padding: 15px;
        border-bottom: 1px solid #f3f3f3ff;
      }
      .btn {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: rgba(45, 161, 219, 1);
        opacity: 1;
        margin-top: 11px;
      }
    }
  }
}
</style>