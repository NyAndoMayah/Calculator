window.addEventListener("DOMContentLoaded", function(){//listening if all the document's contents are loaded and it's only when all the contents are loaded that the others addeventlisteners begin  
    const screen1=document.getElementById('screen1');
    const screen2=document.getElementById('screen2');
    const number=document.getElementsByClassName('number')
    const equals=document.querySelector("#equals");
    const clear=document.querySelector("#clear");
    const del =document.getElementById("delete");
    const square=document.getElementById("square");
    const power=document.getElementById("power");
    const ln=document.getElementById("ln");
    const pi=document.getElementById("pi");
    const log=document.getElementById("log");
    const exponential=document.getElementById("exponential");
    const math=document.getElementsByClassName("math")
    let string="";
    screen2.innerHTML="";
    screen1.innerHTML="";
    for(let element of number){//addeventlistener for all the buttons 0,1,2,3,4,5,6,7,8,9,+,-,*,/,(,)
        element.addEventListener("click", function(e){
            screen1.innerHTML+=element.innerText;//in the screen 1 there will be the text in the button(the value of the button if we can say that)
            string+=element.innerText//in a string we add the text which is in the button
        })
    }
    equals.addEventListener("click", function(e){
            screen2.innerHTML+=eval(string) ;//eval function calculates something and takes a string as parameter
    })
    clear.addEventListener("click", function(e){//function that resets all the calculations done, clearing the screen
        screen2.innerHTML="";
        screen1.innerHTML=""
        string=""
    })
    del.addEventListener("click", function(e){//function that deletes the last thing wroten 
        string=string.slice(0,string.length-1)
        screen1.innerHTML=string.slice(0,string.length-1)
    })
    square.addEventListener("click", function(e){//function that calculate a square root
        screen1.innerHTML+=square.innerText;
        string+='Math.sqrt'
    })
    power.addEventListener("click", function(e){//function that calculates a power
        screen1.innerHTML+='^';
        string+='**'
    })
    ln.addEventListener("click", function(e){//function for a logarithm
        screen1.innerHTML+='ln';
        string+='Math.log'
    })
    log.addEventListener("click", function(e){//function for a logarithme which base is 10
        screen1.innerHTML+=log.innerText;
        string+='Math.log10'
    })
    pi.addEventListener("click", function(e){//function which permits to use pi's value from a button so that we don't have to remember it
        screen1.innerHTML+=pi.innerText;
        string+='Math.PI'
    })
    exponential.addEventListener("click", function(e){//function for the exponential
        screen1.innerHTML+=exponential.innerText;
        string+='Math.exp'
    })
    for(let i of math){//a loop which add an eventlistener with Math functions
        i.addEventListener("click", function(e){
            screen1.innerHTML+=i.innerText;
            string+="Math."+i.innerText
        })
    }   
})
