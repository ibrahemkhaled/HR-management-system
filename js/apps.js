'use strict';

var employeeholder = [];
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


for(let i=0;employeeholder.length;i++)
{
employeeholder[i].salarycalculator();
employeeholder[i].render();

}



