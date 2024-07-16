console.log("Async call using xhr object")

// instantiate xhr object
var xhr = new XMLHttpRequest();
console.log(xhr.readyState);  //0

// open the object
xhr.open("Get","data.txt", true);
console.log(xhr.readyState) // 1

xhr.onreadystatechange = handleonreadystatechange;
xhr.send();


function handleonreadystatechange()
{
    console.log(xhr.readyState)
    if(xhr.readyState==4 && xhr.status==200)
        {
            console.log(xhr.responseText);
        }
}
