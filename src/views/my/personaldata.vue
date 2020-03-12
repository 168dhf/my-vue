<template>
  <div class="container">
    <!-- 头部 -->
    <Head :config="wrapConfig"></Head>
    <ul>
      <li>
        <div class="left">{{loginname}}</div>
        <div class="right">
          <img :src="imgUrl" alt class="loginimg" />
          <img :src="imgArrowUrl" alt class="arrow" />
        </div>
      </li>
      <li @click="chnageName()">
        <div class="left">{{name}}</div>
        <div class="right">
          {{userName}}
          <img :src="imgArrowUrl" alt class="arrow" />
        </div>
      </li>
      <li @click="changePerson()">
        <div class="left">{{personaldata}}</div>
        <div class="right">
            {{personName}}
          <img :src="imgArrowUrl" alt class="arrow" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Head from '@/components/buttom-compontens/head';
export default {
  name: 'personaldata',
  components: { Head },
  props: ['config'],
  data() {
    return {
      loginname: '头像',
      name: '昵称',
      userName: '海洋中发怒的公主',
      personaldata: '个人简介',
      personName:'',
      imgUrl: require('@/assets/images/touxiang.png'),
      imgArrowUrl: require('@/assets/images/arrow.png'),
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: '个人资料'
        }
      }
    };
  },
  created(){
      this.getUrl();
  },
  methods: {
    //点击昵称
    chnageName() {
      this.$router.push({ name: 'nickname' });
    },
    //点击个人资料
    changePerson() {
      this.$router.push({ name: 'personalIntroductor' });
    },
    //获取url上的信息
    getUrl(){
        console.log("我是url上的额参数",this.$route);
        this.personName = this.$route.query.name;
        this.userName = this.$route.query.name1;
    }
  }
};
</script>

<style scoped lang="less">
// @import "../src/common/my";
ul {
  padding-left: 15px;
  padding-right: 15px;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;
    .left {
      font-size: 15px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 31px;
    }
    .right {
      line-height: 31px;
      display: flex;
      font-size: 14px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      .loginimg {
        width: 32px;
        height: 32px;
      }
      .arrow {
        width: 8px;
        height: 14px;
        margin-top: 10px;
        margin-left: 11px;
      }
    }
  }
}
</style>