//function and method:reuse code
//function:
let sum = (a,b) =>{
    return a+b;
}
console.log("check sum function:",sum(6,9));

let obj = {
    name: 'Quan',
    address: 'Ninh thuan',
    getName: function(){
        return this.name;
    }
}
console.log(`get name in object:`,obj.getName())
//method:
console.log()