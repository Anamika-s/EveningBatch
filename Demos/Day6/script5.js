console.log("Call back Methods")
const students = [
    {name:"Ajay", subject:"Maths", score:90},
    {name:"Deepak", subject:"Science", score:86},
    {name:"Jay", subject:"Maths", score:75}
];

function GetStudents()
{ let str ="";
    setTimeout(()=>
       {
        students.forEach(student => {
            str+= `<li> ${student.name}--${student.subject}--${student.score}</li>`
        });
 document.getElementById("list").innerHTML= str;
 console.log("students fetched");
       }, 3000

    );
}

function AddNewStudent(student)
{
    setTimeout(()=>
    {
        students.push(student);
        console.log("Student has been enrolled");

    }, 4000);
}

let student = {name:"lalit" , subject:"Eng", score:90};
AddNewStudent(student)
GetStudents();