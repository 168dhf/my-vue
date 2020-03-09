<template>
  <div class="contenet">
    <div class="title">我是首页</div>
    <div class="button">
      <van-button loading type="info" loading-text="加载中..." />
      <van-button type="default" @click="$router.push({name:'login'})">默认按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: []
};
</script>

<style  scoped lang="less">
.contenet {
  .title {
    font-size: 60px;
    color: pink;
  }
}
</style>