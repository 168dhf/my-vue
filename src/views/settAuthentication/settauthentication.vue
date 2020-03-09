<template>
  <div class="name-content">
    <!-- 头部 -->
    <Head :config="wrapConfig"></Head>
    <!-- input输入框 -->
    <inputBox :config="inputConfig"></inputBox>
    <!-- <div class="sure">确定</div> -->
    <Buttom :config="conf"></Buttom>
  </div>
</template>

<script>
import Buttom from "@/components/buttom-compontens/buttom";
import Head from "@/components/buttom-compontens/head";
import inputBox from "@/components/buttom-compontens/input";
export default {
  name: "seetauthentication",
  components: {
    Buttom,
    Head,
    inputBox
  },
  props: ["config"],
  data() {
    return {
      conf: {
        title: "确定",
        handelClick: () => {
          console.log("222222222222");
          this.$router.push({ name: "setting" });
        }
      },
      wrapConfig: {
        head: {
          backFn: () => {
            this.$router.go(-1);
          },
          title: "实名认证"
        }
      },
      inputConfig:{
        conf1:{
          key:0,
          contenTitle1:'请输入你的真实姓名',
          contenTitle2:'请输入你的证件号码'
        },
        // conf1:{
        //   key:1,
        //   contenTitle3:'请输入你的证件号码呀呀呀'
        // }
      }
    };
  }
};
</script>

<style scpoed lang="less">
.name-content {
  padding: 0 20px 0 20px;
  .input_content {
    .firstinput {
      width: 100%;
      input {
        width: 100%;
        font-size: 17px;
        font-weight: 400;
        color: #b3b3b3ff;
        border-right: 0;
        border-left: 0;
        border-top: 0;
        outline: none;
        border-bottom-color: #eeeeeeff;
        padding-bottom: 10px;
        margin-bottom: 30px;
      }
    }
    .twoinput {
      width: 100%;
      input {
        width: 100%;
        font-size: 17px;
        font-weight: 400;
        color: #b3b3b3ff;
        border-right: 0;
        border-left: 0;
        border-top: 0;
        outline: none;
        border-bottom-color: #eeeeeeff;
        padding-bottom: 10px;
      }
    }
  }
  .sure {
    width: 100%;
    height: 44px;
    background: linear-gradient(
      168deg,
      rgba(10, 114, 184, 1) 0%,
      rgba(10, 114, 184, 1) 0%,
      rgba(18, 49, 131, 1) 100%
    );
    border-radius: 22px;
    font-size: 17px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 44px;
    text-align: center;
    margin-top: 51px;
  }
}
</style>