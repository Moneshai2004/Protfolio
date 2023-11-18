const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

function myMenuFunction(){
    var navMenu = document.getElementById('nav_menu');
    if(navMenu.className === "nav_menu"){
        navMenu.className+="responsive";

    
    }
    else{
        navMenu.className = "nav_menu";
    }
}
function menuClose(){

    var navMenu = document.getElementById('navMenu');
}
var closeBtn = document.getElementsByClassName("close");