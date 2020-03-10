<template>
  <div class="sett-content">
    <Head :config="wrapConfig"></Head>
    <ul>
      <li v-for="(item, index) in List" :key="index" @click="changeLisk(item.index)">
        <div class="left">{{item.key}}</div>
        <div class="right">
          <span>{{item.value}}</span>
          <span></span>
        </div>
      </li>
    </ul>
    <div class="footer">
      <Buttom :config="conf"></Buttom>
    </div>
  </div>
</template>

<script>
import Buttom from "@/components/buttom-compontens/buttom";
import Head from "@/components/buttom-compontens/head";
export default {
  name: "setting",
  components: { Buttom, Head },
  props: ['config'],
  data() {
    return {
      conf: {
        title: "退出登录",
        handelClick: () => {
          console.log("33333333");
          this.$router.push({ name: "login" });
        }
      },
      List: [
        { index: 0, key: "语言切换", value: "中文简体" },
        { index: 1, key: "实名认证", value: "未认证" },
        { index: 2, key: "绑定手机号", value: "未绑定" },
        { index: 3, key: "修改登陆密码", value: "" },
        { index: 4, key: "设置支付密码", value: "未设置" }
      ],
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: "设置"
        }
      }
    };
  },
  methods: {
    changeLisk(index) {
      console.log("点击当前的index", index);
    }
  }
};
</script>

<style soped lang="less">
.sett-content {
  // position: relative;
  // padding: 0 15px 0 15px;
  ul {
    margin-top: 35px;
    padding-left: 15px;
    padding-right: 15px;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
      div:first-of-type {
        font-size: 15px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      div:last-of-type {
        display: flex;
        span:nth-of-type(1) {
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-right: 10px;
        }
        span:nth-of-type(2) {
          width: 10px;
          height: 10px;
          border-top: 1px solid #b3b3b3;
          border-right: 1px solid #b3b3b3;
          transform: rotate(45deg);
          margin-top: 4px;
        }
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
}
</style>