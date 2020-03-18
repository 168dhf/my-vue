<template>
  <div class="checkmore">
    <div class="more">
      {{checkmore}}
      <img src="@/assets/images/boult.png" alt />
    </div>
    <div class="change">
      {{changetitle}}
      <img src="@/assets/images/refresh.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "checkmore",
  components: {},
  props: [],
  data() {
    return {
        checkmore:'查看更多',
        changetitle:'换一批'
    };
  }
};
</script>

<style scoped lang="less">
.checkmore {
    display: flex;
    justify-content: center;
  .more {
    width: 90px;
    height: 30px;
    background: rgba(243, 243, 243, 1);
    border-radius: 16px;
    font-size: 10px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 30px;
    text-align: center;
    margin-right: 20px;
    img{
        width: 5px;
        height: 8px;
    }
  }
  .change {
    width: 90px;
    height: 30px;
    background: rgba(243, 243, 243, 1);
    border-radius: 16px;
    font-size: 10px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 30px;
    text-align: center;
    img{
        width: 9px;
        height: 8px;
    }
  }
}
</style>