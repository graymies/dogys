
//navigation
$('.mobileMenu').on('click', function(event) {
    event.preventDefault();
    $('.backDrop').show();
    $('.nav').toggleClass('navigation-open');
});

$('.mobileMenuBack').on('click', function(event) {
    $('.mobileMenu').trigger("click");
    $('.backDrop').hide();
});

/*on scroll header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 250) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});


// plus minus faq
$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});




// Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      //event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });




