let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  let pokemonListElement = $('.pokemon-list');

  // function add(pokemon) {
  //   if (
  //     typeof pokemon === "object" &&
  //     "name" in pokemon
  //     // "detailsUrl" in pokemon
  //   ) {
  //     pokemonList.push(pokemon);
  //   } else {
  //     console.log("pokemon is not correct");
  //   }
  // };

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  };
 
function addListItem(pokemon) {
  let listItem = $('<li class="list-group-item"></li>');
  let button = $('<button class="pokemon-button btn btn-warning" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name +  '</button>');
 button.on('click',function() {
    // console.log(789);
    showDetails(pokemon);
  });
  listItem.append(button);
  pokemonListElement.append(listItem);
  // console.log(button);
  
  $('[data-toggle="modal"]').on('click', function(){
      // console.log(789);
  let targetSelector = $(this).attr('data-target');
  $(targetSelector).modal('show'); // Bootstrap’s own function to make the modal appear
});
}

 
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
      return response.json();
    })
      .then(function (json) {
      json.results.forEach(function (item) {//calling name ITEM, not pokemon name
        let pokemon = { //needs to stay as pokemon otherwise buttons dont show up
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    // console.log(23);
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
      return response.json();
    })
      .then(function (details) {
      // Now we add the details to the item
      // console.log(details);
      item.imageUrlFront = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types.map((type) => type.type.name);
        item.abilities = details.abilities.map(
          (abilities) => abilities.ability.name
        );
        item.weight = details.weight;
    //   return item; //need to return the item
    }).catch(function (e) {
      console.error(e);
    });
  }
  //console.log(pokemon);
// function showDetails(item) {
//   console.log(item);
//   pokemonRepository.loadDetails(item).then(function (pokemon) {
//     console.log(pokemon); //need to return what we want from the function .url
//     pokemonRepository.showModal(pokemon); //since i have showModal inside the pokemonRespository function i need to return it from the function
//   });
// }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  
  //Modal code/////
function showModal(pokemon) {
  // console.log(456);
 let modalBody = $(".modal-body");
 let modalTitle = (".modal-title");


  modalTitle.pokemon();
  modalBody.text(pokemon.name);

    //create element for name in modal container
    let name =("<h1>" + pokemon.name + "</h1>");

    //create img in modal container
    let image = $('<image class="pokemon-img" src ' + pokemon.imageUrlFront + '" />');
    let height = $("<p>" +"Height : " + pokemon.height + "<p>");
    let weight = $("<p>" + "Weight : " + pokemon.weight + "<p>");
    let types = $("<p>" + "Types : " + pokemon.types + "<p>");
    let abilities= $("<p>" + "Abilities :" + pokemon.abilities +"<p>");
    
    
    modalTitle.append(name);
    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(weight);
    modalBody.append(types);
    modalBody.append(abilities);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();



pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
// pokemonRepository.loadList()

