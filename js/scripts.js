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

  let pokemonType =[
    {name: "Butterfree", type: 'bug'},
    {name: "Jigglyfuff", type: 'fairy'},
    {name: "Pikachu", type: 'electric'}
   ];

for (let i=0; i < pokemonType.length; i++) {
  if (pokemonType [i].type === 'electric') {
    console.log(pokemonType[i].name + "is an electric pokemon");
    } else if (pokemonType[i].type === 'bug')
    {
      console.log(pokemonType[i].name + "is an bug pokemon");
   } else {
      console.log(pokemonType[i].name + "is a fairy pokemon")
   }};
 

pokemonListRepository.forEach(function (user) {
  {
    document.write(user.name + ' is ' + user.height + ' tall');
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
    getAll: getAll,
    add: add
  }
}) ();

console.log(pokemonRepository.getAll())
