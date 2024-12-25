//sort 
const arr= [ 1,1000,20,4]; 
arr.sort((item1,item2) =>{ console.log(item1,item2)
    return item2 -item1; } ); 
    console.log(` sắp xếp mảng theo thứ tự tăng dần:`,arr);
//Another way
const array=[1,10000,20,4];
array.sort((item1,item2)=> item1 -item2);
console.log(array);