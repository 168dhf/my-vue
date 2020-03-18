<template>
  <div class="video-content">
    <div class="toptitle">{{videotTitle}}</div>
    <div class="list">
      <div class="left">
        <img src="~@/assets/images/default-video.png" alt />
        <div class="title">区块链的价值</div>
        <span>免费</span>
        <span>4687万人观看</span>
      </div>
      <div class="right">
        <img src="~@/assets/images/python.png" alt />
        <div class="title">区块链的价值</div>
        <span>100积分</span>
        <span>4687万人观看</span>
      </div>
    </div>
    <!-- 查看更多按钮 -->
    <Check></Check>
  </div>
</template>

<script>
import Check from '@/components/buttom-compontens/checkmore'
export default {
  name: "recommendedvideo",
  components: {Check},
  props: [],
  data() {
    return {
      videotTitle: "视频推荐"
    };
  }
};
</script>

<style scoped lang="less">
.video-content {
    padding-left: 15px;
    padding-right: 15px;
  .toptitle {
    font-size: 17px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
  }
  .list {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      margin-bottom: 30px;
    .left {
      img {
        width: 168px;
        height: 90px;
      }
      .title {
        font-size: 15px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      span:first-of-type {
        font-size: 12px;
        font-weight: 400;
        color: rgba(45, 161, 219, 1);
        line-height: 17px;
        margin-right: 20px;
      }
      span:last-of-type {
        font-size: 12px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
    }
    .right {
      img {
        width: 168px;
        height: 90px;
      }
      .title {
        font-size: 15px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
      }
      span:first-of-type {
        font-size: 12px;
        font-weight: 400;
        color: rgba(45, 161, 219, 1);
        margin-right: 20px;
      }
      span:last-of-type {
        font-size: 12px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
    }
  }
}
</style>