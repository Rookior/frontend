<template>
    <div id="b">
        hi {{msg}}
    </div>
</template>
<script>

export default {
  data () {
    return {
      msg: 'there is b.vue'
    }
  }
}
var a = [1,2,3,4,5];
a.map(item=>{
  console.log(item)
})
</script>
<style lang="less" scoped>
@import './b.css';
#b{
    color: #0f0;
}
</style>
