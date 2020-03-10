<template>
  <div class="head-top">
    <div class="header" v-if="config.head" :class="{primary: config.type==='white'}">
      <div class="head-left" v-if="config.head.backFn" @click="config.head.backFn()">
        <ArrowIcon :type="config.type"></ArrowIcon>
      </div>

      <div class="head-title">{{config.head.title}}</div>
      <div class="head-right">
        <slot name="headRight"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "./ArrowIcon";
export default {
  name: "heade",
  components: { ArrowIcon },
  props: ["config"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.head-top{
  padding-left: 15px;
  padding-right: 15px;
}
.header {
  position: relative;
  z-index: 100;
}
.head-left {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
//   height: 60px;
//   width: 60px;
}

.head-right {
  font-size: 14px;
  line-height: 60px;
  padding: 0 10px;
  position: absolute;
  top: 0;
  right: 0;
  .icon {
    padding: 20px 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}

.head-title {
  text-align: center;
  padding: 0 60px;
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
  height: 60px;
}
</style>