let slideIndexFeedback = 1;
showSlidesFeedback(slideIndexFeedback);
showSlidesTeam(2);

function plusSlideFeedback() {
    showSlidesFeedback(slideIndexFeedback += 1);
}

function minusSlideFeedback() {
    showSlidesFeedback(slideIndexFeedback -= 1);  
}

function showSlidesFeedback(n) {
    let slides = document.querySelectorAll('.clients-feedback .slider__item');
    if (n > slides.length) {
      slideIndexFeedback = 1
    }
    else if (n < 1) {
        slideIndexFeedback = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexFeedback - 1].style.display = "block";
}


setInterval(plusSlideFeedback, 7000);

function showSlidesTeam(n){
    let slides = document.querySelectorAll('.team .slider__item');
    let dots = document.querySelectorAll('.team .slider-dot');
    for(let i = 0 ; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].classList.remove("slider-dot_active");
    }
    if(window.matchMedia("(max-width:767px)").matches){
        slides[n - 1].style.display = "block";
    }
    else {
        slides[n - 1].style.display = "flex";
    }
    dots[n - 1].classList.add("slider-dot_active");
}


document.querySelector('button[type="submit"]').onclick = () => {

   let inptEmail = document.querySelector('.input-email');
   let inptSubject = document.querySelector('.input-subject');
   let text = document.querySelector('.form__textarea');

   if(inptEmail.value.length !== 0 && inptSubject.value.length !== 0 && text.value.length !== 0){
    event.preventDefault();
   }
}