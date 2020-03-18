<template>
  <div class="notescontent">
    <div class="toptitle">{{notesTitle}}</div>
    <!-- 查看更多按钮 -->
    <ul>
      <li>
        <img src="~@/assets/images/default-notes.png" alt />
        <span>中国历史未解之谜</span>
        <span>免费</span>
      </li>
      <li>
        <img src="~@/assets/images/takenotes.png" alt />
        <span>中国历史未解之谜</span>
        <span>积分</span>
      </li>
      <li>
        <img src="~@/assets/images/takenotes.png" alt />
        <span>中国历史未解之谜</span>
        <span>积分</span>
      </li>
    </ul>
    <!-- 查看更多按钮 -->
    <Check></Check>
  </div>
</template>

<script>
import Check from "@/components/buttom-compontens/checkmore";
export default {
  name: "recommendnotes",
  components: { Check },
  props: [],
  data() {
    return {
      notesTitle: "手记推荐"
    };
  }
};
</script>

<style scoped lang="less">
.notescontent {
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 30px;
  .toptitle {
    font-size: 17px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    li {
      margin-top: 15px;
      margin-bottom: 30px;
      img {
        width: 90px;
        height: 120px;
      }
      span:first-of-type {
        font-size: 12px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 17px;
        display: block;
        width: 90px;
        margin-bottom: 5px;
      }
      span:last-of-type {
        font-size: 12px;
        font-weight: 400;
        color: rgba(45, 161, 219, 1);
        line-height: 17px;
        display: block;
      }
    }
  }
}
</style>