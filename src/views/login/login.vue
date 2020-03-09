<template>
  <div class="login-content">
    <div class="login-img">
      <img src="~@/assets/images/logo.png" alt />
    </div>
    <div class="input_content">
      <div class="firstinput">
        <input type="text" placeholder="请输入你的账号" />
        <img src="~@/assets/images/close.png" alt />
      </div>
      <div class="twoinput">
        <input type="text" placeholder="请输入密码" />
        <img src="~@/assets/images/shape.png" alt />
        <img src="~@/assets/images/eyes.png" alt />
        <!-- <img src="~@/assets/images/shape.png" alt=""> -->
      </div>
    </div>
    <!-- <div class="login" @click="$router.push({name:'nameauthentication'})">登录</div> -->
    <Buttom :config="conf"></Buttom>
    <div class="forget">
      <div class="left">验证码登录</div>
      <div class="right">忘记密码?</div>
    </div>
    <div class="footer">
      <div class="left">
        <span>还没有账号</span>
        <span>去注册</span>
      </div>
      <div class="right">联系客服</div>
    </div>
  </div>
</template>

<script>
import Buttom from "@/components/buttom-compontens/buttom";
export default {
  name: "login",
  components: { Buttom },
  props: [],
  data() {
    return {
      conf: {
        title: "登录",
        handelClick:()=>{
          console.log('1111111111')
          this.$router.push({name:'settauthentication'})
        }
      }
    };
  }
};
</script>

<style scoped lang="less">
.login-content {
  margin-top: 50px;
  padding: 0 30px 0 30px;
  .login-img {
    margin-bottom: 47px;
    img {
      // background: url('~@/assets/images/logo.png') no-repeat;
      width: 202px;
      height: 28px;
    }
  }
  .input_content {
    .firstinput {
      width: 315px;
      position: relative;
      margin-bottom: 44px;
      input {
        width: 315px;
        font-size: 17px;
        font-weight: bold;
        color: #333333ff;
        border-right: 0;
        border-left: 0;
        border-top: 0;
        outline: none;
        border-bottom-color: #eeeeeeff;
        padding-bottom: 10px;
      }
      img {
        width: 13px;
        height: 13px;
        position: absolute;
        bottom: 10px;
        right: 0;
      }
    }
    .twoinput {
      position: relative;
      width: 315px;
      input {
        width: 315px;
        font-size: 17px;
        font-weight: bold;
        color: rgba(200, 200, 200, 1);
        border-right: 0;
        border-left: 0;
        border-top: 0;
        outline: none;
        border-bottom-color: #eeeeeeff;
        padding-bottom: 10px;
      }
      img:nth-of-type(1) {
        width: 20px;
        height: 13px;
        position: absolute;
        bottom: 10px;
        right: 21px;
        margin-right: 1px;
      }
      img:nth-of-type(2) {
        width: 20px;
        height: 13px;
        position: absolute;
        bottom: 10px;
        right: 0;
      }
    }
  }
  .login {
    margin-top: 44px;
    width: 315px;
    height: 44px;
    text-align: center;
    color: #ffffff;
    line-height: 44px;
    font-size: 17px;
    background: linear-gradient(
      269deg,
      rgba(10, 114, 184, 1),
      rgba(18, 49, 131, 1)
    );
    border-radius: 22px;
    margin-bottom: 30px;
  }
  .forget {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .left {
      font-size: 15px;
      font-weight: 500;
      color: rgba(200, 200, 200, 1);
    }
    .right {
      font-size: 15px;
      font-weight: 500;
      color: rgba(200, 200, 200, 1);
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 50px;
    .left {
      display: flex;
      span:nth-of-type(1) {
        font-size: 17px;
        font-weight: bold;
        color: rgba(153, 153, 153, 1);
        margin-right: 10px;
      }
      span:nth-of-type(2) {
        font-size: 17px;
        font-weight: bold;
        color: #2da1dbff;
      }
    }
    .right {
      font-size: 17px;
      font-weight: bold;
      color: #2da1dbff;
      margin-left: 96px;
    }
  }
}
</style>