//Filter and Find on Array Methods
//Array
let arrName = ['quan','nguyen','pham'];
let arrNum = [2,2,3,4,5,6,7,8,9];
//filter number
let filterNum = arrNum.filter((item,index)=>{
    console.log(`Check Filter: Index`,index,`Item`,item);
    return item && item > 5;

}
);
console.log(filterNum);
    //filter name
let filterName = arrName.filter((word)=>{
    return word && word.length>5;
}
);
console.log(`Words in Array:`,arrName)
console.log(`word length bigger than 5:`,filterName);
    //filter with object
let arrobj = [
    {name: `quan`,Age:25},
    {name: `huy`,Age:26},
    {name: `nam`,Age:27},
    {name: `chien`,Age:24},
    {name: `minh`,Age:25},
]
let filterObj = arrobj.filter((infor,index)=>{
    return infor &&infor.Age === 25;
});
console.log(`Employee have Age  equal 25:`,filterObj);
//------------------------------------------------------------
// //find 
let arrFind = [
    {name: `quan`,Age:25},
    {name: `huy`,Age:26},
    {name: `nam`,Age:27},
    {name: `chien`,Age:24},
    {name: `minh`,Age:25},
]
let filterFind = arrobj.find((infor,index)=>{
    return infor &&infor.Age === 25;
});
console.log(`the first employee are 25 years old:`,filterFind);