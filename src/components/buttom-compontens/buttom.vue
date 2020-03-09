<template>
  <div class="sure" @click="!config.handelClick()">{{config.title}}</div>
</template>

<script>
export default {
  name: 'buttom',
  components: {},
  props: ['config']
};
</script>

<style scoped lang="less">
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
</style>