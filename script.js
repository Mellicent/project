'use strict';

/*var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);
let persone = {
    name:"John",
    age: 25,
    isMarried: false
}*/
const a = 'aabbcccdde';
var arr = a.split('');
var result = {};
for (var i = 0; i < arr.length; ++i)
{
    var b = arr[i];
    if (result[b] != undefined)
        ++result[b];
    else
        result[b] = 1;
}
var outstr = "";
for (var key in result)
{
outstr +=  key + '' + result[key];

}
console.log(outstr);
    //document.write( key + '' + result[key]);
    //console.log( key + '' + result[key]);
    //console.log(result);



//console.log(persone["name"]);
//let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

//console.log(arr[0])

//alert("Hello,world!");

//let answer = confirm("Are you here?");
//console.log(answer);

//let answer = +prompt("Are you 18?", "Sure");
//console.log(typeof(answer));

//console.log("arr" + "- object");
//console.log(4 + "- object");
/*let incr = 10,
decr = 10;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log("2" === 2);

let isCheched = true,
isClose = true;
console.log(isCheched && isClose);

let isCheched1 = false,
isClose1 = false;
console.log(isCheched1 || isClose1);

let isCheched2 = false,
isClose2 = false;
console.log(isCheched2 || !isClose2);*/


