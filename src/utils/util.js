// Get : All Books List
const moveItemFromTo = (arr, oldIndex, newIndex) => {
  var item = arr[oldIndex];
  arr.splice(oldIndex, 1);
  arr.splice(newIndex, 0, item);
  return arr;
}

export{
  moveItemFromTo
}