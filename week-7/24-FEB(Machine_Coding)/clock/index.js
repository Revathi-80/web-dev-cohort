function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();

  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const amPm = now.getHours() < 12 ? "AM" : "PM";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  timeElement.innerText = `${hours}:${minutes}:${seconds} ${amPm}`;
  dateElement.innerText = `${now.toLocaleDateString(undefined, options)}`;
}

setInterval(updateClock(), 1000);

updateClock();

// window onLoad
