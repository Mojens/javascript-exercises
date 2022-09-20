const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

const car = cars.map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
  .join('');
document.getElementById("tbody").innerHTML = car;

function clearFilter() {
  const car = cars.map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  document.getElementById("tbody").innerHTML = car;
}
document.getElementById("clearbtn").onclick = () => clearFilter();

let price = document.getElementById("input-price").value;


function filterCars1(price) {
  price = document.getElementById("input-price").value;
  if (price === "") {
    clearFilter();
  }
  console.log(price);
  console.log(cars);
  const filterCars1 = cars
    .filter(car => car.price <= price)
    .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  console.log(filterCars1);
  document.getElementById("tbody").innerHTML = filterCars1;
}

document.getElementById("filterbtn1").onclick = () => filterCars1(price);

function filterCars2(price) {
  price = document.getElementById("input-price").value;
  if (price === "") {
    clearFilter();
  }
  console.log(price);
  console.log(cars);
  const filterCars1 = cars
    .filter(car => car.price >= price)
    .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  console.log(filterCars1);
  document.getElementById("tbody").innerHTML = filterCars1;
}

document.getElementById("filterbtn2").onclick = () => filterCars2(price);


let brand = document.getElementById("input-brand").value;

function filterCars3(brand) {
  brand = document.getElementById("input-brand").value;
  if (brand === "") {
    clearFilter();
  }
  const filterCars1 = cars
    .filter(car => car.make.toLowerCase() === brand.toLowerCase())
    .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  console.log(filterCars1);
  document.getElementById("tbody").innerHTML = filterCars1;
}
document.getElementById("filterbtn3").onclick = () => filterCars3(brand);

/*
Sorter price ~ START
*/

function sortByPrice1() {
  const sortCars = cars
    .sort((a, b) => a.price > b.price)
    .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  document.getElementById("tbody").innerHTML = sortCars;
}
function sortByPrice2() {
  const sortCars = cars
    .sort((a, b) => a.price < b.price)
    .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  document.getElementById("tbody").innerHTML = sortCars;
}

let shouldSwitching = false;
let switching = true;
let priceDir = "asc";
function sortByPrice() {
  while (switching) {
    switching = false;
    if (priceDir === "asc") {
      sortByPrice2();
      priceDir = "desc";
      shouldSwitching = true;
      break;
    } else if (priceDir === "desc") {
      sortByPrice1();
      priceDir = "asc";
      shouldSwitching = true;
      break;
    }
  }
  if (shouldSwitching) {
    switching = true;
  } else {
    priceDir = "desc";
    switching = true;
  }
}
document.getElementById("price").onclick = () => sortByPrice();

/*
Sorter price ~ END
*/

/* 
Sorter brand ~ START 
*/
function sortByBrand1() {
  const sortCars = cars
  .sort((a, b) => a.make.toLowerCase().length > b.make.toLowerCase().length)
    .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  document.getElementById("tbody").innerHTML = sortCars;
}
function sortByBrand2() {
  const sortCars = cars
    .sort((a, b) => a.make.toLowerCase().length < b.make.toLowerCase().length)
    .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
    .join('');
  document.getElementById("tbody").innerHTML = sortCars;
}


let brandDir = "asc";
function sortByBrand() {
  while (switching) {
    switching = false;
    if (brandDir === "asc") {
      sortByPrice2();
      brandDir = "desc";
      shouldSwitching = true;
      break;
    } else if (brandDir === "desc") {
      sortByPrice1();
      brandDir = "asc";
      shouldSwitching = true;
      break;
    }
  }
  if (shouldSwitching) {
    switching = true;
  } else {
    brandDir = "desc";
    switching = true;
  }
}
document.getElementById("brand").onclick = () => sortByBrand();

/* 
Sorter brand ~ END 
*/
