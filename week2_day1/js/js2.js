let divParagraph = document.getElementById("divParagraph");
let div1 = document.getElementById("div1");

div1.addEventListener("click", function () {
    alert("div1 clicked");
})
let div2 = document.getElementById("div2");

div2.addEventListener("click", function () {
    divParagraph.innerHTML = "div2 clicked";    
    alert("div2 clicked");
})

let divOuter = document.getElementById("outer");

divOuter.onclick = function (event) {
    event.target.style.backgroundColor = 'yellow';

    // chrome needs some time to paint yellow
    setTimeout(() => {
        alert("target = " + event.target.tagName + ", this=" + this.tagName);
        event.target.style.backgroundColor = ''
    }, 0);
    divParagraph.innerHTML = "target = " + event.target.tagName + ", this=" + this.tagName;
};



