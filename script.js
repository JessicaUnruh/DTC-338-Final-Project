var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}  

/* Sidenav push to the body once opened */

var x = window.matchMedia("(max-width: 750px)");
checkNav(x); // Call listener function at run time
x.addListener(checkNav); // Attach listener function on state changes


function checkNav(x) {
    //let navItem = document.querySelector("#main");

    if (x.matches) { // If media query matches
        document.getElementById("mainSidenav").style.width = "0%";
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mainSidenav").style.paddingLeft = "0";
        document.getElementById("burger").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
    } else {
        document.getElementById("mainSidenav").style.width = "280px";
        document.getElementById("main").style.marginLeft= "320px";
        document.getElementById("mainSidenav").style.paddingLeft = "1%";
        document.getElementById("burger").style.display = "none";
        document.getElementById("close-btn").style.display = "none";
    }

   /* navItem.onclick = function() { 
      closeNav();
    };*/

 
}



function openNav() {
    document.getElementById("mainSidenav").style.width = "280px";
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("burger").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}

function closeNav() {
    document.getElementById("mainSidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("burger").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
}





