$(document).ready(function(){
  $('.parallax').parallax();
});

document.addEventListener("DOMContentLoaded", function(event) {
  var scrollButton = document.getElementById("boton-scroll");
  var alertButton = document.getElementById("boton-alerta");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.opacity = 1;
    } else {
      scrollButton.style.opacity = 0;
    }
  }

  scrollButton.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
  });

  alertButton.addEventListener("click", (e) => {
    alert("Bienvenido al segundo hito!")
  });

});
