
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


function todayIs() {
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

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