const konami_code = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,B,A,Enter,";
var keys_pressed = "";

document.onkeydown = (e) => {
    e = e || window.event;
    keys_pressed = keys_pressed + e.key + ",";

    if (keys_pressed.includes(konami_code)) {
        window.alert("you've done the funny");
        keys_pressed = "";
    }
}