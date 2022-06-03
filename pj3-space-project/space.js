let tabletResize = document.getElementById("#home-bg")

function tablet(tabletSize) {
    if (tabletSize.matches) { // If media query matches
        document.getElementById("home-bg").style.backgroundImage = `url("mages/Pj3-tablet-bg.svg");`
      } else {
        document.body.style.backgroundColor = "pink";
      }

}

let tabletSize = window.matchMedia("(max-width: 780px)")
tablet(tabletSize) // Call listener function at run time
tabletSize.addListener(tablet) // Attach listener function on state changes