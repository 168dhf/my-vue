<template>
  <div class="content">
    <div class="input_content" v-if="config.conf1.key == 0">
      <div class="firstinput">
        <input type="text" :placeholder="config.conf1.contenTitle1" />
      </div>
      <div class="twoinput">
        <input type="text" :placeholder="config.conf1.contenTitle2" />
      </div>
    </div>
    <div class="input2_content" v-else>
      <div class="threeinput">
        <input type="text" :placeholder="config.conf1.contenTitle3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inPut",
  components: {},
  props: ["config"]
};
</script>

<style scoped lang="less">
.content {
  padding: 0 20px 0 20px;
  .input_content {
    .firstinput {
      width: 100%;
      input {
        width: 100%;
        font-size: 17px;
        font-weight: 400;
        color: #b3b3b3ff;
        border-right: 0;
        border-left: 0;
        border-top: 0;
        outline: none;
        border-bottom-color: #eeeeeeff;
        padding-bottom: 10px;
        margin-bottom: 30px;
      }
    }
    .twoinput {
      width: 100%;
      input {
        width: 100%;
        font-size: 17px;
        font-weight: 400;
        color: #b3b3b3ff;
        border-right: 0;
        border-left: 0;
        border-top: 0;
        outline: none;
        border-bottom-color: #eeeeeeff;
        padding-bottom: 10px;
      }
    }
  }
  .input2_content {
    .threeinput {
      width: 100%;
      input {
        width: 100%;
        font-size: 17px;
        font-weight: 400;
        color: #b3b3b3ff;
        border-right: 0;
        border-left: 0;
        border-top: 0;
        outline: none;
        border-bottom-color: #eeeeeeff;
        padding-bottom: 10px;
      }
    }
  }
}
</style>