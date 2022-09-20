let divParagraph = document.getElementById("divParagraph");
let div1 = document.getElementById("div1");

div1.addEventListener("click", function () {
    alert("div1 clicked");
})
let div2 = document.getElementById("div2");

div2.addEventListener("click", function () {   
    alert("div2 clicked");
    divParagraph.innerHTML = "div2 clicked"; 
})

let divOuter = document.getElementById("outer");
divOuter.addEventListener("click", function (e) {   
    const target = e.target;
alert("target = " + target.id + ", this=" + this.id);
divParagraph.innerHTML = "target = " + target.id + ", this=" + this.id;
});

