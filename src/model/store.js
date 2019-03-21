var store = {
    debug: false,
    state: {
       list: [
          {
            id: 1,
            text: 'clean the house'
          },
          {
            id: 2,
            text: 'buy milk2'
          }
      ]
    },
    mutation: {
      addToList (todoItem) {
        if (store.debug) console.debug(' 调用 addToList :' + todoItem.id);
        // this.list.push({ id: newId, text: this.todoText});
        store.state.list.push(todoItem);
      },
      removeFromList(todoItem){
        if (store.debug) console.debug(' 调用 removeFromList :' + todoItem.id);
        // find todoIitem's index inside list
        let indexToDelete = store.state.list.indexOf(todoItem);
        store.state.list.splice(indexToDelete, 1);
      }
    }
};

export default store;