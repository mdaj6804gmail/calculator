// input fild খালি কারার জন্য DeletMe() function
function DeletMe(){
    document.getElementById("result_filt").value ="";

}




function calculator(NewValue){
document.getElementById("result_filt").value +=NewValue;
}

// = sin function
function Answer(){
let a=document.getElementById("result_filt").value;
let b=eval(a);
document.getElementById("result_filt").value = b;
}

function LastKeyDelete(){
let result= document.getElementById("result_filt").value;
let result2=result.slice(0,result.length-1);
document.getElementById("result_filt").value=result2;
}

