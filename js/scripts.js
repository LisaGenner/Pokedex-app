let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  let pokemonListElement = document.querySelector('.pokemon-list');

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
  };

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
      // console.log(details);
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      return item; //need to return the item
    }).catch(function (e) {
      console.error(e);
    });
  }


  //console.log(pokemon);

  //Modal code/////

  function showModal(pokemon) {
    let modalContainer = document.querySelector('.modal-container'); //creating a reference var called modal container and grabing modal-cont html element assigning/saving to the var
    modalContainer.innerText = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = "Height: " + pokemon.height;

    let pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imageUrl;

    modal.appendChild(titleElement);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);

    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    })

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    let modalContainer = document.querySelector('.modal-container'); 
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('.modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });


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

function showDetails(item) {
  console.log(item);
  pokemonRepository.loadDetails(item).then(function (pokemon) {
    console.log(pokemon); //need to return what we want from the function .url
    pokemonRepository.showModal(pokemon); //since i have showModal inside the pokemonRespository function i need to return it from the function
  });
}

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
