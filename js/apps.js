'use strict';

var employeeholder = [];

let form =document.getElementById("form")
let empdiv =document.getElementById("empdiv")
let add =document.getElementById("submit")
let empsp =1000;

function empengine (id,empname,dept,level,img)
{

this.id=id;
this.empname=empname;
this.dept=dept;
this.salary=0;
this.level=level;
this.img=img;
employeeholder.push(this);

}


function idgenrator()
{

    return empsp++;
}



empengine.prototype.getid()
{
this.id=idgenrator;

}


let hussein = new empengine("huessein omar","markteing","senior","assets/hussein.png");
let ali = new empengine("ali mohammad","devlopment","Mid-level","assets/ali.png");
let sara = new empengine("sara mazen","Administration","Junior","assets/sara.png");


empengine.prototype.salarycalculator = function()
{

let min;
let max;

if (this.level=="senior")
{
max = 2000;
min = 1500;

}
elseif (this.level=="mid-level")
{

    max = 1500;
    min = 1000;
}


els

{
max = 1000;
min = 500;
}

}



let totalsalary = randomnumber(max,min);
this.salary = totalsalary - totalsalary*0.075;


function randomnumber()
{

return Math.floor(Math.random() * (max-min+1))+min;

}



empengine.prototype.render=function()
{

    document.write(<h1>${this.empname} : ${this.salary}</h1>);
}




empengine.prototype.displayinformation = function()
{

let divdisplay = document.createElement("empdiv");
divdisplay.setAttribute('class',"show")

let displayimg = document.createElement("img url");
displayimg.setAttribute("src",this.img);
divdisplay.appendChild(displayimg);

let title = document.createElement("h4");
title.textContent = "Name : ",this.name;
divdisplay.appendChild(title);

let idtitle = document.createElement("h4");
idtitle.textContent("ID : ",this.id);
divdisplay.appendChild(idtitle);

let depttitle = createElement("h4");
depttitle.textContent("Department : ",this.dept);
divdisplay.appendChild(depttitle);


let leveltitle = createElement("h4");
leveltitle.textContent("Level : ",this.level);
divdisplay.appendChild(leveltitle);

empdiv.appendChild(divdisplay);


}

   

form.addEventListener("submit" , codebehind)

function codebehind(event)
{
event.preventdefeult();

let name = event.target.nameinput.value;
let dept = event.target.deabrtment.value;
let level = event.target.level.value;
let img = event.target.Imageurl.value;


let employee = new empengine(empname,dept,level,img);
console.log(employeeholder);
form.reset();


}
function renderall()
 {
for(let i=0; i < employeeholder.length ; i++)
{
    employeeholder[i].getid();
employeeholder[i].salarycalculator();
employeeholder[i].displayinformation();
}

console.log(employeeholder);

}
renderall(); 



