<template>
  <div class="ToDoItem">
    <!-- Header  -->
    <div class="header">
      <h3>{{typeName}}</h3>
      <button class="ToDoItem-Delete"
         @click="deleteItem(todo)"> -
      </button>
    </div>
    
    <!-- Content of 动态组件 -->
    <div class="content">
      <component v-bind:is="currentComp" :itemdata="todo.data"></component>
      <!-- <ModuleTitle :itemdata="todo.data"></ModuleTitle> -->
      <!-- <ModuleArticle :itemdata="todo.data"></ModuleArticle> -->
    </div>
      
  </div>
</template>

<script>

import ModuleTitle from '@/components/module/ModuleTitle.vue'
import ModuleArticle from '@/components/module/ModuleArticle.vue'

export default {
  name: 'ToDoItem',
  components : {
    ModuleTitle,
    ModuleArticle  
  },
  props: {
    todo: Object
  },
  computed: {
    typeName: function(){
      var title = ''
      if(this.todo.type == 0){
        title = '标题模块'
      }else if(this.todo.type == 1){
        title = '段落模块'
      }
      return title;
    },
    currentComp () {
      let currComp = '';
      if(this.todo.type == 0){
        currComp = 'ModuleTitle'
      }else if(this.todo.type == 1){
        currComp = 'ModuleArticle'
      }
      return currComp;
    }
  },
  methods: {
      deleteItem(todo) {
        this.$emit('delete', todo)
      }
  }
}
</script>

<style scoped lang="scss">
.ToDoItem {
  display:block;
  padding:0px;
  margin-bottom:20px;
  border:1px solid #999;
}

.header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding:5px;
  h3{
    margin-right:20px;
  }
  margin-bottom:10px;
  background-color:#999;
}

.content{
  padding:5px 10px;
}

.ToDoItem-Text {
    width: 100%;
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 1px 1px 1px lightgrey;
    padding: 12px;
    margin-right: 10px;
    margin-bottom : 10px;
}
.ToDoItem-Delete {
    width: 20px;
    padding: 5px;
    height: 20px;
    cursor: pointer;
    background: #ff7373;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #c70202;
    color: white;
    font-size: 18px;
    margin-right: 5px;
}
.ToDoItem-Delete:hover {
    box-shadow: none;
    margin-top: 1px;
    margin-left: 1px;
}
</style>
