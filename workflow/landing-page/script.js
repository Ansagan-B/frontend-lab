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
