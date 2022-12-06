let pokemonListRepository =
  [
    {
      name: 'Butterfree',
      height: 0.7,
      types: ['bug']
    },
    {
      name: 'Jigglyfuff',
      height: 1.7,
      types: ['fairy']
    },
    {
      name: 'Pikachu',
      height: 1,
      types: ['electric']
    }
  ];


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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll())


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.add(pokemon)
});

pokemonListRepository.forEach(function (user) {
  {
    if (user.types.includes('electric')) {
      document.write(user.name + " is an electric pokemon <br/>")

    } else if (user.types.includes('bug')) {
      document.write(user.name + " is an bug pokemon <br/>")

    } else if (user.types.includes('fairy')) {
      document.write(user.name + " is a fairy pokemon <br/>")
    } else {
      document.write(user.name + " is a pokemon <br/>")
    }
  }
});