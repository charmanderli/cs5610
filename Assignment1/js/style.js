let titles = document.querySelectorAll("h1,h2");
let bodyClass = document.body.classList;
let themeButton = document.querySelector("#theme");

function defaultTheme() {
  if (localStorage.getItem("theme") === "space") {
    themeButton.textContent = "Space";
    if (!bodyClass.contains("space")) {
      bodyClass.add("space");

      for (let title of titles) {
        title.classList.add("spaceTitle");
      }
    }
  } else {
    themeButton.textContent = "Day";
  }
}

defaultTheme();

function switchTheme() {
  bodyClass.toggle("space");
  for (let title of titles) {
    title.classList.toggle("spaceTitle");
  }

  if (bodyClass.contains("space")) {
    themeButton.textContent = "Space";
    localStorage.setItem("theme", "space");
  } else {
    themeButton.textContent = "Day";
    localStorage.setItem("theme", "day");
  }
}

themeButton.addEventListener("click", switchTheme);

let displayForm = document.querySelector("#timeDate");
let placeholder = document.querySelector("#showPlace");

function displayTime(event) {
  const score = document.querySelector('input[name="display"]:checked').value;

  if (score === "date") {
    placeholder.textContent = getDate();
  } else {
    placeholder.textContent = getTime();
  }

  event.preventDefault();
}

displayForm.addEventListener("submit", displayTime);

function getDate() {
  const today = new Date();
  const date = String(today).slice(0, 15);
  return date;
}

function getTime() {
  const today = new Date();
  const time = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return time;
}
