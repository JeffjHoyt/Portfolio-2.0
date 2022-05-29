

autoType();






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



//typing animation on homepage
function autoType() {
  const typedTwo = new Typed(".auto-type2", {
      strings: ['code', 'collaborate', 'learn', 'mountain bike'], 
      typeSpeed: 65,
      backSpeed: 50,
      loop: true
  })
}



