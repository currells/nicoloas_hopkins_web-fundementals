document.addEventListener('DOMContentLoaded', function() {
    let imageList = [];
    let currentIndex = 0;

    
    document.getElementById('upload-button').addEventListener('click', function() {
        document.getElementById('image-upload').click();
    });

    
    document.getElementById('image-upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageList.push(e.target.result);
                console.log(imageList); 
                if (imageList.length === 1) {
                    document.getElementById('map-picture').src = imageList[0];
                }
            };
            reader.readAsDataURL(file);
        }
    });


    document.getElementById('right-button').addEventListener('click', function() {
        if (imageList.length > 0) {
            currentIndex = (currentIndex + 1) % imageList.length;
            console.log("Right button clicked. Current index: " + currentIndex);
            document.getElementById('map-picture').src = imageList[currentIndex];
        }
    });

    
    document.getElementById('left-button').addEventListener('click', function() {
        if (imageList.length > 0) {
            currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
            console.log("Left button clicked. Current index: " + currentIndex);
            document.getElementById('map-picture').src = imageList[currentIndex];
        }
    });

    
    document.getElementById('download-button').addEventListener('click', function() {
        if (imageList.length > 0) {
            const link = document.createElement('a');
            link.href = imageList[currentIndex];
            link.download = `image-${currentIndex + 1}.jpg`;
            link.click();
        }
    });
});
