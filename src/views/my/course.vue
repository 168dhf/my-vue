<template>
  <div class="course-content">
    <!-- 头部组件 -->
    <Head :config="wrapConfig">
        <span slot="headRight">上传课程</span>
    </Head>
    <!-- 列表内容组件 -->
    <Classlist></Classlist>
    <!-- 底部组件 -->
    <Tabbar isActive="1"></Tabbar>
  </div>
</template>

<script>
import Head from "@/components/buttom-compontens/head";
import Tabbar from "@/views/components/tabBar";
import Classlist from "@/views/components/classlist";
export default {
  name: "course",
  components: { Head, Tabbar, Classlist},
  props: [],
  data() {
    return {
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: "我的课程"
        }
      }
    };
  }
};
</script>

<style>
</style>