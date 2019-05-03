function myFunc()
{	y^=1
	document.getElementById("empty").innerHTML="Nothing Achieved!!!";
	if(y==1)
		document.getElementById("sup1").innerHTML="superscript!!!";
	else
		document.getElementById("sup1").innerHTML="para!!!";

}
function reset()
{
	cnt=0;
	found=false;
	document.getElementById("Go").style="display:visible";
	document.getElementById("input1").type="hidden";
	document.getElementById("button2").style="display:none";
	document.getElementById("Go").innerHTML="Ready for another one!";
}
function game(){
	if(cnt==0)
	{
	cnt=0;
	guess = Math.floor((Math.random()*1024)+1);
	guess=parseInt(guess);
	document.getElementById("Go").style="display:none";
	document.getElementById("input1").type="text";
	document.getElementById("input1").value="";
	document.getElementById("debug1").innerHTML="";
	document.getElementById("debug2").innerHTML="";
	document.getElementById("button2").style="display:visible";
	document.getElementById("msg").innerHTML="";
	document.getElementById("finalmsg").innerHTML="";

	}
	if(found)
		{document.getElementById("finalmsg").innerHTML="LUCKY YOU! ";reset();}
	else if(cnt>10)
		{document.getElementById("finalmsg").innerHTML="HAHAHAHAHA!";reset();}
	
}
function docwrite()
{	

	
	x=document.getElementById("input1").value;
	x=parseInt(x);
	document.getElementById("debug1").innerHTML="Guessed:"+x;
	document.getElementById("debug2").innerHTML="Chances left: "+ (10-cnt);
	if(x>guess)
		document.getElementById("msg").innerHTML="Woah!Getting too ahead of yourself there!";
	else if(x<guess)
		document.getElementById("msg").innerHTML="Come on!Guess a little higher";
	else
		{document.getElementById("msg").innerHTML="BANG ON!";
			found=true;}
			++cnt;
		game();
}
var y,cnt=0;
var guess;
found=false;
/*var x="5"+5;
var y=5+"5";
document.write("Hi"+x+"<br>");
document.getElementById("val1").innerHTML="alas!";
document.write("y= " +y);
alert("This is an alert box");
console.error("Hi");
console.warn("warning");
console.log("ahsbdfivsd ")*/
