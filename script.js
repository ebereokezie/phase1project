document.addEventListener("DOMContentLoaded", () => {

    fetch(`https://musicbrainz.org/ws/2/artist/?fmt=json&query=name:nirvana`)
    .then(data => data.json())
    .then(data => {let clean_data = data["artists"][0]
    renderData(clean_data)})






})