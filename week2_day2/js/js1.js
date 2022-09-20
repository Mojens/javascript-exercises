let divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
    divs[0].style.backgroundColor = "red";
    divs[1].style.backgroundColor = "white";
    divs[2].style.backgroundColor = "red";
}

let buttonClick = document.getElementById("bt1");
buttonClick.addEventListener("click", function () {
    for (let i = 0; i < divs.length; i++) {
        divs[0].style.backgroundColor = "white";
        divs[1].style.backgroundColor = "red";
        divs[2].style.backgroundColor = "white";
    }
    alert("White, Red, White");
})