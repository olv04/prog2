import Alentejo from "./Alentejo.js";
import ArtPiece from "./ArtPiece.js";
import Beco from "./Beco.js";
import Lisboa from "./Lisboa.js";
import Olhao from "./Olhao.js";

export default class Gallery{
artPieces = []
view
callback 
    constructor(callback)
    {
        this.callback = callback;
this.view = document.querySelector("#gallery-view")
    }

    addArtPiece(data){
        let artPiece
        switch (data.type) {
            case "lisboa":
                artPiece = new Lisboa(data,(item) => {
                    this.callback(item)
                })
                break;
                case "beco":
                    artPiece = new Beco(data,(item) => {
                        this.callback(item)
                    })
                break;
                case "alentejo":
                    artPiece = new Alentejo(data, (item) => {
                        this.callback(item)
                    })
                break;
                case "olhao":
                    artPiece = new Olhao(data, (item) => {
                        this.callback(item)
                    })
                break;
            default:
                break;
        } if (artPiece){
            this.view.appendChild(artPiece.view) 
        }
        this.artPieces.push(artPiece)
    }
}