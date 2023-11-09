let movies = document.querySelector(".movies")

fetch("https://api.tvmaze.com/shows/1")
    .then(res => res.json())
    .then(datas =>console.log(datas))