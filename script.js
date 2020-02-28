var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var slides = document.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("dot");
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for(var i = 0; i < dots.length; i++){
    dot[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dot[slideIndex-1].className += "active";
}
