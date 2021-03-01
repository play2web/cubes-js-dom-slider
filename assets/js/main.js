var thumbs = document.querySelector('.slider-thumbs');
var images = document.querySelector('.slider-images');
var imageWidth = images.clientWidth;
var imageChangeTime = 3000;
var imageIndex = 0;
var sliderImages = ['https://via.placeholder.com/700x400.png?text=1', 'https://via.placeholder.com/700x400.png?text=2','https://via.placeholder.com/700x400.png?text=3', 'https://via.placeholder.com/700x400.png?text=4'];

function remvoeAllActiveThumbs() {
    for (var thumb of thumbs.children) {
        thumb.classList.remove('active');
    }
}

function createSlider(sliderImages) {
    for (var i = 0; i < sliderImages.length; i++) {
        var image = '<img src="' + sliderImages[i]+ '" alt="' + i + '">';
        images.innerHTML = images.innerHTML + image;
    }
    for (var i = 0; i < sliderImages.length; i++) {
        var thumb = '<img src="' + sliderImages[i]+ '" alt="' + i + '">';
        thumbs.innerHTML = thumbs.innerHTML + thumb;
    }
    thumbs.querySelector('img:first-child').classList.add('active');
}

function changeImage(index) {
    var pos = imageWidth * imageIndex;
    var interval = setInterval(slide, 1);

    function slide() {
        if (pos === imageWidth * index) {
            imageIndex = index;
            clearInterval(interval);
        } else {
            if (index > imageIndex) {
                pos += 10;
            } else if (index < imageIndex) {
                pos -= 10;
            }
            images.style.left = '-' + pos + 'px';
        }
    }
}

function nextImage() {
    remvoeAllActiveThumbs();
    let index = imageIndex + 1;
    if (index === thumbs.children.length) {
        index = 0;
    }
    thumbs.children[index].classList.add('active');
    changeImage(index);
}

createSlider(sliderImages);
setInterval(nextImage, imageChangeTime);