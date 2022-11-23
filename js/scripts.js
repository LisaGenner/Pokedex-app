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

//pokemon list
let pokemonList = ['Bulbsaur', 'Charizard', 'Squirtle'];
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList);
}


//document name + size
let pokemonName = {name: 'Charizarde', size: 1.7};

if  (pokemon.size > 1.5) {
    document.write(pokemon.name  + 1.7);
  }

//wow! that is a large pokemon
let pokemon = {name: 'Charizarde', size: 1.7};

if  (pokemon.size > 1.5) {
    document.write('this is a large pokemon');
  }

  //wow! that's big
  let repository = [
    {name: 'Bulbsaur', height: 0.5},
    {name: 'Charizard', height: 1.7},
    {name: 'Squirtle', height: 0.7}
    ];
    
    for (let i=0; i < repository.length; i++) {
    if (repository[i].height <0.9) {
    console.log(repository[i].name + "0.5");
    }else if (repository[i].height >1.6);{
      console.log(repository[i].name +"1.6" +"that's a big pokemon")
    }
      }
  
  //if (condition1) {
    // block of code to be executed if condition1 is true
  //} else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
  //} else {
    // block of code to be executed if the condition1 is false and condition2 is false
  //}