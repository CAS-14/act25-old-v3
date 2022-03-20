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

function loadTheme() {
  var loaded = localStorage.getItem("theme");

  if (loaded == null) {
    loaded = "space";
  }

  // place code to change selection in menu here
  
  setTheme(loaded);
}

function changeTheme() {
  var menu = document.getElementById("theme-select")
  var selected = menu.options[menu.selectedIndex].value;
  localStorage.setItem("theme", selected);

  setTheme(selected);
  alert("Theme is now set to " + selected);

  Array.from(document.getElementById("theme-select").options).forEach(function(optionElement) {
    optionElement.removeAttribute("selected");
  });
  document.getElementById("opt-"+selected).setAttribute("selected", "");
}

function setTheme(theme) {
  document.getElementById("applied-theme").href = "/themes/"+theme+".css";
}