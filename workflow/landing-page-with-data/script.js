function addClassName() {
    let myMenu = document.getElementById("page-menu");
    if (myMenu.className === "menu") {
        myMenu.classList.add("responsive");
    } else {
        myMenu.className = "menu";
    }
}

let overlay = document.getElementById('overlay');

function openNav() {
    overlay.classList.remove('closed-nav');
}

function closeNav() {
    overlay.classList.add('closed-nav');
}

/* Adding Gifs */

let apiKey = config.API_KEY;
const gifsLimit = 8;
let OFFSET = 0;

const nextBtn = document.getElementById("next-button");
const previousBtn = document.getElementById("previous-button");

nextBtn.addEventListener("click", () => {
    OFFSET += gifsLimit;
    setup(OFFSET)
});

previousBtn.addEventListener("click", () => {
    if (OFFSET - gifsLimit >= 0) {
        OFFSET -= gifsLimit;
        setup(OFFSET)
    }
})

async function setup(offset) {
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=${gifsLimit}&offset=${offset}`
    await fetch(giphyAPI)
        .then(response => {
            return response.json();
        })
        .then(apiResult => {
            const container = document.getElementById('cards-container');
            container.innerHTML = "";
            apiResult["data"].forEach((result, idx) => {
                const content = `
                    <div class="card">
                        <div class="pic-cover">
                            <img src="${result.images.downsized.url}" class="pic" id="gif-1" alt=" "/>
                            <div class="middle">
                                <a class="fa fa-link" href="${result.images.downsized.url}" id="gif-link-1"></a>
                            </div>
                        </div>
                        <div class="card-text">
                            <h4><a href="#" id="gif-title-${idx}">${result.title}</a></h4>
                            <p class="card-date" id="date-${idx}">${result.import_datetime}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Alias, deleniti, id dquibusdam aut
                                optio saepe soluta tempore neque voluptatum.</p>
                        </div>
                    </div>
                `;

                // Append new created card element to the container
                container.innerHTML += content;
            })
        })
        .catch(err => console.log(err));
}

setup(OFFSET)







