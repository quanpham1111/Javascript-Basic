//callback,set Timeout,setInterval

//callback, set Timeout: stop after the process is complete
let sum = (a,b,callback) =>{
    let tong =a+b;
    setTimeout(() => {
        callback(tong)
    }, 5000);
}
let printSum = (message) =>{
    console.log("check sum with callback : 6 + 9 = ",message)
}
sum (6,9,printSum)
//setInterval, callback : The process will repeat indefinitely
let mul  = (b,d,callback) =>{
    let nhan = b + d;
    let i=0;
    let timer = setInterval(() => {
        callback(nhan)
        i++;
        //if timer equal 5 => stop
        if(i==5){
            clearInterval(timer);
            console.log('End Time!');
        }
    }, 1000);
}
let printmul=(message) =>{
    console.log("check multipication between b and d:",message)
}
mul(6,9,printmul)