const konami_code = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a,Enter,";
var keys_pressed = "";

document.onkeydown = (e) => {
    e = e || window.event;
    keys_pressed = keys_pressed + e.key + ",";
    console.log("Detected key: "+e.key)

    if (keys_pressed.includes(konami_code)) {
        localStorage.setItem("theme", "doge");
        loadTheme();
        keys_pressed = "";

        window.alert("You have activated Doge mode!")
    }
}