import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    list: [
      {
        id: 0,
        type: 0,
        data: {
          text: '标题模块文字'
        }
      },
      {
        id: 1,
        type: 1,
        data: {
          text: '段落模块文字'
        }
      }
    ]
  },
  mutations: {
    /** Add Item */
    addToList (state, todoItem) {
      state.list.push(todoItem);
    },
    /** Delete Item */
    removeFromList (state, todoItem) {
      // find todoIitem's index inside list
      const indexToDelete = state.list.indexOf(todoItem);
      state.list.splice(indexToDelete, 1);
    },
    /** Update Sort for :: vuedraggable */
    updateSortList (state, value) {
      state.list = value;
    },
    /** Update Sort for :: sort follow playbuzz */
    sortableList (state, newIndex, oldIndex) {
      var item = state.list[oldIndex];
      state.list.splice(oldIndex, 1);
      state.list.splice(newIndex, 0, item);
    }
  },
  getters: {
    list: state => state.list
  }
})