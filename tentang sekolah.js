document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4500);
    }

    showSlides();
  });
 
  

