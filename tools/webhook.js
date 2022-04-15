var whbox = document.getElementById("webhook_url");
var msgbox = document.getElementById("message");
var clearchk = document.getElementById("toggle_clear");
var output = document.getElementById("output_txt");

function send() {
    try {
        const request = new XMLHttpRequest();
        request.open("POST", whbox.value);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: msgbox.value
        }
        request.send(JSON.stringify(params));

        if (clearchk.checked) {
            clear();
        }

        output.value = "Sent message!"
    } catch (error) {
        console.error(error);
        output.value = error;
    }
}

function clear() {
    msgbox.value = "";
}