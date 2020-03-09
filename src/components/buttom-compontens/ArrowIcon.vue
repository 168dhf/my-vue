<template>
  <span :style="`transform: scale(${size || 1},${size || 1});`">
    <i class="radio-icon" :class="type"></i>
  </span>
</template>

<style scoped lang="less">
  .radio-icon {
    padding: 0 4px;
  }

  .radio-icon::before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 10px;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    transform: rotate(-45deg);
  }

  .radio-icon.white::before {
    border-left: 1px solid #ffffff;
    border-top: 1px solid #ffffff;
  }

  .left.radio-icon:before {
    transform: rotate(-45deg);
  }

  .top.radio-icon:before {
    transform: rotate(45deg);
  }

  .right.radio-icon:before {
    transform: rotate(135deg);
  }

  .bottom.radio-icon:before {
    transform: rotate(-135deg);
  }
</style>

<script>
  export default {
    name: 'ArrowIcon',
    components: {},
    props: ['size', 'type'],
    data() {
      return {}
    },
    methods: {},
    computed: {},
    watch: {},
    mounted() {
    }
  }
</script>
