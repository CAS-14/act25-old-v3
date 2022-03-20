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

function switchTheme(menu) {
    var selected = menu.options[menu.selectedIndex].value;
    alert('The option value is "' + selected);
}