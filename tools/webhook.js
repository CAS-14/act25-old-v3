function send() {
    var wh_url = document.getElementById("webhook_url").value;
    var wh_msg = document.getElementById("message").value;
    var clr = document.getElementById("toggle_clear").value;

    try {
        const request = new XMLHttpRequest();
        request.open("POST", wh_url);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: wh_msg
        }
        request.send(JSON.stringify(params));

        if (clr) {
            clear();
        }

        document.getElementById("error").value = "Sent message!"
    } catch (err) {
        console.error(err);
        document.getElementById("error").value = err;
    }
}

function clear() {
    document.getElementById("message").value = "";
}