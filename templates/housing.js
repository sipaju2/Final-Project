function changeImg (imgNumber) {
    var myImages = 
    [ "index.jpg", "index1.jpg", "index2.jpg", "index3.jpg"];
    var imgShown =
    document.body.style.backgroundImage;
    var newImgNumber =
    Math.floor(Math.random()*myImages.length);

    document.body.style.backgroundImage = 
    'url("+myImages[newImgNumber]+")';
}

window.onload=changeImg;