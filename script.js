
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var timer;

timer = setInterval(changePic, 2000);

function currentSlide(n){
  slideIndex = n;
  showSlides(slideIndex);
}

function nextSlide(n){
  clearInterval(timer);
  showSlides(slideIndex += n);
}

function showSlides(n){
  var i;

  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setInterval(changePic, 2000);
};

function changePic(){
  slideIndex++;
  if(slideIndex >= slides.length){
    slideIndex = 1;
  }
  if (slideIndex < 1){
    slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
