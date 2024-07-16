var xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/posts");

xhr.onprogress=()=>
    {
        if(xhr.status ==200)
            {
                console.log(xhr.responseText)
            }
    }
xhr.send();



function AddRecord()
{
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.getResponseHeader('Content-Type', 'application/json');
    params = {
    "name": "Ajay",
    "job": "leader"
};

xhr.onprogress=()=>
    {
    if(xhr.status==201)
        console.log(xhr.responseText)
    }
    xhr.send(params);

}

AddRecord();