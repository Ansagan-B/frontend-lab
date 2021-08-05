function addClassName() {
    let myMenu = document.getElementById("page-menu");
    if (myMenu.className === "menu") {
        myMenu.classList.add("responsive");
    } else {
        myMenu.className = "menu";
    }
}

let myNav = document.getElementById('overlay');

function openNav() {
    myNav.classList.remove('closed-nav');
}

function closeNav() {
    myNav.classList.add('closed-nav');
}

// Gifs

let apiKey = config.API_KEY;
const pic_cards_ids = ["gif-1", "gif-2", "gif-3", "gif-4", "gif-5", "gif-6", "gif-7", "gif-8", "gif-9", "gif-10"];
const LIMIT_GIFS = 8;
let OFFSET = 0;
let links_ids = ["gif-link-1", "gif-link-2", "gif-link-3", "gif-link-4", "gif-link-5", "gif-link-6", "gif-link-7", "gif-link-8"]
let titles_ids = ["gif-title-1", "gif-title-2", "gif-title-3", "gif-title-4", "gif-title-5", "gif-title-6", "gif-title-7", "gif-title-8"]
let date_ids = ["date-1", "date-2", "date-3", "date-4", "date-5", "date-6", "date-7", "date-8"]


const nextBtn = document.getElementById("next-button");
const previousBtn = document.getElementById("previous-button");

nextBtn.addEventListener("click", () => {
    nextBtn.classList.add("invisible")
    previousBtn.classList.remove("invisible");
    OFFSET += LIMIT_GIFS;
    setup(OFFSET)
});

previousBtn.addEventListener("click", () => {
    previousBtn.classList.add("invisible");
    nextBtn.classList.remove("invisible");
    OFFSET -= LIMIT_GIFS;
    setup(OFFSET)
})

async function setup(offset) {
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=${LIMIT_GIFS}&offset=${offset}`
    await fetch(giphyAPI)
        .then(response => {
            return response.json();
        })
        .then(json => {
            for (let i = 0; i < LIMIT_GIFS; i++) {
                let src = json.data[i].images.downsized.url;
                let title = json.data[i].title;
                let date = json.data[i].import_datetime;
                document.getElementById(pic_cards_ids[i]).src = src;
                document.getElementById(links_ids[i]).href = src;
                document.getElementById(titles_ids[i]).textContent = title;
                document.getElementById(date_ids[i]).textContent = date;
            }
        })
        .catch(err => console.log(err));
}

setup(OFFSET)







