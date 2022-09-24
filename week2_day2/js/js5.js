let allButtons = document.querySelectorAll(".t1");
let display = document.getElementById("display");
let calculate = document.getElementById("calculate");
let clearbtn = document.getElementById("clearbtn");

let Allbtns = [...allButtons]

Allbtns.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        if(display.innerHTML == "0"){
            display.innerHTML = "";
        }
        let value = Allbtns[i].innerHTML;
        display.innerHTML += value;
    })
})

calculate.addEventListener('click', ()=> {
    let result = eval(display.innerHTML.replace("=",""));
    display.innerHTML = result;
})

function clearDisplay(){
    display.innerHTML = "0";
}
clearbtn.onclick = clearDisplay;