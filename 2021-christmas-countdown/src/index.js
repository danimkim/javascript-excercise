const clock = document.querySelector(".js-clock");

const xMas = new Date(2021, 11, 25, 0, 0, 0);

function getClock() {
  const date = new Date();
  const timeDiff = xMas.getTime() - date.getTime();
  const dday = Math.ceil(timeDiff / 1000 / 60 / 60 / 24);
  const sec = String(59 - date.getSeconds()).padStart(2, "0");
  const min = String(59 - date.getMinutes()).padStart(2, "0");
  const hours = String(23 - date.getHours()).padStart(2, "0");

  clock.innerHTML = `${dday}d ${hours}hr ${min}min ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
