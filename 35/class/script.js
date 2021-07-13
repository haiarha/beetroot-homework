// http://www.omdbapi.com/?apikey=8b912071&

let searchResult = [];
let inputValue = "";
let categoryValue = "";

$("#searchButton").click(() => {
  inputValue = $("#searchText").val();
  categoryValue = $("#searchCategory").val();

  updateFetchMovies();
});

$("body").on("click", '#pagination [data-btn="pagination"]', function (e) {
  const page = $(this).data("page");

  updateFetchMovies(page);
});

$("body").on("click", '#results [data-btn="movie"]', function () {
  const id = $(this).data("id");

  let favoriteList = getFavorites();

  if (favoriteList.includes(id)) {
    favoriteList = favoriteList.filter((item) => item !== id);
  } else {
    favoriteList.push(id);
  }

  localStorage.setItem("favorite", favoriteList);

  renderList(searchResult);
});

function getFavorites() {
  const favoriteItem = localStorage.getItem("favorite");

  const favoriteList = favoriteItem !== null ? favoriteItem.split(",") : [];

  return favoriteList;
}

function fetchMovies(text, type, page) {
  $(".loader").show();

  return fetch(
    `//www.omdbapi.com/?apikey=8b912071&s=${text}&type=${type}&page=${page}`
  )
    .then((response) => {
      $(".loader").hide();

      return response.json();
    })
    .catch((error) => {
      console.log("Ошибка загрузки");

      $(".loader").hide();
    });
}

function updateFetchMovies(page = 1) {
  fetchMovies(inputValue, categoryValue, page).then((data) => {
    searchResult = data.Search || [];

    renderList(searchResult);

    const pageCount = Math.ceil(data.totalResults / searchResult.length);
    renderNavigation(pageCount);
  });
}

function renderList(list) {
  const getTemplate = (data, isFavorite) => `
    <div class="movie">
      <div class="movie__favorite">
        <button 
          class="movie__favorite-btn
            ${isFavorite ? "movie__favorite-btn--active" : ""}
          " 
          data-btn="movie"
          data-id="${data.imdbID}"
        ></button>
      </div>

      <div class="movie__poster">
        <img src="${data.Poster}" />
      </div>

      <div class="movie__description">
        <h2 class="movie__title">${data.Title}</h2>
        <p>${data.Year}</p>
      </div>
    </div>
  `;

  let listHTML = "";

  const favoriteList = getFavorites();

  for (let movie of list) {
    listHTML += getTemplate(movie, favoriteList.includes(movie.imdbID));
  }

  if (!listHTML) {
    listHTML = "<h2>Ничего не найдено</h2>";
  }

  $("#results").html(listHTML);
}

function renderNavigation(count) {
  const getTemplate = (number) => `
    <button class="btn" 
      data-btn="pagination"
      data-page="${number}"
    >${number}</button>
  `;

  let listHTML = "";

  for (let i = 0; i < count; i++) {
    listHTML += getTemplate(i + 1);
  }

  $("#pagination").html(listHTML);
}
