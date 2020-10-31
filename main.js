$(document).ready(function(){
  $('.parallax').parallax();
});

document.addEventListener("DOMContentLoaded", function(event) {
  var scrollButton = document.getElementById("boton-scroll");
  var searchField = document.getElementById("input-buscador");
  var searchButton = document.getElementById("buscador");
  var image = document.getElementById("meme-imagen");
  var stars = document.getElementById("estrellas");
  var url = "https://api.github.com/users/HabibuGG/repos";
  var memeURL = "https://http.cat/"

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

  
  searchButton.addEventListener("click", (e) => {
    let text = searchField.value;
    if(text.trim().length > 0){
      image.src = memeURL + text;
      image.style.display = "block";
    }
  });

  $.get(url, (data, status) => {
    if(status != "success") return;
    for(let i = 0; i < data.length; i++){
      if(data[i].name == "core-academy"){
        stars.innerHTML = data[i].stargazers_count;
        break;
      }
    }
  });

});
