document.addEventListener("DOMContentLoaded", () => {
    let searchForm = document.getElementById("search-bar")
    searchForm.addEventListener("submit", (event) =>{
        event.preventDefault()
        console.log(document.querySelector("input").value)
        let artistInput = document.querySelector("input").value

    fetch(`https://musicbrainz.org/ws/2/artist/?fmt=json&query=name:${artistInput}`)
        .then(data => data.json())
        .then(data => {let artistsInfo = data["artists"]
        let artistInfo = artistsInfo.filter(highestProbability)
        renderData(artistInfo[0])
        })

    searchForm.reset()
    })

    function highestProbability(artistInfo){
        return artistInfo.score === 100
    }

    let albumContainer = document.getElementById("album-container")
    let formContainer = document.getElementById("favorite-list")

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
       
        let deleteCardButton = document.createElement("button")
        deleteCardButton.classList.add("delete-button")
        deleteCardButton.textContent = "x"
        deleteCardButton.addEventListener("click", (event)=>{
        albumCard.remove();
        ;})
        
        
        
        let favoriteButton = document.createElement("button")
        favoriteButton.classList.add("favButton")
        favoriteButton.textContent = "Favorite"


        let favoriteList = document.createElement("div")
        favoriteList.classList.add("my-albums")

        
        
        let listName = document.createElement("li")
        
        

               
        albumCard.appendChild(deleteCardButton)
        albumCard.appendChild(name)
        albumCard.appendChild(picture)
        albumCard.appendChild(artistType)
        albumCard.appendChild(countryOfOrigin)
        albumCard.appendChild(favoriteButton)
        albumContainer.appendChild(albumCard)

        favoriteButton.addEventListener("click",(event)=>{
            if(event.target.className === "favButton"){
                listName.textContent = `${element.name} `
                favoriteList.appendChild(listName)
                formContainer.appendChild(favoriteList)
            }
            console.log(event.target)
        })
    
    }
    

 

})

