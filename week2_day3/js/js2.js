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
                return `<tr><td>${car.id}</td><td>${car.brand}</td><td>${car.model}</td><td>${car.pricePrDay}</td></tr>`
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
            const tr = `<tr><td>${carData.id}</td><td>${carData.brand}</td><td>${carData.model}</td><td>${carData.pricePrDay}</td></tr>`
            console.log(carData)
            document.getElementById("tbody_findcar").innerHTML = tr
        })
        .catch(e => {
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
            console.error(e)
        })
}
document.getElementById("searchmemberbtn").onclick = () => loadDataMemberByUserName(memberId);