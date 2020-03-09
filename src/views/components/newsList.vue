<template>
  <div class="newslist">
    <van-tabs v-model="active">
      <van-tab title="系统公告">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad"
        >
          <div class="newscontent">
            <ul>
              <li
                v-for="(item, index) in systemList"
                :key="index"
                @click="$router.push({name:'newsdetail',query:{nwesId:item.newsId}})"
              >
                <div class="left">
                  <div class="title">{{item.titleName}}</div>
                  <div class="time">{{item.time}}</div>
                </div>
                <div class="tip">
                  <span>{{item.tip}}</span>
                </div>
              </li>
            </ul>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="站内信">
        <div class="newscontent">
          <ul>
            <li v-for="(item, index) in innformationStationlist" :key="index">
              <div class="left">
                <div class="title">{{item.titleName}}</div>
                <div class="time">{{item.time}}</div>
              </div>
              <div class="tip">
                <span>{{item.tip}}</span>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="俱乐部信息">
        <div class="newscontent">
          <ul>
            <li v-for="(item, index) in clublist" :key="index">
              <div class="left">
                <div class="title">{{item.titleName}}</div>
                <div class="time">{{item.time}}</div>
              </div>
              <div class="tip">
                <span>{{item.tip}}</span>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  components: {},
  props: ['config'],
  data() {
    return {
      loading: false,
      finished: false,
      error: false,

      active: 0,
      systemList: [
        {
          newsId: 0,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 1,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 2,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 3,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 4,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 5,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 6,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 7,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        },
        {
          newsId: 8,
          titleName: '系统升级提醒',
          time: '2019.07.23 09:23:50',
          tip: '我是一条升级内容，这里是升级文案！'
        }
      ],
      innformationStationlist: [
        {
          titleName: '站内信息',
          time: '2019.07.23 09:23:50',
          tip: '站内信的信息'
        }
      ],
      clublist: [
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        },
        {
          titleName: '俱乐部名称',
          time: '2019.07.23 09:23:50',
          tip: '站内信的文案'
        }
      ]
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
    //   this.systemList();
    }
  }
};
</script>

<style scoped lang="less">
.newscontent {
  ul {
    padding-left: 15px;
    padding-right: 15px;
    li {
      margin-top: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f3f3f3ff;
      .left {
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 14px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
        .time {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
      .tip {
        span {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
}
</style>