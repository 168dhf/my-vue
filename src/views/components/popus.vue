<template>
  <van-dialog
    v-model="show"
    show-cancel-button
    :confirm-button-text="this.confirmtitle"
    :confirm-button-color="this.confirmcolor"
    :close-on-click-overlay="this.overlay"
    @confirm="confirm"
    @cancel="cancel"
  >
    <template v-slot:title>
      <div class="currencyTitle">{{classTitle}}</div>
      <div class="inputcontainer">
        <input v-model="codeCourse" type="text" :placeholder="enterCode" />
      </div>
      <div class="addcourse">{{addcourse}}</div>
      <div class="detail">{{detailTitle}}</div>
    </template>
  </van-dialog>
</template>

<script>
export default {
  name: 'popus',
  components: {},
  props: [],
  data() {
    return {
      confirmtitle: '立即兑换',
      confirmcolor: '#FFFFFf',
      show: false,
      overlay: true,
      classTitle: '课程兑换码',
      enterCode: '请输入兑换码',
      addcourse: '+ 添加兑换码',
      codeCourse: '',
      detailTitle:
        '支持多个兑换码兑换，每个兑换码一行，添加兑换码点击“添加兑换码”即可；'
    };
  },
  methods: {
      confirm(){
          console.log('你点击了确定',this.codeCourse)
          if(this.codeCourse == ''){
              this.show=true;
          }
      },
      cancel(){
          console.log("你点击了取消")
      }
    // beforeClose(action, done) {
    //     // if(this.codeCourse == ''){
    //     //      done(false) //不关闭弹框
    //     // }
    //     console.log('1023456789')
    //   if (action === 'confirm') {
    //     console.log('你点击了确定');
    //     done(false)
    //   } else if (action === 'cancel') {
    //     done(); //关闭
    //   }
    // }
  }
};
</script>

<style scoped lang="less">
.currencyTitle {
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
  margin-bottom: 25px;
}
.inputcontainer {
  width: 275px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 216, 216, 1);
  opacity: 1;
  border-radius: 4px;
  margin: 0 auto;
  input {
    width: 275px;
    height: 40px;
    opacity: 1;
    border-radius: 4px;
    text-align: center;
    background: none;
    outline: none;
    border: none;
  }
}
.addcourse {
  width: 275px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(45, 161, 219, 1);
  opacity: 1;
  border-radius: 4px;
  margin: 0 auto;
  line-height: 40px;
  color: #2da1dbff;
  margin-top: 15px;
}
.detail {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(153, 153, 153, 1);
  opacity: 1;
  margin-top: 10px;
  text-align: justify;
  width: 275px;
  margin-left: 24px;
}
/deep/ .van-dialog__confirm {
  width: 160px;
  height: 50px;
  background: linear-gradient(
    90deg,
    rgba(10, 114, 184, 1) 0%,
    rgba(10, 114, 184, 1) 49%,
    rgba(18, 49, 131, 1) 100%
  );
}
/deep/ .van-dialog__cancel {
  width: 160px;
  height: 50px;
  background: rgba(243, 243, 243, 1);
  opacity: 1;
  border-radius: 0px 0px 0px 8px;
}
</style>