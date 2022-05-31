
//footer buttons
function NewTabLinkedin() {
    window.open(
      "https://www.linkedin.com/in/jeff-hoyt/", "_blank");
};

function NewTabBehance() {
    window.open(
      "https://www.behance.net/JeffHoyt", "_blank");
};

function NewTabHackerrank() {
  window.open(
    "https://www.hackerrank.com/jeffjhoyt", "_blank");
  };

//Top nav bag settings to disapear on scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("navbar").style.top = "0";
} else {
document.getElementById("navbar").style.top = "-70px";
}
prevScrollpos = currentScrollPos;
}




const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

const d = new Date();
let day = weekday[d.getDay()];

function mouseOver() {
    document.getElementById("demo").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("demo").style.color = "#76B5BC";
  }




function todayIs() {
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const amounts = ["17.45", "34.92", "52.36", "31.08", "23.39", "43.28", "25.48"]
    const d = new Date();
    let day = weekday[d.getDay()];
    let mouseOver = document.getElementById(day);


    if (day == 'tuesday') {
         mouseOver.style.backgroundColor = "#76B5BC";
         mouseOver.addEventListener("mouseover", function( event ) {
            event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
        })
        mouseOver.addEventListener("mouseleave", function( event ) {
            event.target.style.backgroundColor = "#76B5BC";
        })
    } else if (day == 'wednesday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'thursday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'friday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'saturday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'sunday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'monday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else {
        console.log("hello")
    }
}

function todayIsAmount() {
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const amounts = ["17.45", "34.92", "52.36", "31.08", "23.39", "43.28", "25.48"]
    const d = new Date();
    let day = weekday[d.getDay()];
    let mouseOver = document.getElementsByClassName(day);



    if (day == 'tuesday') {
        mouseOver.style.visibility = "hidden";
        mouseOver.addEventListener("mouseover", function( event ) {
            event.target.style.visibility = "visible";
        })
        mouseOver.addEventListener("mouseleave", function( event ) {
            event.target.style.visibility = "hidden";
        })
    } else if (day == 'wednesday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'thursday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'friday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'saturday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'sunday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else if (day == 'monday') {
        document.getElementById(day).style.backgroundColor = "#76B5BC";
        mouseOver.addEventListener("mouseover", function( event ) {
           event.target.style.backgroundColor = "rgb(124, 185, 191, 74%)";
       })
       mouseOver.addEventListener("mouseleave", function( event ) {
           event.target.style.backgroundColor = "#76B5BC";
       })
    } else {
        console.log("hello")
    }
}


todayIs();


/*
function todayIsHover() {
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const amounts = ["17.45", "34.92", "52.36", "31.08", "23.39", "43.28", "25.48"]
    const d = new Date();
    let day = weekday[d.getDay()];

    if (day == 'tuesday') {
         document.getElementById("tuesday").style.backgroundColor = "#76B5BC";
    } else if (day == 'wednesday') {
        document.getElementById("wednesday").style.backgroundColor = "#76B5BC"
    } else if (day == 'thursday') {
        document.getElementById("thursday").style.backgroundColor = "#76B5BC"
    } else if (day == 'friday') {
        document.getElementById("friday").style.backgroundColor = "#76B5BC"
    } else if (day == 'saturday') {
        document.getElementById("saturday").style.backgroundColor = "#76B5BC"
    } else if (day == 'sunday') {
        document.getElementById("sunday").style.backgroundColor = "#76B5BC"
    } else if (day == 'monday') {
        document.getElementById("monday").style.backgroundColor = "#76B5BC"
    }      
}

todayIs();

*/