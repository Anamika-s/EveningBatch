console.log("making async call using xhr in simple way")

var xhr = new XMLHttpRequest();
xhr.open("Get", "data.txt", true)
xhr.onprogress=()=>
    {
        if(xhr.status ==200)
            {
                console.log(xhr.responseText)
            }
    }
xhr.send();