function navclick() {
  var element = document.getElementById("mobv");
  // if hidden class is present then remove it
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  }
  // if hidden class is not present then add it
  else {
    element.classList.add("hidden");
  }
}

function themechange() {
  var element = document.getElementById("mode");
  localStorage.setItem("theme", "dark");
  if (element.classList.contains("dark")) {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  else {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
console.log("Made By ------- Sijon ");
