let movies = document.querySelector(".movies")

fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(datas => {
        for (let i = 0; i < 3; i++) {
            movies.innerHTML += `
                <div class="col-3 p-4">
                    <div class="card" style="width: 18rem;">
                        <a href="details.html?id=${datas[i].id}"><img src="${datas[i].image.medium}" class="card-img-top" alt="..."></a>
                        <div class="card-body">
                            <h5 class="card-title">${datas[i].name}</h5>
                            <p class="card-text">Rate: ${datas[i].rating.average}</p>
                        </div>
                    </div>
                </div>
        `
        }
    }
    )