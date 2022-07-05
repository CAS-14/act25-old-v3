function select(a) { // used back when the website was one page and responsive
    items = document.querySelectorAll('.single.active');
    if(items.length) {
      items[0].className = 'single';
    }
    a.className = 'single active';
}

var colors = {
  "new-space": "#ff64ff", // coming soon - ai generated novelai sigurd
  "new-stars": "#f6f5f2",
  "omori-space": "#ff64ff",
  "omori-cranes": "#e0d2c2",
  "omori-forest": "#a2e0dA",
  "omori-firecity": "#f96412",
  "omori-water": "#b7cde5",
  "omori-dark": "#dddddd",
  "omori-faraway": "#bbd93f",
  "doge": "#cec59a", // secret dog 2012
}

var themes = Object.keys(colors);
var public_theme_count = 2

// runs automatically on page load
function loadTheme() {
  var loaded = localStorage.getItem("theme");

  if (!(themes.includes(loaded))) {
    loaded = themes[0];
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
function selectTheme() { 
  var menu = document.getElementById("theme-select");
  var selected = menu.options[menu.selectedIndex].value;
  localStorage.setItem("theme", selected);

  setTheme(selected);
}

// applies document theme to given argument
function setTheme(theme) { 
  rs = document.querySelector(":root").style
  rs.setProperty("--accent", colors[theme])
  rs.setProperty("--background", "url('/images/themes/"+theme+".png')")
}

// shortcut to load random theme
function randomTheme() {
  newTheme = themes[Math.floor((public_theme_count) * Math.random())];

  localStorage.setItem("theme", newTheme);

  loadTheme();
}

// run loadTheme() on page load globally
window.onload = function(){
  loadTheme();
};

function toggleItem(id) {
  var item = document.getElementById(id);
    
  if (item.style.display === "none" || item.style.display === "") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
}

function goHome() {
  window.location.href = "https://www.act25.com/"
}