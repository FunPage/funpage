/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function DisplayTime()
{
    var date=new Date();
    var times=date.toLocaleTimeString();
    document.getElementById("").innerText=times;
}
function ResizeCheck()
{
    var width=window.innerWidth;
    var height=window.innerHeight;
    window.resizeTo(width,height);
}
function ResizeElement(Element)
{
    var divs=document.getElementById(Element);
    divs.style.width=(window.innerWidth);
    divs.style.heigth=((40/100)* window.innerHeight);
}
function WinAlert(hello)
{
    alert(hello);
}
function validate(entered,actual)
{
    if(entered == actual)
        {
            return true;
        }
     else
         {
             return false;
         }
}
function resize_as_sqr_element(percent,id)
{
    var width=window.innerWidth;
    var height=window.innerHeight;
    document.getElementById(id).style.width=calculate(percent,width);
    document.getElementById(id).style.height=calculate(percent,height);
}
function calculate(percent,number)
{
    return((percent/100)*number);
}
