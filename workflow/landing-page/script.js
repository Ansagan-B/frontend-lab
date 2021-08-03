function addClassName() {
    let myMenu = document.getElementById("myMenu");
    if (myMenu.className === "menu") {
        myMenu.classList.add("responsive");
    } else {
        myMenu.className = "menu";
    }
}

let myNav = document.getElementById('myNav');

function openNav() {
    myNav.classList.remove('closedNav');
}

function closeNav() {
    myNav.classList.add('closedNav');
}
