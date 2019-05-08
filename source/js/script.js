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

  $('#form-1').click(function() {
    $('#form-one').toggleClass('catalog__form-hide');
  });

  $('#form-2').click(function() {
    $('#form-two').toggleClass('catalog__form-hide');
  });


  $('#catalog').click(function() {
    $('#catalog1').toggleClass('footer__rotate');
    $('#catalog-open').toggleClass('footer__hide');
  });
  $('#shop').click(function() {
    $('#shop1').toggleClass('footer__rotate');
    $('#shop-open').toggleClass('footer__hide');
  });
  $('#company').click(function() {
    $('#company1').toggleClass('footer__rotate');
    $('#company-open').toggleClass('footer__hide');
  });
  $('#partner').click(function() {
    $('#partner1').toggleClass('footer__rotate');
    $('#partner-open').toggleClass('footer__hide');
  });



  $('.capsule__lists').slick({
      infinite: true,
      speed: 300,
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.catalog__products-lists').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
