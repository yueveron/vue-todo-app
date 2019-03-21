<template>
  <div>
    <div class="ToDo">
      <h1 class="ToDo-Header">Vue To Do</h1>
      <div class="ToDo-Container">
        <div class="ToDo-Content">
          <TodoItem v-for="todo in list" 
                    :todo="todo" 
                    @delete="onDeleteItem"
                    :key="todo.id">
          </TodoItem>
        </div>
        <input type="text" v-model="todoText" v-on:keyup.enter="createNewToDoItem"/>
        <div class="ToDo-Add" @click="createNewToDoItem()">+</div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/ToDoItem.vue'

export default {
  name: 'WorkPlace',
  components: {
    TodoItem
  },
  data(){
    return {
      list: this.store.state.list,
      todoText: ''
    }
  },
  methods: {
      createNewToDoItem() {
        if (!this.todoText){
          alert("Please enter a todo!");
          return
        }
        const newId = Math.max(Math.max.apply(null, this.list.map(t => t.id)) + 1, 0);
        const newItem = { id: newId, text: this.todoText}
        //
        this.store.mutation.addToList(newItem);
        //
        this.todoText = ''
      },
      onDeleteItem(delItem){
        this.store.mutation.removeFromList(delItem);
      }
  },
}
</script>

<style scoped lang="scss">
  .ToDo {
    text-align: center;
    border: 1px solid white;
    width: 100%;
    height: auto;
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.5);
    background: #f6f6f6;
    padding-bottom: 60px;
    margin: 40px auto;
  }
  .ToDo-Header {
    color: black;
    font-weight: 400;
    margin: 70px auto 30px;
  }
  .ToDo-Add {
    color: white;
    font-size: 2em;
    width: 0.5em;
    height: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    background: #73ff73;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #47a947;
    margin: 20px auto 0;
  }
  .ToDo-Add:hover {
    box-shadow: none;
    //margin-top: 21px;
  }
  .ToDo-Container {
    width: 80%;
    margin: 0 auto;
  }
  input {
    width: 60%;
    padding: 10px;
    font-size: 1em;
    margin: 10px auto;
    box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.3)
  }
</style>
