import * as util from '@/utils/util'

var store = {
    debug: true,
    state: {
       list: [
          {
            id: 0,
            type : 0,
            data : {
              text: '标题模块文字'
            }            
          },
          {
            id: 1,
            type : 1,
            data : {
              text: '段落模块文字'
            }   
          }
      ]
    },
    mutation: {
      /** Add Item */
      addToList (todoItem) {
        if (store.debug) console.debug(' 调用 addToList :' + todoItem.id);
        store.state.list.push(todoItem);
        // console.debug(store.state.list)
      },
      /** Delete Item */
      removeFromList(todoItem){
        if (store.debug) console.debug(' 调用 removeFromList :' + todoItem.id);
        // find todoIitem's index inside list
        let indexToDelete = store.state.list.indexOf(todoItem);
        store.state.list.splice(indexToDelete, 1);
        // console.debug(store.state.list)
      },
      /** Sort Item */
      sortableList(newIndex, oldIndex){
        if (store.debug) console.debug(' 调用 sortableList :' + newIndex, oldIndex);
        store.state.list = util.moveItemFromTo(store.state.list, oldIndex, newIndex)
        // console.debug(store.state.list)
      }
    }
};

export default store;