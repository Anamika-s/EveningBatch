console.log("Arrays Demo")

var students = ["ajay", "vijay","jay"];

function Display()
{
    var str ="";
    for(var i=0;i<students.length;i++)
{
     str+= "<li>" + students[i] + "</li>";
}
document.getElementById("list").innerHTML= str;
        // console.log(students[i]);
    // alert(students[i])
    // document.write(students[i]+ "<br>")
}

function Add()
{
    students.push(document.getElementById("txtName").value);
}

