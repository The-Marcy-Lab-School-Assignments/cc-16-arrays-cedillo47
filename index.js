//write your code here
function replaceWithYerr(arr,start = 0, end = arr.length -1 ){
let newArr = [];
for(let i = 0; i < arr.length ; i++){
  if (i >= start && i < start + end ){
    newArr.push('yer')  
   } else{
       newArr.push(arr[i])
   }
  } 
  return newArr
 }
 
const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
console.log(replaceWithYerr(months,2,2))
