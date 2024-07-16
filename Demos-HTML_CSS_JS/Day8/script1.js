console.log("using fetch api")
let btnFetchData = document.getElementById("btnFetchData");
btnFetchData.addEventListener('click', getData);

function getData()
{
    console.log("inside getdata function");
    url ="data.txt";
    fetch(url).then((response)=>
        {
            console.log("inside first then")
           console.log(response)
           return response.text()
        }).then((res)=>
            { console.log("inside second then")
                console.log(res);
            });
}

getData();

console.log("1")
console.log("2")

function getData1()
{
    fetch("https://api.github.com/users").then((res)=>
        {
            return res.json()
        }).then((response)=>
            {
                console.log(response)
            });

}


function PostData()
{
    data =
    {
        "name": "morpheus",
        "job": "leader"
    };
    params=
    {
    method:'post',
    headers: {
        'Content-Type':'application/json'
    },
    body:data
    }
         fetch("https://reqres.in/api/users", params)
         .then((res)=>
            {
                return res.json()
            }).then((response)=>
                {
                    console.log(response)
                });
     
    }

getData1();
PostData();