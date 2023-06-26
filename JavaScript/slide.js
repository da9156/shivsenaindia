$(document).ready(function() {
    // Initialize the carousel
    $('#carouselExampleIndicators').carousel();
  
    // Set the interval for slide transitions (0.1 second)
    setInterval(function() {
      $('#carouselExampleIndicators').carousel('carousel-control-next');
    }, 100);
  });
  