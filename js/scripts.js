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
    {
      name: 'Squirtle',
      height: 1,
      types: ['water']
    }
  ];

let pokemonType = [
  { name: "Butterfree", type: 'bug' },
  { name: "Jigglyfuff", type: 'fairy' },
  { name: "Pikachu", type: 'electric' }
];

pokemonListRepository.forEach(function (user) {
  {
    if (user.type === 'electric') {
      document.write(user.name + "is an electric pokemon <br/>")
    
    } else if (user.type === 'bug') {
    document.write(user.name + "is an bug pokemon <br/>")
    
  } else if (user.type === 'fairy')
  document.write(user.name + "is a fairy pokemon <br/>")
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
    },
    {
      name: 'Squirtle',
      height: 1,
      types: ['water']
    }
  ]

  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "pokemon.name";
    button.classList.add("button-class")
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll())


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)

});