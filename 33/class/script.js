function fetchEpisodeData(page = 1) {
  const url = "https://rickandmortyapi.com/api/episode";

  return fetch(url + `?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      renderList(data.results);
      renderNavigation(data.info);
    });
}

const getEpisodeTemplate = (episode) => `
  <div class="episode">
    <h2 class="episode__title">
      <span class="episode__prefix">
        ${episode.episode}
      </span>
      
      <span class="episode__text">
        ${episode.name}
      </span>
    </h2>

    <div class="episode__air-date">
      ${episode.air_date}
    </div>

    <div class="episode__actions">
      <button class="btn">TODO: Показать всех персонажей</button>
    </div>
  </div>
`;

const getButtonTemplate = (text) => `
  <button class="btn">${text}</button>
`;

function renderList(list) {
  // Весь полученный список преобразовать в DOM элементы
  // и встроить в страницу

  let listHTML = "";

  for (let episode of list) {
    listHTML += getEpisodeTemplate(episode);
  }

  $("#app").children("[data-app=list]").html(listHTML);
}

function renderNavigation(info) {
  let listHTML = "";

  for (let i = 0; i < info.pages; i++) {
    listHTML += getButtonTemplate(i + 1);
  }

  $("#app").children("[data-app=nav]").html(listHTML);
}

$("body").on("click", "#app [data-app=nav] button", function (e) {
  const page = $(this).text();

  fetchEpisodeData(page);
});

fetchEpisodeData();
