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

  // Sticky Navigation Menu JS Code
  let nav = document.querySelector("nav");
  let scrollBtn = document.querySelector(".scroll-button a");
  console.log(scrollBtn);
  let val;
  window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    }else{
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }
  
  }