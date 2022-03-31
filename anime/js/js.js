let body =document.body;
let info1 =document.querySelector('.info1');
let info2 =document.querySelector('.info2');
let info3 =document.querySelector('.info3');

let col1 =document.querySelector('.col1');
let col2 =document.querySelector('.col2');
let col3 =document.querySelector('.col3');

col1.addEventListener("mouseover",sl1);
function sl1()
{
     info1.style.opacity = '1';  
}

col2.addEventListener("mouseover",sl2);
function sl2()
{
     info2.style.opacity = '1';   

}

col3.addEventListener("mouseover",sl3);
function sl3()
{
     info3.style.opacity = '1'; 
}
/*-------------------------- */

col1.addEventListener("mouseleave",sll1);
function sll1()
{
     info1.style.opacity = '0'; 
}


col2.addEventListener("mouseleave",sll2);
function sll2()
{
     info2.style.opacity = '0'; 
}

col3.addEventListener("mouseleave",sll3);
function sll3()
{
     info3.style.opacity = '0'; 
}


