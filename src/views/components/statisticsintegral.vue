<template>
  <div class="content-container">
    <div class="top">
      <div class="left">积分</div>
      <div class="rght">
        <img src="~@/assets/images/jifenbgm.png" alt />
        积分兑换
      </div>
    </div>
    <div class="jifentongji">
      <div class="left">
        <div class="count-jifen">
          我的积分
          <span>688</span>
        </div>
      </div>
      <div class="right">
        <div class="paiming">
          排名
          <span>12</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statisticsintegral",
  components: {},
  props: [],
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.content-container {
  width: 92%;
  height: 139px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 25px 0px rgba(175, 196, 223, 0.3);
  border-radius: 8px;
  position: absolute;
  top: 172px;
  margin: 0 15px 0 15px;
  .top {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 0 15px;
    .left {
      font-size: 21px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
    }
    .rght {
      width: 83px;
      height: 23px;
      background: linear-gradient(
        266deg,
        rgba(255, 201, 0, 1) 0%,
        rgba(255, 154, 0, 1) 100%
      );
      box-shadow: 0px 2px 5px 0px rgba(254, 142, 45, 0.5);
      border-radius: 12px 0px 0px 12px;
      font-size: 12px;
      color: #ffffff;
      line-height: 23px;
      padding: 4px 7px 3px 10px;
      img {
        width: 13px;
        height: 13px;
        vertical-align: middle;
      }
    }
  }
  .jifentongji {
    display: flex;
    padding: 20px 0 0 15px;
    .left {
      .count-jifen {
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
        margin-right: 125px;
        span {
          display: block;
          font-size: 17px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
        }
      }
    }
    .right {
      .paiming {
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
        span {
          display: block;
          font-size: 17px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
        }
      }
    }
  }
}
</style>