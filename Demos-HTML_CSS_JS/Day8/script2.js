console.log("promise")

// pending
// resolve
// reject

function func1()
{ 
    // producin code     // here resolve & reject are callbak functionms
    // which wil be called whem 
    // resolve is called when async call is successfull
    // reject is called when async call has failed
    return new Promise(function(resolve, reject)
{
        setTimeout(()=>
        {
            const error= true;
            if(!error)
                {
                    console.log("promise has been fullfilled")
                    resolve("promise has been fullfilled")
                }
                else 
                {
                    console.log("promise has been not fullfilled")
                    reject("promise has been not fullfilled")
                    
                }
        }, 2000);
})
}

// consuming code

 func1(). then(function (res)
{
    console.log(res);
    console.log("resolved")
}).catch(function(error)
{
    console.log("error" + error);
})