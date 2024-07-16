console.log("async await")

// async function hello()
// {
//     return "hello";
// }

// console.log(hello());
// async functions returns promise

// whenever we add async with function 
// that means that this function will make asynchrous calls
// and we shud use await keyword in the calls in the method

async function hello1()

{
   console.log("inside hello1");
   // const response = await fetch("https://reqres.in/api/users");
   const response = await fetch("http://localhost:3000/users");
   
   console.log("before response");
   const users = await response.json();
   return users;
}

// let a = hello1()
// console.log(a)
// console.log("A")
// console.log("B")

hello1().then(data=> console.log(data))
.catch(function() {console.log("error")})
 
console.log("A")
console.log("B")

