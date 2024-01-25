//object
console.log(`hello`)
//key : value
let obj = {
    name: `Quan`,
    live_address: `Binh Duong`,
    hometown_address: `Ninh Thuan`,
    a: function () {
        console.log(`hello in side function`);
        return ''
    }
};

let b = `Quan`;
console.log(`what's your name:`, `My name's :`, obj.name);
console.log(`where do you live:`, `I live in:`, obj.live_address);
console.log(`where is you home town:`, `My home town's:`, obj.hometown_address);
console.log(`type of a :`, typeof a, `type of b:`, typeof b);
console.log(`call function:`, obj.a());