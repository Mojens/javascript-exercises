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
                return `<tr><td>${user.username}</td><td>${user.email}</td><td>${user.firstName + " " + user.lastName}</td><td>${user.street}</td><td>${user.city}</td><td>${user.zip}</td></tr>`
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
        }).catch(e => {
            document.getElementById("tbody_addedMember").innerHTML = "<tr><td>No member Added</td><td>No member Added</td><td>No member Added</td></tr>"
            console.error(e)
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
        .catch(e => {
            document.getElementById("tbody_addedCar").innerHTML = "<tr><td>No car Added</td><td>No car Added</td><td>No car Added</td><td>No car Added</td><td>No car Added</td></tr>"
            console.error(e)
        })
}
document.getElementById("addcarbtn").onclick = () => addCar();

/////////////////////////////////////// EDIT METHODS ///////////////////////////////////////////////////////////////

let memberId2 = document.getElementById("inputmemberid2").value;
function loadDataMemberByUserName2(memberId2) {
    memberId2 = document.getElementById("inputmemberid2").value;
    let NEW_MEMBER_URL = URL_MEMBER + memberId2;
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

            document.getElementById("tbody_findmember2").innerHTML = member
            console.log(memberData)
            return memberData;
        })
        .catch(e => {
            document.getElementById("tbody_findmember2").innerHTML = "<tr><td>No member found</td><td>No member found</td><td>No member found</td></tr>"
            console.error(e)
        })

}

document.getElementById("searchmemberbtn2").onclick = () => loadDataMemberByUserName2(memberId2);


function editMember() {
    let row = document.getElementById("found2membertable").rows[1];
    let id = row.cells[0].innerHTML;
    const editedMember = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            username: id,
            email: document.getElementById("inputEmailEdit").value,
            password: document.getElementById("inputPasswordEdit").value,
            firstName: document.getElementById("inputFirstNameEdit").value,
            lastName: document.getElementById("inputLastNameEdit").value,
            street: document.getElementById("inputStreetEdit").value,
            city: document.getElementById("inputCityEdit").value,
            zip: document.getElementById("inputZipEdit").value
        })
    }

    let NEW_MEMBER_URL = URL_MEMBER + id;
    fetch(NEW_MEMBER_URL, editedMember)
        .then(r => r.json())
        .then(editedMemberData => {
            document.getElementById("succesfulEdit").innerHTML = "Member: " + id + ", is now edited"
            console.log(editedMemberData)

        })
        .catch(e => {
            document.getElementById("failedEdit").innerHTML = "Member: " + id + ", is not edited"
            console.error(e)
        })

}
document.getElementById("editmemberbtn").onclick = () => editMember();

let carId2 = document.getElementById("inputcarid2").value;
function loadDataCarById2(carId2) {
    carId2 = document.getElementById("inputcarid2").value;
    let NEW_CAR_URL = URL_CAR + carId2;
    fetch(NEW_CAR_URL)
        .then(function (r) {
            if (!r.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return r.json()  //Returns a promise
        })
        .then(carData => {
            //Her kan vi arbejde med data
            const car = `<tr><td>${carData.id}</td><td>${carData.brand}</td><td>${carData.model}</td><td>${carData.pricePrDay + " DKK"}</td></tr>`

            document.getElementById("tbody_findcar2").innerHTML = car
            console.log(carData)
            return carData;
        })
        .catch(e => {
            document.getElementById("tbody_findcar2").innerHTML = "<tr><td>No car found</td><td>No car found</td><td>No car found</td><td>No car found</td><td>No car found</td></tr>"
            console.error(e)
        })
}
document.getElementById("searchcarbtn2").onclick = () => loadDataCarById2(carId2);


function editCar() {
    let row = document.getElementById("found2cartable").rows[1];
    let foundCarId = row.cells[0].innerHTML;
    const editedCar = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            id: foundCarId,
            brand: document.getElementById("inputBrandEdit").value,
            model: document.getElementById("inputModelEdit").value,
            pricePrDay: document.getElementById("inputPriceEdit").value
        })
    }
    let NEW_CAR_URL = URL_CAR + foundCarId;
    fetch(NEW_CAR_URL, editedCar)
        .then(r => r.json())
        .then(editedCarData => {
            document.getElementById("succesfulEditCar2").innerHTML = "Car with id: " + foundCarId + ", is now edited"
            console.log(editedCarData)

        })
        .catch(e => {
            document.getElementById("failedEditCar2").innerHTML = "Car with id: " + foundCarId + ", is not edited"
            console.error(e)
        })


}
document.getElementById("editcarbtn").onclick = () => editCar();



