

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".mynavbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

var i = 0;
var images = ['images/cover_page1.jpg', 'images/cover_page2.png', 'images/cover_page3.png', 'images/cover_page5.png','images/cover_page6.png','images/cover_page7.png','images/cover_page8.png'];

function changeImage() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 2500);

}
changeImage();

