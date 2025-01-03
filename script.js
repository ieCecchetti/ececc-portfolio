$(document).ready(function () {
  // Smooth scrolling for page links
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        1500,
        'easeInOutExpo'
      );
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
  });

  // Close the responsive menu when a menu item is clicked
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });
});
