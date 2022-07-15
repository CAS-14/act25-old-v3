var current = "i'm a dog"

window.onload = function () {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            expand.call(this, this)
        }
    }
}

function expand(image) {
    try { current.remove() } catch { console.log("didn't hide thing") }

    if (image.id == "expanded") {

        image.id = ""

    } else {

        let gallery = image.parentNode.parentNode.parentNode
        let nextRow = image.parentNode.parentNode.nextSibling

        let expandedImage = document.createElement("img")
        expandedImage.classList.add("expand")
        expandedImage.src = image.src
        expandedImage.onclick = function () { 
            current.remove() 
            document.getElementById("expanded").id = ""
        }

        let expandedItem = document.createElement("div")
        expandedItem.appendChild(expandedImage)

        let expandedRow = document.createElement("div")
        expandedRow.classList.add("gallery-row")
        expandedRow.appendChild(expandedItem)

        gallery.insertBefore(expandedRow, nextRow)
        expandedRow.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        image.id = "expanded"
        current = expandedRow
        
    }
}