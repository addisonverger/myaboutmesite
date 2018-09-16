var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/addison.jpg') {
      myImage.setAttribute ('src','images/cat.jpg');
    } else {
      myImage.setAttribute ('src','images/addison.jpg');
    }
}
