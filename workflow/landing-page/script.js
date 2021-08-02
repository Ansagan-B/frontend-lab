function myFunction() {
    let x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += "responsive";
    } else {
        x.className = "menu";
    }
}

function openNav() {
    console.log("open")
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    console.log("close")
    document.getElementById("myNav").style.height = "0%";
}
