  //Will eventually (day 4) come from a server-API
  const names = ["Lars", "Peter", "Jan", "Lise", "Janne","Sofie"]
  function makeList() {
      const lis = names.map(n => `<li>${encode(n)}</li>`).join("")
      document.getElementById("ul1").innerHTML = lis
  }
  document.getElementById("initialize-btn").onclick = () => makeList()


  /****************************************************************************/
  /*        Strategy where we are manipulating individual DOM-Elements        */
  /****************************************************************************/


  document.getElementById("btn-a1").onclick = (evt) => {
      evt.preventDefault()
      const name = document.getElementById("name-input").value
      const listViewElement = document.createElement("li");
      listViewElement.appendChild(document.createTextNode(name))
      const ul = document.getElementById("ul1").appendChild(listViewElement)
      names.push(name)
      console.log(names)
  }

  document.getElementById("btn-a2").onclick = (evt) => {
      evt.preventDefault()
      document.getElementById("ul1").firstChild.remove();
      names.shift()
      console.log(names)
  }
  document.getElementById("btn-a3").onclick = (evt) => {
      evt.preventDefault()
      document.getElementById("ul1").lastChild.remove();
      names.pop
      console.log(names)
  }

  /****************************************************************************/
  /* Strategy where we are manipulating the data, and then re-render the HTML */
  /****************************************************************************/

  document.getElementById("btn-b1").onclick = (evt) => {
      evt.preventDefault()
      const name = document.getElementById("name-input").value
      names.push(encode(name));
      makeList();
  }

  document.getElementById("btn-b2").onclick = (evt) => {
      evt.preventDefault()
      names.shift()
      makeList();
  }

  document.getElementById("btn-b3").onclick = (evt) => {
      evt.preventDefault()
      names.pop()
      makeList();
  }
  //Utility function you can use to escape "untrusted" data inputs
  //Ref: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
  function encode(str) {
      str = str.replace(/&/g, "&amp;");
      str = str.replace(/>/g, "&gt;");
      str = str.replace(/</g, "&lt;");
      str = str.replace(/"/g, "&quot;");
      str = str.replace(/'/g, "&#039;");
      return str;
  }