let titles = document.querySelectorAll("h1,h2");
let bodyClass = document.body.classList;
let themeButton = document.querySelector("#theme");

//check for the theme in local storage and load
function defaultTheme() {
  if (localStorage.getItem("theme") == "space") {
    bodyClass.add("space");
    themeButton.textContent = "Space";
    for (let title of titles) {
      title.classList.add("spaceTitle");
    }
  }
}

defaultTheme();

//toggle switch theme and remember it in local storage
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

//Create a form and time and date
let displayForm = document.querySelector("#timeDate");
let placeholder = document.querySelector("#showPlace");

function display(event) {
  const item = document.querySelector('input[name="display"]:checked').value;

  if (item === "date") {
    placeholder.textContent = getDate();
  } else {
    placeholder.textContent = getTime();
  }

  event.preventDefault();
}

displayForm.addEventListener("submit", display);

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
