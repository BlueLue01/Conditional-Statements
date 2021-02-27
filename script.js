var containerEle = document.body.querySelector(".container");

var num1=Number(prompt("Enter a number:"));

 if (isNaN(num1)) {
   containerEle.innerHTML="Error"
 }else{
   var num2=Number(prompt("Enter another number"));
 }

if (isNaN(num2)) {
containerEle.innerHTML="Error"
}else{
  var op=prompt("Enter an operator +, -, *, / ");
}


if (op === "+"){
  containerEle.innerHTML= num1+num2;
}
else if (op === "-"){
  containerEle.innerHTML= num1-num2;
}
else{ 
  containerEle.innerHTML="Error";
}


if (op === "*"){
  containerEle.innerHTML= num1*num2;
}
else if (op === "/"){
  containerEle.innerHTML= num1/num2;
}