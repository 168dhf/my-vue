<template>
  <div class="item-tabar">
    <ul>
      <li v-for="(item, index) in tabList" :key="index" @click="itemChecklist(item,index)">
        <img :src="isActive==index?item.imguRL2:item.imguRL1" class="indeximg" alt />
        <span :class="isActive==index?'item-active':''" class="noActive">{{item.intexText}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  components: {},
  props: ['config','isActive'],
  data() {
    return {
      tabList: [
        {
          index: 0,
          imguRL1: require('@/assets/images/index.png'),
          imguRL2: require('@/assets/images/index-elected.png'),
          intexText: '首页'
        },
        {
          index: 1,
          imguRL1: require('@/assets/images/class.png'),
          imguRL2: require('@/assets/images/class-elected.png'),
          intexText: '课程'
        },
        {
          index: 2,
          imguRL1: require('@/assets/images/my.png'),
          imguRL2: require('@/assets/images/my-elected.png'),
          intexText: '我的'
        }
      ]
    };
  },
  methods: {
    itemChecklist(item, index) {
      console.log('你点击了当前的index', item, index);
      // this.isActive=index;
      if(index === 0){
        this.$router.push({name:'indexcontent'})
      }else if(index === 1){
        this.$router.push({name:'course'})
      }else if(index === 2){
        this.$router.push({name:'myinformation'})
      }
    }
  },
};
</script>

<style scoped lang="less">
.item-tabar {
  ul {
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    width: 100%;
    border-top: 1px solid #f5f5f5ff;
    padding-bottom: 10px;
    // padding-top: 10px;
    background: #ffffff;
    li {
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        display: block;
        line-height: 14px;
        font-size: 10px;
        font-weight: 400;
      }
      /* 未选择 */
      .noActive {
        color: #b3b3b3ff;
      }
      /* 已经选择 */
      .item-active {
        color: #2da1dbff;
      }
    }
  }
}
</style>