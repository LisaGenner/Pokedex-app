let pokemonListRepository =  
[
    {
    name: 'Bulbsaur',
    height: 0.7,
    types: ['grass', 'poison']
    },
    {
      name: 'Charizard',
      height: 1.7,
      types: ['fire', 'flying']
    },
    { name: 'Squirtle',
      height: 1,
      types: ['water']
     }
]; 

pokemonListRepository.forEach(function (user) {
  {
    console.log(user.name + 'is' + user.height + ' tall');
  }
});

let pokemonRepository = (function () {

  let pokemonList = [ 
{
 name: 'Bulbsaur',
 height: 0.7,
 types: ['grass', 'poison']
 },
 {
   name: 'Charizard',
   height: 1.7,
   types: ['fire', 'flying']
 }
] 

function getAll () {
return pokemonList;
}
function add (pokemon) {
   pokemonList.push(pokemon);
}

return {
       getAll: getAll,
add: add
}
}) ()

console.log(pokemonRepository.getAll())









     //wow! that's big
  //let repository = [
    //{name: 'Bulbsaur', height: 0.5},
    //{name: 'Charizard', height: 1.7},
   // {name: 'Squirtle', height: 0.7}
    //];
    
    //for (let i=0; i < repository.length; i++) {
    //if (repository[i].height <0.9) {
    //document.write(repository[i].name + '<br>');
    //}else if (repository[i].height >1.6) {
     // document.write(repository[i].name +"1.6" +"that's a big pokemon" + '<br>')
    //}
     // }
      