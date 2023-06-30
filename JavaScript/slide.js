$(document).ready(function() {
    $('#carouselExampleIndicators').carousel();

    setInterval(function() {
      $('#carouselExampleIndicators').carousel('carousel-control-next');
    }, 1000);
  });
  

function openNav(){
    document.getElementById("sidenav").style.width = "250px";
}
function closeNav(){
    document.getElementById("sidenav").style.width = "0";
}
