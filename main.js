function select(a) {
    items = document.querySelectorAll('.single.active');
    if(items.length) {
      items[0].className = 'single';
    }
    a.className = 'single active';
}

var ipBlocks = [""] // test

function getIP(json) {
  console.log("your ip address is "+json.ip)
  if (json.ip in ipBlocks) {
  alert("error 403. goodbye.");
      window.location.replace("https://www.google.com");
  }
}

var colors = {
  "space": "#ff64ff",
  "cranes": "#e0d2c2",
  "forest": "#a2e0dA",
  "firecity": "#f96412",
  "water": "#b7cde5",
  "dark": "#dddddd",
  "faraway": "#bbd93f",
}

// runs automatically on page load
function loadTheme() {
  var loaded = localStorage.getItem("theme");

  if (loaded == null) {
    loaded = "space";
    localStorage.setItem("theme", loaded)
  }

  // selects selected theme from select dropdown menu
  try {
    Array.from(document.getElementById("theme-select").options).forEach(function(optionElement) {
      optionElement.removeAttribute("selected");
    });
    document.getElementById("opt-"+loaded).setAttribute("selected", "");
  } catch {} ;
  
  setTheme(loaded);
}

// runs when theme is selected
function changeTheme() { 
  var menu = document.getElementById("theme-select");
  var selected = menu.options[menu.selectedIndex].value;
  localStorage.setItem("theme", selected);

  setTheme(selected);
}

// applies document theme to given argument
function setTheme(theme) { 
  rs = document.querySelector(":root").style
  rs.setProperty("--accent", colors[theme])
  rs.setProperty("--background", "url('/images/backgrounds/omori-"+theme+".png')")
}

// shortcut to load random theme
function randomTheme() {
  var keys = Object.keys(colors);
  newTheme = keys[Math.floor(keys.length * Math.random())];
    
  localStorage.setItem("theme", newTheme)

  loadTheme();
}

// run loadTheme() on page load globally
window.onload = function(){
  loadTheme();
};