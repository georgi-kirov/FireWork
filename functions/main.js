var sound = "./assets/sounds/fire.mp3"

var howl = new Howl({
    src: [sound],
    autoplay: true,
    loop : true
});

// Initialize images in an array
var fireImages = [
    './assets/fireImages/fire_1.png',
    './assets/fireImages/fire_2.png',
    './assets/fireImages/fire_3.png',
    './assets/fireImages/fire_4.png',
    './assets/fireImages/fire_5.png',
    './assets/fireImages/fire_6.png',
    './assets/fireImages/fire_7.png',
    './assets/fireImages/fire_8.png',
    './assets/fireImages/fire_9.png',
    './assets/fireImages/fire_10.png',
    './assets/fireImages/fire_11.png',
    './assets/fireImages/fire_12.png',
    './assets/fireImages/fire_13.png',
    './assets/fireImages/fire_14.png',
    './assets/fireImages/fire_15.png',
    './assets/fireImages/fire_16.png',
    './assets/fireImages/fire_17.png',
    './assets/fireImages/fire_18.png',
    './assets/fireImages/fire_19.png',
    './assets/fireImages/fire_20.png',
    './assets/fireImages/fire_21.png',
    './assets/fireImages/fire_22.png',
    './assets/fireImages/fire_23.png',
    './assets/fireImages/fire_24.png',
    './assets/fireImages/fire_25.png',
    './assets/fireImages/fire_26.png',
    './assets/fireImages/fire_27.png',
    './assets/fireImages/fire_28.png',
    './assets/fireImages/fire_29.png',
    './assets/fireImages/fire_30.png',
];

// An index to track the contender image 
var imageIndex = 0;
var bannerImage; 

// An event callback for starting the interval
function startInterval() {
    setInterval(displayNextImage, 50);
}

function displayNextImage() {
    bannerImage.src = fireImages[imageIndex];

    if(imageIndex === (fireImages.length-1)) {
        imageIndex = 0;
    } else {
        imageIndex++;  
    }
}

window.onload = function() {
    bannerImage = document.getElementById('fireImage');
    startInterval();
}