import Gallery from "./Gallery.js"


window.onload = async () =>{
    const request = await fetch("data.json")
    const result = await request.json()

    console.log(result)

const info = document.querySelector("#info")
const title = info.querySelector("#title")
const artist = info.querySelector("#artist")

    const gallery = new Gallery((item) => {
title.innerText = item.title
artist.innerText = item.artist
    })
    result.forEach(element => {
        gallery.addArtPiece(element)
    });
}