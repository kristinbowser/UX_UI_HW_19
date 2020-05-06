function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
    //   for (i = 0; i < dropdowns.length; i++) {
    //     var openDropdown = dropdowns[i];
    //     if (openDropdown.classList.contains('show')) {
    //       openDropdown.classList.remove('show');
    //     }
    //   }
    }
  }

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {stickNav()};

// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // $(".logo img").css("height", "10%");
    $(".logo img").css("max-width", "50px");
    $("#navigation").css("margin-top", "1%");
  } else {
    navbar.classList.remove("sticky");
    $(".logo img").css("max-width", "100px");
    $("#navigation").css("margin-top", "3.5%");
  }
}