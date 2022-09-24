let URL = "https://countries.plaul.dk/api/countries/";
let alreadyChosenCountry;
let countryColor;
let currencyInfo;

function clickCountry(MouseEvent) {
  // Color by click and getCountryCode
  let chosenCountry = MouseEvent.target;
  if (alreadyChosenCountry) {
    alreadyChosenCountry.style.fill = countryColor;
    document.getElementById("infoBox").style.display = "none"
  }
  alreadyChosenCountry = chosenCountry;
  countryColor = chosenCountry.style.fill;
  chosenCountry.style.fill = "blue"

  //Country info
  let countryCode = chosenCountry.id;
  let NEW_URL = URL + countryCode;
  fetch(NEW_URL)
    .then(response => {
      if (response.status == 404) {
        document.getElementById("infoBox").style.display = "inline-block"
        document.getElementById("warningInfo").style.display = "inline-block"
        document.getElementById("info").style.display = "none"
        document.getElementById("warningInfo").innerHTML = "Country data not found";
      } else if (response.status == 400) {
        document.getElementById("infoBox").style.display = "inline-block"
        document.getElementById("warningInfo").style.display = "inline-block"
        document.getElementById("info").style.display = "none"
        document.getElementById("warningInfo").innerHTML = "No country selected";
      }
      return response.json()
    })
    .then(data => {
      if (data.code == undefined) {
        document.getElementById("warningInfo").style.display = "none";
        document.getElementById("infoBox").style.display = "inline-block"
        document.getElementById("info").style.display = "inline-block"
        document.getElementById("countryName").innerHTML = data.name.common;
        if (data.unMember == true) {
          document.getElementById("unMember").innerHTML = "Yes";
        } else if (data.unMember == false) {
          document.getElementById("unMember").innerHTML = "No";
        }

        for (currencyInfo in data.currencies) {
          let currency = `Currency: ${currencyInfo}<br>Name: ${data.currencies[currencyInfo].name}`;
          document.getElementById("currencyInfo").innerHTML = currency;
        }
        document.getElementById("capital").innerHTML = data.capital;
        document.getElementById("borders").innerHTML = data.borders.join(", ");

        //set attribute src til den data der kommer fra objektens data.flag, src kommer fra html tagget
        document.getElementById("flag").setAttribute("src", data.flag)
      }
    })
    .catch(error => {
      console.log(error);
    })
}
document.getElementById("svg2").onclick = (MouseEvent) => {
  clickCountry(MouseEvent);
}