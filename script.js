function compute()
{
    //if principal is not valid, then alert user.
    principal = (document.getElementById("principal").value)*1;
       if (principal <=0)
    {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    }
    //if principal is valid, then continue with calculation.
    else
    {
    rate= (document.getElementById("rate").value)*1;
    years=(document.getElementById("years").value)*1;
    interest=principal*years*rate/100;
    var futuredate=(new Date().getFullYear()*1)+(years*1);
     document.getElementById("result").innerHTML = "<div>If you deposit <mark>"+principal+"</mark>,</br>at an interest rate of <mark>"+rate+"%</mark>.</br>You will receive an amount of <mark>"+interest+"</mark>,</br>in the year <mark>"+futuredate+"</mark></div>";
    //document.getElementById("result").innerHTML="If you deposit " +principal+" at an interest rate of "+rate+"%. You will receive an amount of "+(interest)+",in the year "+futuredate;
    }
}

//function to set slider value
function setslider()
{
    rate=document.getElementById("rate").value
    document.getElementById("rangepercent").innerHTML=rate+" %"
}
