document.addEventListener("DOMContentLoaded", () => {

// async function getData() {
//     let url =  `https://musicbrainz.org/ws/2/artist/?fmt=json&query=name:nirvana`;
//     let res = await fetch(url);
//     return await res.json();
     
// }

fetch(`https://musicbrainz.org/ws/2/artist/?fmt=json&query=name:nirvana`)
.then(data => data.json())
.then(data => {let clean_data = data["artists"][0]
renderData(clean_data)})

function renderData(element) {
    // let data = await getData();
    // let clean_data = data["artists"][0];
    // console.log(clean_data)
    let albumCard = document.createElement("div")
    albumCard.classList.add("album-card")
    let name = document.createElement("h2")
    name.textContent = `${element.name}`
    let picture = document.createElement("img")
    picture.classList.add("album-picture")
    picture.src= "https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg"
    let artistType = document.createElement("p")
    let countryOfOrigin = document.createElement("p")
    artistType.textContent = `Artist type: ${element.disambiguation}`
    countryOfOrigin.textContent= `Country of Origin: ${element.country}`
    let favoriteButton = document.createElement("button")
    favoriteButton.classList.add("button")
    favoriteButton.textContent = "Favorite"
    albumCard.appendChild(name)
    albumCard.appendChild(picture)
    albumCard.appendChild(artistType)
    albumCard.appendChild(countryOfOrigin)
    albumCard.appendChild(favoriteButton)
    albumContainer.appendChild(albumCard)

}
let albumContainer = document.getElementById("album-container")

// function getEachToy(element){
//     let clean_data = await renderData()
//     // let toys = document.createElement("div")
//     // toys.classList.add("card")
//     // let name = document.createElement("h2")
//     // name.textContent = `${element.name}`
//     // let picture = document.createElement("img")
//     // picture.src = `${element.image}`
//     // picture.classList.add("toy-avatar")
//     // let likes = document.createElement("p")
//     // likes.textContent = `${element.likes} likes`
//     // let button = document.createElement("button")
//     // button.classList.add("like-btn")
//     // button.setAttribute('id', `${element.id}`)
//     // button.textContent = "Like ❤️"
//     // toys.appendChild(name)
//     // toys.appendChild(picture)
//     // toys.appendChild(likes)
//     // toys.appendChild(button)
    
//     // toyCollection.appendChild(toys)
//   }

// // fetch(`https://musicbrainz.org/ws/2/artist/?fmt=json&query=name:nirvana`)
// // .then(data => data.json())
// // .then(data => console.log(data))


})