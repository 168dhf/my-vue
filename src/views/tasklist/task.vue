<template>
  <div class="content">
    <!-- 背景图 -->
    <Topbgm></Topbgm>
    <!-- 积分统计 -->
    <Statisticsintegral></Statisticsintegral>
    <!-- 新手任务 -->
    <Newtask></Newtask>
    <!-- 每日任务 -->
    <Everydaytask></Everydaytask>
  </div>
</template>

<script>
import Topbgm from "@/views/components/topbgm";
import Statisticsintegral from "@/views/components/statisticsintegral";
import Newtask from "@/views/components/newtask";
import Everydaytask from "@/views/components/everydaytask";
export default {
  name: "taks",
  components: { Topbgm, Statisticsintegral, Newtask, Everydaytask},
  props: [],
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.content {
  padding-bottom: 15px;
}
</style>