<template>
  <div class="course-content">
      我的课程
      <Tabbar isActive='1'></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/views/components/tabBar";
export default {
    name:'course',
    components:{Tabbar},
    props:[],
    data(){
        return{}
    }

}
</script>

<style>

</style>