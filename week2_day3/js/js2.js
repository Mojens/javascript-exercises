/*     CARS'R'US      */
let URL_MEMBER = "http://localhost:8080/api/members/";
let URL_CAR = "http://localhost:8080/api/cars/";
let URL_RESERVATION = "http://localhost:8080/api/reservation/";

function loadDataMember() {
    fetch(URL_MEMBER)
        .then(function (r) {
            if (!r.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return r.json()  //Returns a promise
        })
        .then(userData => {
            //Her kan vi arbejde med data
            const ul = userData.map(user => {
                return `<tr><td>${user.username}</td><td>${user.email}</td><td>${user.firstName + " " + user.lastName}</td></tr>`
            })
            const ulAsString = ul.join("")
            document.getElementById("tbody_member").innerHTML = ulAsString
            console.log(userData)
        })
        .catch(e => {
            console.error(e)
        })
}
document.getElementById("loadmemberbtn").onclick = () => loadDataMember();

function loadDataCar() {
    fetch(URL_CAR)
        .then(function (r) {
            if (!r.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return r.json()  //Returns a promise
        })
        .then(carData => {
            //Her kan vi arbejde med data
            const ul = carData.map(car => {
                console.log(car)
                return `<tr><td>${car.id}</td><td>${car.brand}</td><td>${car.model}</td><td>${car.pricePrDay + " DKK"}</td></tr>`
            })
            const ulAsString = ul.join("")
            document.getElementById("tbody_cars").innerHTML = ulAsString
            console.log(carData)
        })
        .catch(e => {
            console.error(e)
        })
}
document.getElementById("loadcarsbtn").onclick = () => loadDataCar();

let carId = document.getElementById("inputcarid").value;

function loadDataCarById(carId) {
    carId = document.getElementById("inputcarid").value;
    let newURL = URL_CAR + carId;
    fetch(newURL)
        .then(function (r) {
            if (!r.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return r.json()  //Returns a promise
        })
        .then(carData => {
            const tr = `<tr><td>${carData.id}</td><td>${carData.brand}</td><td>${carData.model}</td><td>${carData.pricePrDay + " DKK"}</td></tr>`
            console.log(carData)
            document.getElementById("tbody_findcar").innerHTML = tr
        })
        .catch(e => {
            document.getElementById("tbody_findcar").innerHTML = "<tr><td>No car found</td><td>No car found</td><td>No car found</td><td>No car found</td></tr>"
            console.error(e)
        })
}
document.getElementById("findcarbtn").onclick = () => loadDataCarById(carId);

let memberId = document.getElementById("inputmemberid").value;

function loadDataMemberByUserName(memberId) {
    memberId = document.getElementById("inputmemberid").value;
    let NEW_MEMBER_URL = URL_MEMBER + memberId;
    fetch(NEW_MEMBER_URL)
        .then(function (r) {
            if (!r.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return r.json()  //Returns a promise
        })
        .then(memberData => {
            //Her kan vi arbejde med data
            const member = `<tr><td>${memberData.username}</td><td>${memberData.email}</td><td>${memberData.firstName + " " + memberData.lastName}</td></tr>`

            document.getElementById("tbody_findmember").innerHTML = member
        })
        .catch(e => {
            document.getElementById("tbody_findmember").innerHTML = "<tr><td>No member found</td><td>No member found</td><td>No member found</td></tr>"
            console.error(e)
        })
}
document.getElementById("searchmemberbtn").onclick = () => loadDataMemberByUserName(memberId);


/////////////////////////////////// ADD - POST METHODS///////////////////////////////////////////////////////////////

function addMember() {
    const createdMember = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            username: document.getElementById("inputUserName").value,
            email: document.getElementById("inputEmail").value,
            password: document.getElementById("inputPassword").value,
            firstName: document.getElementById("inputFirstName").value,
            lastName: document.getElementById("inputLastName").value,
            street: document.getElementById("inputStreet").value,
            city: document.getElementById("inputCity").value,
            zip: document.getElementById("inputZip").value
        })
    }
    fetch(URL_MEMBER, createdMember)
    .then(r => r.json())
    .then(addedMemberData => {
        const addedMember = `<tr><td>${addedMemberData.username}</td><td>${addedMemberData.email}</td><td>${addedMemberData.firstName + " " + addedMemberData.lastName}</td></tr>`
        document.getElementById("tbody_addedMember").innerHTML = addedMember
    })
}
document.getElementById("addmemberbtn").onclick = () => addMember();

function addCar() {
    const createdCar = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            brand: document.getElementById("inputBrand").value,
            model: document.getElementById("inputModel").value,
            pricePrDay: document.getElementById("inputPrice").value,
            bestDiscount: document.getElementById("inputDiscount").value
        })
    }
    fetch(URL_CAR, createdCar)
    .then(r => r.json())
    .then(addedCarData => {
        const addedCar = `<tr><td>${addedCarData.id}</td><td>${addedCarData.brand}</td><td>${addedCarData.model}</td><td>${addedCarData.pricePrDay + " DKK"}</td><td>${addedCarData.bestDiscount + " DKK"}</td></tr>`
        document.getElementById("tbody_addedCar").innerHTML = addedCar
    })
}
document.getElementById("addcarbtn").onclick = () => addCar();


