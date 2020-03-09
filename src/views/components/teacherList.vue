<template>
  <div>
    <ul>
      <li v-for="(item, index) in teacherList" :key="index" @click="changeList(index)">
        <div class="left">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="detail">{{item.detail}}</div>
          <div class="number">
            <span>{{item.number}}</span>
            <span>{{item.content}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        teacherList:[
            {index:0, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
            {index:1, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
            {index:2, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
            {index:3, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
            {index:4, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
            {index:5, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
            {index:6, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
            {index:7, imgUrl: require('@/assets/images/topteacher.png'), title:'窦文涛', detail:'圈内大咖、代表作品《区块链的价值》；知名区块链解说员。',number:'3567万人关注', content:'28条内容'},
        ],
    };
  },
  methods:{
    changeList(index){
      console.log('我是当前的index',index)
    }
  }
};
</script>

<style scoped lang="less">
div {
  ul {
      margin-top: 15px;
    li {
      display: flex;
      margin-bottom: 15px;
      .left {
        margin-right: 15px;
        img {
          width: 90px;
          height: 90px;
        }
      }
      .right {
        .title {
          font-size: 15px;
          font-weight: 500;
          color: #333333;
          margin-bottom: 10px;
        }
        .detail {
          font-size: 12px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 17px;
          margin-bottom: 10px;
        }
        .number {
          font-size: 12px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 17px;
          span:first-child::after {
            display: inline-block;
            content: "";
            width: 1px;
            height: 10px;
            background: #b3b3b3;
            margin-right: 15px;
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>