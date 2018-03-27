const populate = document.getElementById('populate');
//
// // {} //objeto = obj
// // [] //arreglo0 = Array
//
// let holaAPI = new XMLHttpRequest();
// holaAPI.addEventListener("load", getData);
// holaAPI.open("GET" , "https://rickandmortyapi.com/api/character");
// holaAPI.send();
//
// function getData() {
//   .join('')
//   console.log(data);
//   let data = JSON.parse(this.responseText);
//   let characterInfo = data.results.map(function(character){
//
//     return `
//     <div>
//       ${character.name}
//     </div>
//
//     <div>
//       <img src = "${character.image}"/>
//     </div>
//
//     `
//   }).join('');
//   populate.innerHTML = characterInfo;
// }


function getData(){
  fetch('https://rickandmortyapi.com/api/character/')
  .then((resp) => resp.json())
  .then(function(data){
    console.log(data);
    let characterInfo = data.results.map(function(character){
      return `
      <div>
        ${character.name}
      </div>

      <div>
        <img src = "${character.image}"/>
      </div>

      `
    }).join('');
    populate.innerHTML = characterInfo;
  })
  .catch(function (error) {
      console.log
  })
}
getData();
