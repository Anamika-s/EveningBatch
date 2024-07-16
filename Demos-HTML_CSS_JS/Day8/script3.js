const students =[
    {name :'deepak', address:'new delhi'},
    
    {name :'ajay', address:'new delhi'}
];

function EnrollStudent(student)
{
    return new Promise(function(resolve, reject)
{
       setTimeout(()=>
    {
        students.push(student);
        console.log("student has been added")
        const error=true
        if(!error)
            resolve()
        else 
        reject("some error came while adding record")
    }, 3000);
})
}

function getStudents()
{
    setTimeout(()=>
    {
      let str ="";
      students.forEach((student)=>
        {
            str+= `<li> ${student.name} -- ${student.address}</li>`
        }
      )
    document.getElementById("list").innerHTML = str;
    console.log("students fetched")
    }, 2000);
}

let student = {name:'sagar', address:'new mumbai'};

// consuming code
EnrollStudent(student).then(function()
{
     getStudents();
}).catch(function(error)
{
    console.log(error);
})