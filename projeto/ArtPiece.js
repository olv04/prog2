export default class ArtPiece{

view
callback
    constructor(data, callback)
    {
   this.view = document.createElement("img")
   this.view.className = "gallery-items"
    this.view.src = data.image
this.view.onclick = () => callback(data)
    }
}

