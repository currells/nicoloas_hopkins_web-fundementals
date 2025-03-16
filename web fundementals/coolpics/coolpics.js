document.addEventListener("DOMContentLoaded", function () {
    const viewer = document.querySelector(".viewer");
    const closeBtn = document.querySelector(".close-viewer");
    const images = document.querySelectorAll(".square-picture");
    const viewerImage = viewer.querySelector("img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            viewer.style.display = "grid"; 

            // Get the source of the clicked image and replace "-sm" with "-full" to get the full-size image
            let fullImageSrc = img.src.replace("-sm", "-full");

            viewerImage.src = fullImageSrc; 
        });
    });

    closeBtn.addEventListener("click", () => {
        viewer.style.display = "none";
    });
});
