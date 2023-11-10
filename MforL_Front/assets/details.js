let details = document.querySelector(".details")

let id = document.location.search.substring(4)

fetch("https://api.tvmaze.com/shows/"+id)
    .then(res => res.json())
    .then(data =>{
        details.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <a href="${data.officialSite}"><img src="${data.image.medium}" class="card-img-top" alt="..."></a>
                <div class="card-body">
                    <a href="${data.officialSite}" class="text-decoration-none text-dark"><h5 class="card-title">${data.name}</h5></a>
                </div>
            </div>
        </div>
        `

        details.innerHTML += `
            <div class="col-9">
                <h5 id="overview">Overview:</h5>
                <p>${data.summary}</p>
                <br>
                <strong id="genres">Genres:</strong><p>${data.genres}</p>
                <br>
                <table class="table table-dark">
                    <tr>
                        <th>Average Runtime</th>
                        <th>Language</th>
                        <th>Country</th>
                        <th>Rating</th>
                        <th>Premiered</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>${data.averageRuntime}</td>
                        <td>${data.language}</td>
                        <td>${data.network.country.code}</td>
                        <td>${data.rating.average}</td>
                        <td>${data.premiered}</td>
                        <td>${data.status}</td>
                    </tr>
                </table>
            </div>
        `




        // let maindiv = document.createElement("div")
        // maindiv.classList.add("col-9")

        // maindiv.innerHTML = `
        //     <h5>Overview:</h5>
        //     <p>${data.sumary}</p>
        //     <strong>Genres:</strong>` +
            // data.genres.forEach(element => {
            //     `<p d-flex>${element},</p>`
            // })
        


        // let table = document.createElement("table")
        // const particulars = ["Average Runtime", "Language", "Country", "Rating", "Premier", "Status"]
        
        // let trH = document.createElement("tr")
        
        // particulars.forEach(p=>{
        //     let th = document.createElement("th")
        //     th.innerHTML = p
        //     trH.appendChild(th)
        // })

        // table.appendChild(tr)

        // let trD = document.createElement("tr")

        // let tdAR = document.createElement("td")
        // tdAR.innerHTML = data.averageRuntime
        // let tdL = document.createElement("td")
        // tdL.innerHTML = data.language
        // let tdC = document.createElement("td")
        // tdC.innerHTML = data.network.country.code
        // let tdR = document.createElement("td")
        // tdR.innerHTML = data.rating.average
        // let tdP = document.createElement("td")
        // tdP.innerHTML = data.premiered
        // let tdS = document.createElement("td")
        // tdS.innerHTML = data.status

        // trD.append(tdAR, tdL. tdC, tdR, tdP, tdS)

        // table.appendChild(trD)

        // maindiv.appendChild(table)

        // details.appendChild(maindiv)

    })