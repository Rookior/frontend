<template>
  <div id="app">
      hello wzy
    <p class="yn-fontwzy">{{ name }}</p>
    <comb></comb>
  </div>
</template>

<script>
import comb from './b.vue'
export default {
  data () {
    return {
      name: 'my name is wzy'
    }
  },
  components:{
    comb
  }
}
</script>
<style lang="scss" scoped>
#app{
    color: #000;
    p{
        font-size: 20px;
    }
}
</style>

<style scoped lang="less" rel="stylesheet/less">
#app{
    color: #f00;
    p{
        font-size: 40px;
    }
}
</style>