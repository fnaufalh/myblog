var modal = document.getElementById("modal");
var img = document.getElementsByClassName("img-zoom");
var modalImg = document.getElementById("img");

Array.from(img).forEach(function(value) {
    value.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// When the user clicks on <span> (x), close the modal
modal.onclick = function() { 
  modal.style.display = "none";
}