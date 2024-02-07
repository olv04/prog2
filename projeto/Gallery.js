import Paiting from "./Paiting.js";
import Scuplture from "./Scuplture.js";
import Photo from "./photo.js";

export default class Gallery{
artPieces = []

    constructor()
    {

    }

    addArtPiece(data){
        switch (data.type) {
            case "Paiting":
                this.artPieces.push(new Paiting(data))
                break;
                case "Photo":
                this.artPieces.push(new Photo(data))
                break;
                case "Scuplture":
                this.artPieces.push(new Scuplture(data))
                break;
            default:
                break;
        }
    }
}