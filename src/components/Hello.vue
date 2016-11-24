<template>
  <div class="hello">
    <h1 v-text='msg'></h1>
    <input placeholder="hello" v-model='addmsg' v-on:keyup.enter='additem' />
    <button type="button" @click="clear()"> 清除</button>
    <ol>
      <li v-for='item in items' :class="{ active: item.isActive }" @click="change(item)">
        {{item.name}}
      </li>
    </ol>

    <h3>模态框组件</h3>
    <button type="button" @click='showModal = true'>show model</button>
    <!--<modal v-if='showModal' @close='showModal = false' :show-modal.sync="showModal">-->
    <modal v-if='showModal' @close='showModal = false'>
      <h3 slot='header'> custom header</h3>
    </modal>

    <h3>练习</h3>
    <button type="button" @click='showmymodal = true'>show mymodal </button>
    <mymodal v-if='showmymodal' @close='showmymodal = false'></mymodal>

    <h3>动态路由</h3>
    <div v-for='item in content'>
    <router-link :to="{name:'params',params:{ id:item.id}}">
    <!--<router-link to="/params/1">-->
      <p>{{item.title}}</p>
    </router-link>
    </div>
    <h3>嵌套路由</h3>
    <router-link to="/parent">parent</router-link>
    <router-link to="/parent/foo">foo</router-link>
    <router-link to="/parent/bar">bar</router-link>
    <router-link to="/">123</router-link>
    <h3>导航钩子</h3>
    <router-link to="/navigation">nav</router-link>
    <div class="form">
      <input type="checkbox" id="checkbox1" v-model="checked">
      <label for="checkbox1">{{ checked }}</label>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames1">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames1">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames1">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames1 | json }}</span>

      <input type="radio" id="radio1" v-model='checked2' value="one">
      <label for="radio1">one</label>
      <input type="radio" id="radio2" v-model='checked2' value="two">
      <label for="radio2">two</label>
      <span>picked:{{checked2}}</span>
    </div>
  </div>
</template>

<script>
import Store from '../store.js'
import modal from './modal.vue'
import mymodal from './mymodal.vue'
//console.log(Store)
export default {
  name: 'hello',
  components:{
    modal,
    mymodal,
  //  item
  },
  data () {
    return {
      msg: 'this is a todolist',
      active: '',
      addmsg: '',
      show: true,
      items: Store.fetch(),
      showModal: false,
      showmymodal: false,
     //treeData: data,
     checked:'false',
     checkedNames1:[],
     checked2:'',
     content:[
       {
       id:0,
       title:'one'
     },
     {
       id:1,
       title:'two'
     }
     ]
    }
   },
   watch:{
     items: {
       handler: function (items){
         Store.save(items)
         console.log(items)
       },
       deep: true
     }
   },
  methods: {
    change: function (item) {
      item.isActive = !item.isActive
    },
    additem: function () {
      this.items.push({
        name: this.addmsg,
        isActive: false
      })
      this.addmsg = ''
      Store.save()
    },
    clear: function (){
      this.items = []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  #hello {
    margin: 0 auto;
  }
  
  ol {
    /*list-style-type: none;*/
    padding: 0;
    width: 200px;
    margin: 0 auto;
  }
  
  li {
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .active {
    text-decoration: line-through;
  }
  
  .item {
    cursor: pointer;
  }
  
  .form {
    width: 300px;
    background: #eee;
    margin: 0 auto;
  }
</style>