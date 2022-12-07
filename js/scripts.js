let pokemonRepository = (function () {
  let repository = [
    {
      name: 'Bulbsaur',
      height: 0.7,
      types: ['grass', 'poison'],
    },
    {
      name: 'Charizard',
      height: 1.7,
      types: ['fire', 'flying'],
    },
    {
      name: 'Squirtle',
      height: 1,
      types: ['water'],
    }
  ];

  function getAll() {
    return repository;
  }
function addListItem(pokemon) {
//created new varible, defined in class HTML
let pokemonList = document.querySelector (".pokemon-list"); 
  
//created li element var
let listpokemon = document.createElement("li"); 

//created button tag
let button = document.createElement("button");

//placeholder inside of button
button.innerText = Pokemon.name; 
//changed name in innertext to list actual name vs placeholder
// button.innerText = pokemon.name;

//added CSS
button.classList.add("button-class");
listpokemon.appendChild(button);
pokemonList.appendChild(listpokemon);
}

return {
    add: add,
    getAll: getAll,
    addListItem : addListItem
  };

})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});