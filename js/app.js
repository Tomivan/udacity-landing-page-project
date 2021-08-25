function goToTop() {
    document.documentElement.scrollTop = 0;
}
function welcome() {
    window.scrollTo(0, document.getElementById('welcome').offsetTop)
}
function about() {
    window.scrollTo(0, document.getElementById('about').offsetTop)
}
function contactUs() {
    window.scrollTo(0, document.getElementById('contact-us').offsetTop)
}

const navbar = document.getElementById("nav");

const lis = navbar.getElementsByClassName('list');

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        console.log("clicked");
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", ""); 
        this.className += " active";
  });
}