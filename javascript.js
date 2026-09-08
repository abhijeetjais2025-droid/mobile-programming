    function sum(){
 let number1 = Number(document.getElementById("number 1").value);
 let number2 = Number(document.getElementById("number 2").value);

 let sum = number1 + number2;
 
 document.getElementById("result").innerHTML = "Result: " + sum;
    }