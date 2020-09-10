	// JavaScript Document
function ptb2()
{
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var kq ;
	if(isNaN(a) || isNaN(b) || isNaN(c))
	{
		alert("ChiNang")
		return false;
	}
	if (a  == 0)
	{
		if ( b == 0 )
		{
			if ( c == 0 )
			   kq  = "Phương trình có nghiệm kép";
			else
			   kq = "Phương trình vô nghiệm";
		}
		else
		{
			x = -b/a ;
			kq  = "Phương trình có nghiệm x = " + x.toFixed(2);
		}
	}
	else
	{
		var del = (b*b) - (4*a*c);
		if ( del < 0 )
		   kq = "Phương trình vô nghiệm";
		else
		{
			if(del == 0)
			    kq = "Phương trình có 2 nghiệm <br> x1 = , x2 = " + -b/(2*a);
			 else
			 {
				kq = "Phương trình có 1 nghiệm kép  <br>x1 = " + ((-b+Math.sqrt(del))/(2*a))
				+ "<br> x2 = " + ((-b -Math.sqrt(del))/(2*a));
			}
			 
		}
	}
	document.getElementById("kqc").innerHTML = kq ;
}
function xoa()
{
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("c").value = "";
	document.getElementById("kqc").innerHTML = "";
}// JavaScript Document