<template>
  <div id="params">
    <div id="one">
      123
      <h1>{{content.title}}</h1>
      <p>{{content.name}}</p>
      <p>{{content.id}}</p>
    </div>
  </div>
</template>

<script>
var remotedata=[
  {
    id:0,
    title:'one',
    name:'lucy'
  },
  {
    id:1,
    title:'two',
    name:'lily'
  }
  ];
  export default {
    data() {
      return{
        content: {}
      }
    },
    methods: {
      loadData(){
        this.content= remotedata[this.$route.params.id]
      }
    },
    watch: {
      $route(){
        this.loadData()
      }
    },
    mounted(){
      this.loadData()      
    }
  }
</script>