const URL = "https://jsonplaceholder.typicode.com/users/"

//Post request
const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
        name: "Kurt Wonnegut"
    })
}

document.getElementById("loadbtn").onclick = loadData //uden () så kalder man den ikke, dog kun når man klikker


fetch(URL, options)
    .then(r => r.json())  //No error handling is this demo
    .then(data => {
        //This is where you can use the result
        console.log(data)
    })

//GET Request
function loadData() {
    fetch(URL)
        .then(function (r) {
            if (!r.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return r.json()  //Returns a promise
        })
        .then(userData => {
            //Her kan vi arbejde med data
            const ul = userData.map(user => `<li>
    ${user.name}
    </li>`)
            const ulAsString = ul.join("")
            document.getElementById("my-ul").innerHTML = ulAsString
            console.log(userData)
        })
        .catch(e => {
            console.error(e)
        })
    console.log("Who was called first")
}

let chosenId = document.getElementById("inputid").value;

//Find by id
function loadDataid(chosenId) {
    chosenId = document.getElementById("inputid").value;
    let newURL = URL + chosenId;
    console.log(newURL);
    fetch(newURL)
        .then(function (r) {
            if (!r.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return r.json()  //Returns a promise
        })
        .then(userData =>{
            const userName = `<li>${userData.name}</li>`
            document.getElementById("my-ul").innerHTML = userName;
        })
        .catch(e => {
            console.error(e)
        })
    console.log("Who was called first")
}
document.getElementById("getuserbtn").onclick = () => loadDataid(chosenId);
