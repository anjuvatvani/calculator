alert();
var result=document.getElementById("result");
var alertp=document.getElementById("alert");

function input(num){
    result.value += num;

}

function calc(){
    var output=eval(result.value);
    result.value=output;

}

function cancel(){
    result.value="";
}

function even(){
    var num=result.value;
    if(num%2==0)
    {
        alertp.innerHTML="even number";
        alertp.style.color="dodgerblue";
        result.value="";

    }
    else
    {
        alertp.innerHTML="this is not an even number";
        alertp.style.color="red";
        result.value="";
    }
}

function odd(){
    var num=result.value;
    if(num%2!=0)
    {
        alertp.innerHTML="odd number";
        alertp.style.color="dodgerblue";
        result.value="";

    }
    else
    {
        alertp.innerHTML="this is not an odd number";
        alertp.style.color="red";
        result.value="";
    }
}