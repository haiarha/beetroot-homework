const hoursElement = document.getElementById("arrowHours");
const minutesElement = document.getElementById("arrowMinutes");
const secondsElement = document.getElementById("arrowSeconds");

function updateArrows() {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsState = seconds / 60;

  const minutes = date.getMinutes();
  const minutesState = minutes / 60;

  const hours = date.getHours() + minutesState;
  const hoursState = hours / 12;

  hoursElement.style.transform = `rotate(${hoursState}turn)`;
  minutesElement.style.transform = `rotate(${minutesState}turn)`;
  secondsElement.style.transform = `rotate(${secondsState}turn)`;
}

updateArrows();

setInterval(updateArrows, 1000);
