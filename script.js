// Author: Devin Augot & Jacob Thomas
// October , 2022

// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  // evt.preventdefault("containerTab");
}


var pressedButton = document.getElementById("placeorder")

pressedButton.addEventListener("click", function(evt){
    alert('Thank you for your purchase! Your order has been placed, and will be ready in 15 minutes!')
evt.preventDefault();
})
