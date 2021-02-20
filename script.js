function compute()
{
    principal = (document.getElementById("principal").value)*1;
       if (principal <=0)
    {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    }
    else
    {
    rate= (document.getElementById("rate").value)*1;
    years=(document.getElementById("years").value)*1;
    interest=principal*years*rate/100;
    var futuredate=(new Date().getFullYear()*1)+(years*1);
    //futuredate=futuredate.getfullyear();
    document.getElementById("result").innerHTML="If you deposit " +principal+" at an interest rate of "+rate+"%. You will receive an amount of "+(interest)+",in the year "+futuredate;
    }
}

function setslider()
{
    rate=document.getElementById("rate").value
    document.getElementById("rangepercent").innerHTML=rate+" %"
}
