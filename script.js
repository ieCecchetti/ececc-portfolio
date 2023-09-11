$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$(document).ready(function () {
    $('body').scrollspy({ target: '#navbar' }); // Adjust the target ID as needed
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// MODALS
$(document).ready(function() {
    // When the modal is shown
    $('#portfolioModal1').on('show.bs.modal', function (e) {
        // Get the data-content-url attribute from the clicked element
        var contentUrl = $(e.relatedTarget).data('content-url');
        
        // Set the iframe src attribute to the specified URL
        $('#modalIframe').attr('src', contentUrl);
    });
});