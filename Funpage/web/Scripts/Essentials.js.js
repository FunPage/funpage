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
    divs.style.heigth=((10/100)* window.innerHeight);
}
function WinAlert()
{
    alert("hello world");
}
