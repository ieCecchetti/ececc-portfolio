$(document).ready(function () {
  // Smooth scrolling for page links
  $('a.page-scroll').bind('click', function (event) {
    let $anchor = $(this);
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

  $(document).ready(function () {
    // Function to activate the correct panel and tab based on the hash
    function activatePanelFromHash() {
      let hash = window.location.hash; // Get the hash from the URL

      // Reset both panels and tabs
      $('.tab-pane').removeClass('active'); // Deactivate all panels
      $('.tab-link').removeClass('active-tab'); // Deactivate all tab links

      // Check the hash and activate the corresponding tab and panel
      if (hash === '#privacy') {
        $('#privacy-panel').addClass('active'); // Activate privacy panel
        $('#privacy-link').addClass('active-tab'); // Highlight privacy tab
      } else if (hash === '#docs' || hash === '') {
        $('#docs-panel').addClass('active'); // Activate docs panel
        $('#docs-link').addClass('active-tab'); // Highlight docs tab
      }
    }

    // Run the function on page load
    activatePanelFromHash();

    // Update the panel dynamically when the hash changes
    $(window).on('hashchange', activatePanelFromHash);

    // Add click listeners to tab links for switching without hash change
    $('.tab-link').click(function () {
      let targetHash =
        $(this).attr('id') === 'privacy-link' ? '#privacy' : '#docs';
      window.location.hash = targetHash; // Update the URL hash
    });
  });
});
