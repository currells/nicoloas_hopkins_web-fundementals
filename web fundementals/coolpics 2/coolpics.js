document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-bar");
    const navList = document.getElementById("nav-ul-list");
    const viewerObject = document.getElementById("viewer-thing");
    const exitButton = document.getElementById("exit");
    const bigPicture = document.querySelector(".big-image");
    const images = document.querySelectorAll(".square-picture");

    
    menuButton.addEventListener("click", function() {
        navList.classList.toggle("show-menu");
    });



    exitButton.addEventListener("click", function() {
        viewerObject.classList.add("hide-viewer"); 
        viewerObject.style.display = "none";
    });

    images.forEach((image) => {
      image.addEventListener("click", function () {
        viewerObject.style.display = "grid"; 
      });
    });
    
});
