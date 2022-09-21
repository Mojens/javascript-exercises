const URL = "https://jsonplaceholder.typicode.com/users/"

//Post request
const options = {
    method: "POST",
    headers : {"Content-type": "application/json"},
    body: JSON.stringify({
        name: "Kurt Wonnegut"
    })
}

fetch(URL,options)
  .then(r=>r.json())  //No error handling is this demo
.then(data => {
    //This is where you can use the result
    console.log(data)
})

//GET Request
fetch(URL)
.then(function (r){
    if(!r.ok){
      return Promise.reject("UPPPS",r.status)
    }
   return r.json()  //Returns a promise
})
.then(data => {
    //Her kan vi arbejde med data
    console.log(data)
    console.log(data.name)
})
.catch(e => {
    console.error(e)
})
console.log("Who was called first")
