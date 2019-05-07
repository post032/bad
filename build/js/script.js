(function() {
    "use strict";
    var toggles = document.querySelectorAll('.menu-open');
    var open = document.querySelector('.menu');
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        open.classList.toggle('menu-hide');
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
      });
    }
  })();


  $('#catalog').click(function() {
    $('#catalog-open').toggleClass('footer__hide');
  });
  $('#shop').click(function() {
    $('#shop-open').toggleClass('footer__hide');
  });
  $('#company').click(function() {
    $('#company-open').toggleClass('footer__hide');
  });
  $('#partner').click(function() {
    $('#partner-open').toggleClass('footer__hide');
  });
