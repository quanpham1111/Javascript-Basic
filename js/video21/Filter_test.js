//array
let arrNum = [0,1,2,3,4,5,6,7,8,9];
let arrName = ['Pham','Nguyen','Quan'];
//Filter number
let filterNum = arrNum.filter((item,index)=>{
  console.log("check array: item:",item,'index:',index)
  return item && item >5;
});
console.log('Numbers are higher than 5:',filterNum);
//Filter name
let filterName = arrName.filter((item)=>{
  console.log('Strings in array:',item);
  return item &&item.length>5;
});
console.log('String lenght are higher than 5',filterName);
//---------------------
//find
let findNum = arrNum.find((item,index)=>{
  return item && item>3;
});
console.log('The first number is higher than 3',findNum);