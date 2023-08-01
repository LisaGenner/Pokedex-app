let pokemonRepository = (function () {
  let pokemonList = [];
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  let pokemonListElement = $(".pokemon-list");

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let listItem = $('<li class="list-group-item"></li>');
    let button = $(
      '<button class="pokemon-button btn btn-warning" data-target="#pokemon-modal" data-toggle="modal">' +
        pokemon.name +
        "</button>"
    );

    listItem.append(button);
    pokemonListElement.append(listItem);

    button.on("click", function () {
      showDetails(pokemon);
    });
  }

  $('[data-dismiss="modal"]').on("click", function () {
    let pokemonModal = $(".pokemon-modal");
    pokemonModal.hide();
    let targetSelector = $(this).attr("data-target");
    $(targetSelector).modal("show"); // Bootstrap’s own function to make the modal appear
  });

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.height = details.height;
        item.types = details.types.map((type) => type.type.name);
        item.abilities = details.abilities.map(
          (abilities) => abilities.ability.name
        );
        item.weight = details.weight;

        item.imageUrl = details.sprites.front_default;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function closeModal() {
    let pokemonModal = $(".pokemon-modal");
    pokemonModal.hide();
  }

  //Modal code/////
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalBody.empty();
    modalTitle.text(pokemon.name);

    //create element for name in modal container
    let name = "<h1>" + pokemon.name + "</h1>";

    //create img in modal container
    let image = $('<img class="pokemon-img" src="' + pokemon.imageUrl + '" />');
    let height = $("<p>" + "Height : " + pokemon.height + "<p>");
    let weight = $("<p>" + "Weight : " + pokemon.weight + "<p>");
    let types = $("<p>" + "Types : " + pokemon.types + "<p>");
    let abilities = $("<p>" + "Abilities :" + pokemon.abilities + "<p>");

    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(weight);
    modalBody.append(types);
    modalBody.append(abilities);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    closeModal: closeModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
