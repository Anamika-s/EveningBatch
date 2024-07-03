// anonymous method > method with no name
// we use arrow functions in js to create anonymous method

// normal function
function hello()
{
    console.log("helloe");
}
hello();

const hello2 = function()
{
    console.log("hello2")
}

// arrow functions are short way to write anonymous method

const helloMessge = () =>
    {
        console.log("hello2");
    }

    const helloMessge2 = () =>{
     return "hello2";}
        
    
    const helloMessage = ()=> "hello11111";

    console.log(helloMessage());

    const hello3 = function (fname, lname)
    {
         return fname + " " + lname
    }
    const hello4 = (fname, lname)=> fname + " " + lname;

    const AddNumbers = (num1, num2)=> num1+ num2;

    console.log(AddNumbers(1,90));

