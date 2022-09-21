const URL  = "https://jsonplaceholder.typicode.com/users/";

const res = fetch(URL) //promise
const res2 = res.then((r)=>{ // Promise -> Json
    return r.json();
})
res2.then(data => { // JS Object
    console.log(data);
})

//nemme måde 
fetch(URL)
.then((r)=>{
    console.log(r.status);
    return r.json();
})
.then(data =>{
    console.log(data);
    console.log(data[0].name);
})
console.log("Who was called first")