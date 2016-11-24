<template>
  <div>
      <h3>树形视图</h3>
    <ul id="demo">
      <item class="item" :model='treeData'>
      </item>
    </ul>
  </div>
</template>

<script>
  import mydata from'./mydata.js'
  import item from './item.vue'
  export default{
    components:{
      item,
    },
    data(){
      return{
        treeData:mydata,
      }
    },
    mounted () {
      console.log(mydata)
    }
  }
</script>