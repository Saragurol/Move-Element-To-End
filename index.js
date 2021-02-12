// O(n) - Time | O(1) - Space
function moveElementToEnd(array, toMove) {
  let last = array.length-1;
  for(let i = array.length-1; i >= 0; i--){
    if(array[i] === toMove){
      swap(array, i, last);
      last--;
    }
  }
  return array;
}
moveElementToEnd([2,1,2,2,2,3,4,2], 2)

function swap(array, idx, lastIdx){
  let temp = array[lastIdx];
  array[lastIdx] = array[idx];
  array[idx] = temp;
  return array;
}