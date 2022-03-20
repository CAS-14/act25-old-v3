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

function loadTheme() { // runs on page load
  var loaded = localStorage.getItem("theme"); // attempts to get theme from local storage

  if (loaded == null) {
    loaded = "space"; // sets to default theme if no local storage
    localStorage.setItem("theme", "space")
  }

  // selects selected theme from select dropdown menu
  Array.from(document.getElementById("theme-select").options).forEach(function(optionElement) {
    optionElement.removeAttribute("selected");
  });
  document.getElementById("opt-"+loaded).setAttribute("selected", "");
  
  setTheme(loaded); // sets theme to loaded theme
}

function changeTheme() { // runs when theme is selected
  var menu = document.getElementById("theme-select")
  var selected = menu.options[menu.selectedIndex].value; // get selected theme
  localStorage.setItem("theme", selected); // set selected theme for storage

  setTheme(selected); // sets theme to selected theme
}

function setTheme(theme) { // sets document theme to argument
  var colors = {
    "space": "#ff64ff",
    "cranes": "#e0d2c2",
    "forest": "#a2e0dA",
    "firecity": "#f96412",
    "water": "#b7cde5",
    "dark": "#dddddd",
  }

  rs = document.querySelector(":root").style
  rs.setProperty("--accent", colors[theme])
  rs.setProperty("--background", "url('/images/backgrounds/omori-"+theme+".png')")
}

// run loadTheme() on page load globally
window.onload = function(){
  loadTheme();
};