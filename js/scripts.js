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


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  };
  function getAll() {
    return repository;
  };

  function showDetails(pokemon) {
    console.log(pokemon)
  };

  function addListItem(pokemon) {
    //created new varible, defined in class HTML
    let pokemonList = document.querySelector(".pokemon-list");
  };
  //created li element var
  let listpokemon = document.createElement("li");

  //created button tag
  let button = document.createElement("button");
  button.addEventListner('click'), function (event) {
    showDetails(pokemon);

    //placeholder inside of button
    button.innerText = pokemon.name;
    //changed name in innertext to list actual name vs placeholder
    // button.innerText = pokemon.name;

    //added CSS
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

  pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

  console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });

