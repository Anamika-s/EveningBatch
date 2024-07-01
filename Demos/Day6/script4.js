console.log("callback methods")
// console.log("start")
// console.log("in between")
// console.log("end")


// console.log("start")
//  setTimeout(()=>
//   console.log("in between"), 2000);
//  console.log("end")


// console.log("start")
// function getName(name)
// {
//     setTimeout(()=>
//         {
//     console.log("inside TimeOut")
//      return "Hello "+ name}, 2000)
// }

// var name = getName("Ajay")
// console.log(name);
// console.log("end")



console.log("start")
function getName(name, callback)
{
    setTimeout(()=>
        {
    console.log("inside TimeOut") 
    callback("Hello " + name);
    }, 2000)
}

getName("Ajay",(name)=>{console.log(name)});
console.log("end")
