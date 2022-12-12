let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=3';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
      // "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  };
  function getAll() {
    return pokemonList;
  };

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");   //created new varible, defined in class HTML. creating ref variable names pokemon-list. go to HTML file and grab that name
    let listpokemon = document.createElement("li");//created li element var. i want to create a new list item, child under the "ul" parent. "list item". created a tag.  the var is going to hold the element that you are going to create.
    let button = document.createElement("button");//created button var tag, button var holding the 
    button.innerText = pokemon.name;    //placeholder inside of button. access innertext property of the button.   
    //changed name in innertext to list actual name vs placeholder
    // button.innerText = pokemon.name;
    button.classList.add("button-class");//added CSS, drilling down the button in CSS
    listpokemon.appendChild(button); //push button into the li (putting something into the button, add child), puts the created button into the li
    pokemonList.appendChild(listpokemon); //grab the list item (li) and push to the pokemon list (insert or push to the list)
    button.addEventListener("click", function (event) { //go to the button and i want to add the event.  user can click on the button, i want to do something i want to run this fuction that is inside the function line 30-32
      showDetails(pokemon);
    });
  }

  //other functions remain here

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  // pokemonRepository.loadList().then(function () {
  // Other functions here…

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


// pokemonRepository.add({
// name: "Pikachu", height: 0.3, types: ["electric"]
// });

// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
