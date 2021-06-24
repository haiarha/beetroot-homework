const timeElement = document.getElementById("time");

timeElement.style.fontSize = "48px";


function getRemainingSeconds(dateStr) {
  
  const date = new Date(dateStr);
  
  const ms = date.getTime();
  const msNow = Date.now();
  
  const diffMs = ms - msNow;
  const diffSeconds = Math.round(diffMs / 1000)

  return diffSeconds > 0 
    ? diffSeconds 
    : 0
}


timeElement.innerText = getRemainingSeconds('2021-06-24 20:15:00');

const intervalKey = setInterval(() => {
  timeElement.innerText--;

  if (+timeElement.innerText <= 0) {
    timeElement.innerText = 0;

    clearInterval(intervalKey);

    alert('Привет!');
  }
}, 1000);


