function clickOn()
{
let x=document.getElementById("txt").value;
str="";
for(i=1;i<=10;i++)
{
    str+=`<h4>${i}*${x}=${i*x}</h4>`
}
document.getElementById('print').innerHTML=str;
}