<template>
  <div class="login-content">
    <div class="login-img">
      <img src="~@/assets/images/logo.png" alt />
    </div>
    <div class="input_content">
      <div class="firstinput">
        <input
          v-model="account"
          @input="changeInput()"
          id="myInput"
          type="text"
          placeholder="请输入你的账号"
        />
        <img @click="clearn()" src="~@/assets/images/close.png" alt />
      </div>
      <div class="twoinput">
        <input v-model="password" :type="pwdType" id="demoInput" placeholder="请输入密码" />
        <img @click="noseePassword()" src="~@/assets/images/shape.png" alt />
        <img @click="seePassword()" src="~@/assets/images/eyes.png" alt />
      </div>
    </div>
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
import { Dialog } from 'vant';
import Buttom from '@/components/buttom-compontens/buttom';
export default {
  name: 'login',
  components: { Buttom },
  props: ['config'],
  data() {
    return {
      account: '', //账号
      password: '', //密码
      reg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/,
      pwdType: 'password',
      conf: {
        title: '登录',
        handelClick: () => {
          console.log('我是', this.account, this.password);
          if (this.account == '' || this.password == '') {
            Dialog.confirm({
              message: '用户名和密码不能为空',
              closeOnClickOverlay: true
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              });
          } else if (this.password.length <= 8) {
            Dialog.confirm({
              message: '密码长度不能小于或等于8位数字或字符',
              closeOnClickOverlay: true
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              });
          } else if (!this.reg.test(this.password)) {
            Dialog.confirm({
              message: '请输入8位以上密码，密码中必须同时包含数字、字母',
              closeOnClickOverlay: true
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              });
          } else {
            this.$router.push({ name: 'indexcontent' });
          }
        }
      }
    };
  },
  methods: {
    //清楚input数据
    clearn() {
      this.account = '';
    },
    //监听input输入值的变化并获取
    changeInput(account) {
      console.log(this.account);
      let value = document.getElementById('myInput').value;
      console.log('我是value', value);
    },
    //可看密码
    seePassword() {
      this.pwdType = 'password' ? 'text' : 'password';
    },
    //不可看密码
    noseePassword() {
      this.pwdType = !this.pwdType === 'password' ? 'text' : 'password';
    }
  },
  computed: {},
  created() {},
  mounted() {},
  /* 我就是测试 */
};
</script>

<style scoped lang="less">
.login-content {
  margin-top: 50px;
  // padding: 0 30px 0 30px;
  .login-img {
    margin-bottom: 47px;
    padding-left: 30px;
    padding-right: 30px;
    img {
      // background: url('~@/assets/images/logo.png') no-repeat;
      width: 202px;
      height: 28px;
    }
  }
  .input_content {
    padding-left: 30px;
    padding-right: 30px;
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
    padding-left: 30px;
    padding-right: 30px;
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
    padding-left: 30px;
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