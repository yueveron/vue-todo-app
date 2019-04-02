<template>
  <div>
    <div class="ToDo">
      <h1 class="ToDo-Header">Vue To Do</h1>
      <div class="ToDo-Container">
        <div class="ToDo-Content">
          <TodoItem
            v-for="item in list"
            :todo="item"
            @delete="onDeleteItem"
            :key="item.id"
          >
          </TodoItem>
        </div>

        <div>
          <div class="select-module-type">
            <span>
              <input type="radio" value="0" v-model="picked" />
              <label for="one">标题模版</label>
            </span>

            <span>
              <input type="radio" value="1" v-model="picked" />
              <label for="two">段落模版</label>
            </span>
          </div>
          <input
            type="text"
            class="text-input"
            v-model="todoText"
            v-on:keyup.enter="createNewToDoItem"
          />
          <div class="ToDo-Add" @click="createNewToDoItem()">+</div>
        </div>
      </div>
    </div>

    <div class="block">
      <button @click="clickGetList">get list</button>
      <p>
        $store.getters.list :<br />
        {{ $store.getters.list }}
      </p>
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
  computed: {
    list () {
      return this.$store.getters.list
    }
  },
  data () {
    return {
      todoText: '',
      picked: 0
    }
  },
  mounted () {
  },
  methods: {
    createNewToDoItem () {
      if (!this.todoText) {
        alert("Please enter a todo!");
        return
      }
      // newId 必须是唯一值，产生条件：1.查找 item.id 最大值 + 1 产生 2.如果没有任何 item 则为 0
      const newId = Math.max(Math.max.apply(null, this.list.map(t => t.id)) + 1, 0);
      const newItem = {
        id: newId,
        type: this.picked,
        data: {
          text: this.todoText
        }
      }
      //
      this.$store.commit('addToList', newItem)
      //
      this.todoText = ''
    },
    onDeleteItem (delItem) {
      this.$store.commit('removeFromList', delItem)
    },
    clickGetList (evt) {
      console.debug(this.$store.getters.list)
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
.text-input {
  width: 60%;
  padding: 10px;
  font-size: 1em;
  margin: 10px auto;
  box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.3);
}
.select-module-type {
  span {
    display: inline-block;
    margin: 5px;
  }
}
</style>
