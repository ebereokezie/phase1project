document.addEventListener("DOMContentLoaded", () => {
    let searchForm = document.getElementById("search-bar")
    searchForm.addEventListener("submit", (event) =>{
        event.preventDefault()
        console.log(document.querySelector("input").value)
        let artistInput = document.querySelector("input").value

    fetch(`https://musicbrainz.org/ws/2/artist/?fmt=json&query=name:${artistInput}`)
        .then(data => data.json())
        .then(data => {let clean_data = data["artists"][0]
    renderData(clean_data)})

    searchForm.reset()
    })

    

    function renderData(element) {

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
       
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "x"
        deleteButton.addEventListener("click", (event)=>{
        event.target.parentNode.remove()})
        
        
        
        let favoriteButton = document.createElement("button")
        favoriteButton.classList.add("button")
        favoriteButton.textContent = "Favorite"


        let favoriteList = document.createElement("div")
        favoriteList.classList.add("my-albums")

        let listName = document.createElement("li")
        listName.textContent = `${element.name}`
        
        albumCard.appendChild(deleteButton)
        albumCard.appendChild(name)
        albumCard.appendChild(picture)
        albumCard.appendChild(artistType)
        albumCard.appendChild(countryOfOrigin)
        albumCard.appendChild(favoriteButton)
        albumContainer.appendChild(albumCard)

        albumContainer.addEventListener("click",(event)=>{
            if(event.target.className === "button"){
                favoriteList.appendChild(listName)
                formContainer.appendChild(favoriteList)
            }
            console.log(event.target)
        })
    
    }
    let albumContainer = document.getElementById("album-container")
    let formContainer = document.getElementById("favorite-list")



})

