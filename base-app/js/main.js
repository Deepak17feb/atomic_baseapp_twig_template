// Set Global Namespace
var axelerant = window.axelerant || {};

// global variables
var windowWth = jQuery(window).width();

axelerant.menuToggle = function() {
  jQuery('.menu_burger').on('click', function() {
    jQuery('.header_nav')
      .toggleClass('menu-open')
      .toggle();
  });
};

axelerant.removeMenuClasses = function() {
  jQuery('.header_nav')
    .removeAttr('style')
    .removeClass('menu-open');
};

jQuery(document).ready(function() {
  axelerant.menuToggle();
});

jQuery(window).resize(function() {
  if (windowWth >= 1200) {
    axelerant.removeMenuClasses();
  }
});
