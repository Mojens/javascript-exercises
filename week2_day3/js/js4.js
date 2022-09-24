let URL = "https://api.punkapi.com/v2/beers/";
let enteredAbv = document.getElementById("filter-abv").value

function makeTRow(bevToMap) {
    const tableRows = bevToMap.map(bev => {
        if(bev.ibu === null){
            bev.ibu = 0
        }
        return`<tr>
                <td>${bev.name}</td>
                <td>${bev.tagline}</td>
                <td>${bev.abv}</td>
                <td>${bev.ibu}</td>
                </tr>`
            }).join("")
    document.getElementById("tbl1").innerHTML = tableRows
}


function loadData() {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return response.json()
        })
        .then(bevData => {
                makeTRow(bevData)
        })
}
loadData();

function aboveAbv(enteredAbv) {
    enteredAbv = document.getElementById("filter-abv").value;
    if (enteredAbv == "") {
        loadData();
    }
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                return Promise.reject("UPPPS", r.status)
            }
            return response.json()
        })
        .then(bevData => {
            const tRowFiltered = bevData
                .filter(beer => beer.abv >= enteredAbv);
            makeTRow(tRowFiltered)
        })

}
document.getElementById("abv-btn").onclick = () => aboveAbv(enteredAbv);


function sortabv1(){
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            return Promise.reject("UPPPS", r.status)
        }
        return response.json()
    })
    .then(bevData => {
        let sortedBevs = bevData.sort((a, b) => a.abv < b.abv);
            makeTRow(sortedBevs)
    })
}
function sortabv2(){
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            return Promise.reject("UPPPS", r.status)
        }
        return response.json()
    })
    .then(bevData => {
        let sortedBevs = bevData.sort((a, b) => a.abv > b.abv);
            makeTRow(sortedBevs)
    })
}

let shouldSwitching = false;
let switching = true;
let dir = "asc";
function sortHeaderAbv() {
  while (switching) {
    switching = false;
    if (dir === "asc") {
      sortabv1();
      dir = "desc";
      shouldSwitching = true;
      break;
    } else if (dir === "desc") {
      sortabv2();
      dir = "asc";
      shouldSwitching = true;
      break;
    }
  }
  if (shouldSwitching) {
    switching = true;
  } else {
    dir = "desc";
    switching = true;
  }
}
document.getElementById("abvTHeader").onclick = () => sortHeaderAbv();
