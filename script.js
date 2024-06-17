<<<<<<< HEAD
// Referencias iniciales
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Función para obtener datos de la API
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    // Si el campo de entrada está vacío
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    } else {
        // Si el campo de entrada NO está vacío
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // Si la película existe en la base de datos
                if (data.Response == "True") {
                    result.innerHTML = `
                        <div class="info">
                            <img src="${data.Poster}" class="poster">
                            <div>
                                <h2>${data.Title}</h2>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                            </div>
                        </div>
						<div class="details">
    <span>${data.Rated}</span>
    <span>${data.Year}</span>
    <span>${data.Runtime}</span>
</div>
<div class="genre">
    <div>${data.Genre.split(",").join("</div><div>")}</div>
</div>
    <h3>Plot:</h3>
    <p>${data.Plot}</p>
    <h3>Cast:</h3>
    <p>${data.Actors}</p>
    `;
                }
                else { result.innerHTML=`<h3 class='msg'>${data.erro}</h3>`
            }
            })
//if error occurs
.catch(()=> {
    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
});
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);

=======
// Referencias iniciales
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Función para obtener datos de la API
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    // Si el campo de entrada está vacío
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    } else {
        // Si el campo de entrada NO está vacío
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // Si la película existe en la base de datos
                if (data.Response == "True") {
                    result.innerHTML = `
                        <div class="info">
                            <img src="${data.Poster}" class="poster">
                            <div>
                                <h2>${data.Title}</h2>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                            </div>
                        </div>
						<div class="details">
    <span>${data.Rated}</span>
    <span>${data.Year}</span>
    <span>${data.Runtime}</span>
</div>
<div class="genre">
    <div>${data.Genre.split(",").join("</div><div>")}</div>
</div>
    <h3>Plot:</h3>
    <p>${data.Plot}</p>
    <h3>Cast:</h3>
    <p>${data.Actors}</p>
    `;
                }
                else { result.innerHTML=`<h3 class='msg'>${data.erro}</h3>`
            }
            })
//if error occurs
.catch(()=> {
    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
});
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);

>>>>>>> 652d6c9f00904c934a206d214406d83f80e6e5b7
