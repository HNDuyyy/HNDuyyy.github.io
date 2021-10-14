var slidespIndex = 1;
showSlidessp(slidespIndex);

function plusSlides(n) {
  showSlidessp(slidespIndex += n);
}

function currentSlidesp(n) {
  showSlidessp(slidespIndex = n);
}

function showSlidessp(n) {
  var i;
  var slidessp = document.getElementsByClassName("mySlidessp");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slidessp.length) {slidespIndex = 1}
  if (n < 1) {slidespIndex = slidessp.length}
  for (i = 0; i < slidessp.length; i++) {
      slidessp[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slidessp[slidespIndex-1].style.display = "block";
  dots[slidespIndex-1].className += " active";
  captionText.innerHTML = dots[slidespIndex-1].alt;
}