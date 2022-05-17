var a,b=false,c=false,d=false,e=false,sum=0,f,g,h,i,password="abhikini";
function cal(a)
{
 if(a==1)            
 {
     if(b==false)
     {
         sum +=30;
         b=true;
         document.getElementById("amo").innerHTML=sum;
         document.getElementById("id1").style.backgroundColor="blue";


     }
     else{
         sum -=30;
         b=false;
         document.getElementById("amo").innerHTML=sum;
         document.getElementById("id1").style.backgroundColor="white";


     }
 

 }
 else if(a==2)
 {
    if(c==false)
    {
        sum +=30;
        c=true;
        document.getElementById("amo").innerHTML=sum;
        document.getElementById("id2").style.backgroundColor="blue";

    }
    else{
        sum -=30;
        c=false;
        document.getElementById("amo").innerHTML=sum;
        document.getElementById("id2").style.backgroundColor="white";

    }

 }
 else if(a==3)
 {
    if(d==false)
    {
        sum+=30;
        d=true;
        document.getElementById("amo").innerHTML=sum;
        document.getElementById("id3").style.backgroundColor="blue";

    }
    else{
        sum-=30;
        d=false;
        document.getElementById("amo").innerHTML=sum;
                 document.getElementById("id3").style.backgroundColor="white";

    }

 }
 else
 {
    if(e==false)
    {
        sum+=30;
        e=true;
        document.getElementById("amo").innerHTML=sum;
        document.getElementById("id4").style.backgroundColor="blue";

    }
    else{
        sum-=30;
        e=false;
        document.getElementById("amo").innerHTML=sum;
        document.getElementById("id4").style.backgroundColor="white";

    }

 }
}
// document.getElementById("verify").addEventListener("click",verify);


function verify()
{
f=document.getElementById("one");
g=document.getElementById("two");
h=document.getElementById("three");
i=document.getElementById("four");
    
    if(f==""|| g=="" || h=="" || i=="" || sum==0)
    {
        alert("Incomplete Data");
    }
    else 
    {
        alert("Data is verified");
    }
    
}
function reload()
{   
    document.getElementById("sub").style.display="none";

    var h=prompt("Type here the password");
    if(h==password)
    {
        document.getElementById("main").style.display="block";
    }
    else
    {

document.getElementById("sub").style.display="block";
    }
}