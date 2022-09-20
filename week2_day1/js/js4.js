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

  function clearFilter(){
    const car = cars.map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
  .join('');
  document.getElementById("tbody").innerHTML = car;
  }
  document.getElementById("clearbtn").onclick = () => clearFilter();

  let price = document.getElementById("input-price").value;


   function filterCars1(price){
    price = document.getElementById("input-price").value;
    if(price === ""){
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

  function filterCars2(price){
    price = document.getElementById("input-price").value;
    if(price === ""){
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

  function filterCars3(brand){
    brand = document.getElementById("input-brand").value;
    if(brand === ""){
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

    document.getElementById("price").onclick = function(){
        const sortedCars = cars.sort((car1, car2) => car1.price<car2.price)
        .map(car => `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`)
        .join('');
        document.getElementById("tbody").innerHTML = sortedCars;
    }


