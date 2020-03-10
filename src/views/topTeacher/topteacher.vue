<template>
  <div class="teacher-list">
    <!-- 头部 -->
    <Head :config="wrapConfig">
      <div slot="headRight" @click="shearClick()">
        <img :src="imgUrl" alt />
      </div>
    </Head>
    <!-- 名师列表 -->
    <Teacher></Teacher>
  </div>
</template>

<script>
import Head from "@/components/buttom-compontens/head";
import Teacher from "@/views/components/teacherList";
export default {
  name: "topteacher",
  components: { Head, Teacher },
  props: ["config"],
  data() {
    return {
      imgUrl: require("@/assets/images/search.png"),
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: "名师推荐"
        }
      }
    };
  },
  methods:{
      shearClick(){
          console.log('你点击了搜索')
      }
  }
};
</script>

<style scoped lang="less">
.teacher-list {
  img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
}
</style>