<template>
  <div class="container">
    <!-- 头部 -->
    <Head :config="wrapConfig"></Head>
    <!-- 输入框 -->
    <inputBox :config="inputConfig" ref="headerChild"></inputBox>
    <!-- 按钮 -->
    <Buttom :config="conf"></Buttom>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
import inputBox from '@/components/buttom-compontens/input';
import Buttom from '@/components/buttom-compontens/buttom';
export default {
  name: 'personaldata',
  components: { Head, inputBox, Buttom },
  props: ['config'],
  data() {
    return {
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '个人简介'
        }
      },
      inputConfig: {
        conf1: {
          key: 1,
          contenTitle3: '请输入简介'
        }
      },
      conf: {
        title: '确定',
        handelClick: () => {
          let name = this.$refs.headerChild.name;
          this.$router.push({ name: 'personaldata', query: { name } });
          console.log('我是子组件的数据', this.$refs.headerChild.name);
        }
      }
    };
  }
};
</script>

<style scoped lang="less">
</style>