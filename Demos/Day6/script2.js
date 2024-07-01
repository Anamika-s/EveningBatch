console.log("variables")
var x = 100;
function Get1()
{
    var x = 100;
    // x = 200;
}
Get1();
console.log(x);
x = 10;
console.log(x);


let x1= 100;
function Get2()
{   let x2 = 100;
    x2 = 200;
}
Get2();
// console.log(x2);
x1 = 10;
console.log(x1);

const y= 1000;
y=y+100;

console.log(y);