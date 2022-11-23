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

  //wow! that's big
  let repository = [
    {name: 'Bulbsaur', height: 0.5},
    {name: 'Charizard', height: 1.7},
    {name: 'Squirtle', height: 0.7}
    ];
    
    for (let i=0; i < repository.length; i++) {
    if (repository[i].height <0.9) {
    document.write(repository[i].name + '<br>');
    }else if (repository[i].height >1.6) {
      document.write(repository[i].name +"1.6" +"that's a big pokemon" + '<br>')
    }
      }
      