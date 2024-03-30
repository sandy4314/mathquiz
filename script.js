let num1=Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10);
let operate=["addition","subtraction","multiplication","division","remainder"]
let operateindex=Math.floor(Math.random()*operate.length);
let operation=operate[operateindex];
document.getElementById("num1").innerHTML=num1;
document.getElementById("num2").innerHTML=num2;
document.getElementById("operation").innerHTML=operation;
let score=0;
let n;
var ibut=document.getElementById("ibutton");
ibut.addEventListener("click",function(event){
        event.preventDefault();
        switch(operation){
            case "addition":n=num1+num2;
            break;
            case "subtraction":n=num1-num2;
            break;
            case "multiplication":n=num1*num2;
            break;
            case "division":n=Math.floor(num1/num2);
            break;
            case "remainder":n=num1%num2;
            break;
        }
        let a=parseInt(document.getElementById("input").value);
        if(n==a){
            score++;
        }
        else{
            score--;
        }
        
        document.getElementById("resscore").innerHTML=score;
        document.getElementById("input").value="";
        num1=Math.floor(Math.random()*10);
        num2=Math.floor(Math.random()*10);
        operate=["addition","subtraction","multiplication","division","remainder"]
        operateindex=Math.floor(Math.random()*operate.length);
        operation=operate[operateindex];
        document.getElementById("num1").innerHTML=num1;
        document.getElementById("num2").innerHTML=num2;
        document.getElementById("operation").innerHTML=operation;

    });
function animatehead(){
    
    var head=document.getElementById("para");
    head.classList.add('animate');
    setTimeout(function(){
        head.classList.remove('animate');
    },3000);
    var head4=document.getElementById("score");
    head4.classList.add('animate');
    setTimeout(function(){
        head4.classList.remove('animate');
    },3000);
    
}




