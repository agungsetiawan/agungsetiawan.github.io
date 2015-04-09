var leftHigh=document.getElementById("sidebar").clientHeight;
var rightHigh=document.getElementById("main-content").clientHeight;
var higher=Math.max(leftHigh, rightHigh);

document.getElementById("sidebar").setAttribute("style","height:"+higher+"px");
document.getElementById("main-content").setAttribute("style","height:"+higher+"px");


