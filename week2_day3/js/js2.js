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