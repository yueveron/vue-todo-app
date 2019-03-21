var store = {
    debug: false,
    state: {
       list: [
          {
            id: 0,
            text: 'clean the house'
          },
          {
            id: 1,
            text: 'buy milk'
          }
      ]
    },
    mutation: {
      addToList (todoItem) {
        if (store.debug) console.debug(' 调用 addToList :' + todoItem.id);
        store.state.list.push(todoItem);
        console.debug(store.state.list)
      },
      removeFromList(todoItem){
        if (store.debug) console.debug(' 调用 removeFromList :' + todoItem.id);
        // find todoIitem's index inside list
        let indexToDelete = store.state.list.indexOf(todoItem);
        store.state.list.splice(indexToDelete, 1);
        console.debug(store.state.list)
      }
    }
};

export default store;