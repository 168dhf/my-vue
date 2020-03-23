<template>
  <div class="teacher-content">
    <div class="toptitle">{{teacherTitle}}</div>
    <!-- 查看更多按钮 -->
    <!-- 名师列表 -->
    <Teacher></Teacher>
    <!-- 底部按钮 -->
    <div class="check">
      <Check></Check>
    </div>
  </div>
</template>

<script>
import Check from "@/components/buttom-compontens/checkmore";
import Teacher from "@/views/components/teacherList";
export default {
  name: "recommendedteacher",
  components: { Check, Teacher },
  props: [],
  data() {
    return {
        teacherTitle:'名师推荐'
    };
  }
};
</script>

<style scoped lang="less">
.teacher-content {
  .toptitle {
    font-size: 17px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
    padding-left: 15px;
  }
  .check{
    margin-bottom: 30px;
  }
}
</style>