function send() {
    try {
        const request = new XMLHttpRequest();
        request.open("POST", document.getElementById("webhook_url"));
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: document.getElementById("message")
        }
        request.send(JSON.stringify(params));

        if (document.getElementById("toggle_clear").checked) {
            clear();
        }

        output.value = "Sent message!"
    } catch (error) {
        console.error(error);
        document.getElementById("output_txt").value = error;
    }
}

function clear() {
    document.getElementById("message").value = "";
}