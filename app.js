let password = document.querySelector('#password');
let char="";
let len = document.querySelector("#length");
let upper= document.querySelector("#UpperCase");
let lower= document.querySelector("#LowerCase");
let number = document.querySelector("#Number");
let Symbol = document.querySelector("#Symbols");
let imppass = "";

function genPassword(){
    let passlen = parseInt(len.value);
    imppass="";
    char="";
    if(upper.checked===true){
        char +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lower.checked===true){
        char +="abcdefghijklmnopqrstuvwxyz";
    }
    if(number.checked===true){
        char +="0123456789";
    }
    if(Symbol.checked===true){
        char +="!@#$%^&*()";
    }
    for(i=0;i<=passlen;i++){
        var random = Math.floor(Math.random() *char.length);
        imppass += char.substring(random , random +1);
    }
    password.value= imppass;
}
const gen = document.querySelector("#gen");
gen.addEventListener( 'click',()=>{
    genPassword();
});