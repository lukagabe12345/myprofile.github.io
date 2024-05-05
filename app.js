let btn=document.getElementById("btn");
let txt=document.querySelector("span");
let card=document.getElementById("card");
let call=document.getElementById("call");
let xclick=document.getElementById("xicon");

//message
let message=document.getElementById("message");



btn.addEventListener("click", ()=> {
    card.style.display="none";
    call.style.display="Block";
})

btn.addEventListener("click", ()=> {
    card.style.display="none";
    call.style.display="Block";
})



btn2.addEventListener("click", ()=> {
    card.style.display="none";
    message.style.display="Block";
})

function myfu(){
    alert("მესიჯი გაგზავნილია!")
}

