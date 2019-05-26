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

  $('#modal').click(function() {
    $('.modal').toggleClass('modal__open');
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



$('#beauty__click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#beauty__click label .design__icon').addClass('design__icon1w')
$('#slender-click label .design__icon').removeClass('design__icon2w');
$('#men-click label .design__icon').removeClass('design__icon8w');
$('#pure-click label .design__icon').removeClass('design__icon3w');
$('#immunity-click label .design__icon').removeClass('design__icon4w');
$('#sports-click label .design__icon').removeClass('design__icon7w');
$('#anty-click label .design__icon').removeClass('design__icon6w');
$('#women-click label .design__icon').removeClass('design__icon5w');
$('#result').val($('#beauty').val());
$('#design1').val($('#beauty').val());
});

$('#slender-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#slender-click label .design__icon').addClass('design__icon2w');
  $('#beauty__click label .design__icon').removeClass('design__icon1w');
  $('#men-click label .design__icon').removeClass('design__icon8w');
  $('#pure-click label .design__icon').removeClass('design__icon3w');
  $('#immunity-click label .design__icon').removeClass('design__icon4w');
  $('#sports-click label .design__icon').removeClass('design__icon7w');
  $('#anty-click label .design__icon').removeClass('design__icon6w');
  $('#women-click label .design__icon').removeClass('design__icon5w');
  $('#result').val($('#slender').val());
  $('#design1').val($('#slender').val());
});

$('#pure-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#pure-click label .design__icon').addClass('design__icon3w');
  $('#slender-click label .design__icon').removeClass('design__icon2w');
  $('#beauty__click label .design__icon').removeClass('design__icon1w');
  $('#men-click label .design__icon').removeClass('design__icon8w');
  $('#immunity-click label .design__icon').removeClass('design__icon4w');
  $('#sports-click label .design__icon').removeClass('design__icon7w');
  $('#anty-click label .design__icon').removeClass('design__icon6w');
  $('#women-click label .design__icon').removeClass('design__icon5w');
  $('#result').val($('#pure').val());
  $('#design1').val($('#pure').val());
});

$('#immunity-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#immunity-click label .design__icon').addClass('design__icon4w');
  $('#slender-click label .design__icon').removeClass('design__icon2w');
  $('#beauty__click label .design__icon').removeClass('design__icon1w');
  $('#men-click label .design__icon').removeClass('design__icon8w');
  $('#pure-click label .design__icon').removeClass('design__icon3w');
  $('#sports-click label .design__icon').removeClass('design__icon7w');
  $('#anty-click label .design__icon').removeClass('design__icon6w');
  $('#women-click label .design__icon').removeClass('design__icon5w');
  $('#result').val($('#immunity').val());
  $('#design1').val($('#immunity').val());
});

$('#women-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#women-click label .design__icon').addClass('design__icon5w');
  $('#slender-click label .design__icon').removeClass('design__icon2w');
  $('#beauty__click label .design__icon').removeClass('design__icon1w');
  $('#men-click label .design__icon').removeClass('design__icon8w');
  $('#pure-click label .design__icon').removeClass('design__icon3w');
  $('#immunity-click label .design__icon').removeClass('design__icon4w');
  $('#sports-click label .design__icon').removeClass('design__icon7w');
  $('#anty-click label .design__icon').removeClass('design__icon6w');
  $('#result').val($('#women').val());
  $('#design1').val($('#women').val());
});

$('#anty-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#anty-click label .design__icon').addClass('design__icon6w');
  $('#slender-click label .design__icon').removeClass('design__icon2w');
  $('#beauty__click label .design__icon').removeClass('design__icon1w');
  $('#men-click label .design__icon').removeClass('design__icon8w');
  $('#pure-click label .design__icon').removeClass('design__icon3w');
  $('#immunity-click label .design__icon').removeClass('design__icon4w');
  $('#sports-click label .design__icon').removeClass('design__icon7w');
  $('#women-click label .design__icon').removeClass('design__icon5w');
  $('#result').val($('#anty').val());
  $('#design1').val($('#anty').val());
});

$('#sports-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#sports-click label .design__icon').addClass('design__icon7w');
  $('#slender-click label .design__icon').removeClass('design__icon2w');
  $('#beauty__click label .design__icon').removeClass('design__icon1w');
  $('#men-click label .design__icon').removeClass('design__icon8w');
  $('#pure-click label .design__icon').removeClass('design__icon3w');
  $('#immunity-click label .design__icon').removeClass('design__icon4w');
  $('#anty-click label .design__icon').removeClass('design__icon6w');
  $('#women-click label .design__icon').removeClass('design__icon5w');
  $('#result').val($('#sports').val());
  $('#design1').val($('#sports').val());
});

$('#men-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists1 .design__label').not(this).removeClass('design__label-active');
  $('#men-click label .design__icon').addClass('design__icon8w');
  $('#slender-click label .design__icon').removeClass('design__icon2w');
  $('#beauty__click label .design__icon').removeClass('design__icon1w');
  $('#pure-click label .design__icon').removeClass('design__icon3w');
  $('#immunity-click label .design__icon').removeClass('design__icon4w');
  $('#sports-click label .design__icon').removeClass('design__icon7w');
  $('#anty-click label .design__icon').removeClass('design__icon6w');
  $('#women-click label .design__icon').removeClass('design__icon5w');
  $('#result').val($('#men').val());
  $('#design1').val($('#men').val());
});




$('#powder-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists2 .design__label').not(this).removeClass('design__label-active');
  $('#powder-click label .design__icon').addClass('design__icon9w');
  $('#bubbly__click label .design__icon').removeClass('design__icon2w');
  $('pop__click label .design__icon').removeClass('design__icon1w');
  $('#result1').val($('#powder').val());
  $('#design3').val($('#powder').val());
});

$('#pod-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists2 .design__label').not(this).removeClass('design__label-active');
  $('#pod-click label .design__icon').addClass('design__icon10w');
  $('#powder-click label .design__icon').removeClass('design__icon9w');
  $('#bubbly__click label .design__icon').removeClass('design__icon11w');
  $('#result1').val($('#pod').val());
  $('#design3').val($('#pod').val());
});

$('#bubbly-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists2 .design__label').not(this).removeClass('design__label-active');
  $('#bubbly-click label .design__icon').addClass('design__icon11w');
  $('#pod-click label .design__icon').removeClass('design__icon10w');
  $('#powder-click label .design__icon').removeClass('design__icon9w');
  $('#result1').val($('#bubbly').val());
  $('#design3').val($('#bubbly').val());
});



$('#recipe1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists3 .design__label').not(this).removeClass('design__label-active');
  if($('#design__lists3 .design__label').hasClass('design__label-active')){
    $('#design__head-three').addClass('design__head--green');
  }
  $('#result2').val($('#recipe1').val());
  $('#design5').val($('#recipe1').val());
});

$('#recipe2-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists3 .design__label').not(this).removeClass('design__label-active');
  if($('#design__lists3 .design__label').hasClass('design__label-active')){
    $('#design__head-three').addClass('design__head--green');
  }
  $('#result2').val($('#recipe2').val());
  $('#design5').val($('#recipe2').val());
});

$('#recipe3-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists3 .design__label').not(this).removeClass('design__label-active');
  if($('#design__lists3 .design__label').hasClass('design__label-active')){
    $('#design__head-three').addClass('design__head--green');
  }
  $('#result2').val($('#recipe3').val());
  $('#design5').val($('#recipe3').val());
});

$('#recipe4-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists3 .design__label').not(this).removeClass('design__label-active');
  if($('#design__lists3 .design__label').hasClass('design__label-active')){
    $('#design__head-three').addClass('design__head--green');
  }
  $('#result2').val($('#recipe4').val());
  $('#design5').val($('#recipe4').val());
});

$('#recipe5-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists3 .design__label').not(this).removeClass('design__label-active');
  if($('#design__lists3 .design__label').hasClass('design__label-active')){
    $('#design__head-three').addClass('design__head--green');
  }
  $('#result2').val($('#recipe5').val());
  $('#design5').val($('#recipe5').val());
});

$('#bank-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists4 .design__label').not(this).removeClass('design__label-active');
  // $('.design__img #design__img1').removeClass('design__icon13');
  // $('.design__img #design__img1').removeClass('design__icon14');
  if($('#design__lists4 .design__label').hasClass('design__label-active')){
    $('#design__head-four').addClass('design__head--green');
  }
  $('#result3').val($('#bank').val());
  $('#design3').val($('#bank').val());
});

$('#sachet-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists4 .design__label').not(this).removeClass('design__label-active');
  // $('.design__img #design__img1').addClass('design__icon13');
  // $('.design__img #design__img1').removeClass('design__icon14');
  if($('#design__lists4 .design__label').hasClass('design__label-active')){
    $('#design__head-four').addClass('design__head--green');
  }
  $('#result3').val($('#sachet').val());
  $('#design3').val($('#sachet').val());
});

$('#pack-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists4 .design__label').not(this).removeClass('design__label-active');
  // $('.design__img #design__img1').addClass('design__icon14');
  // $('.design__img #design__img1').removeClass('design__icon13');
  if($('#design__lists4 .design__label').hasClass('design__label-active')){
    $('#design__head-four').addClass('design__head--green');
  }
  $('#result3').val($('#pack').val());
  $('#design3').val($('#pack').val());
});

$('#box-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists5 .design__label').not(this).removeClass('design__label-active');
  $('#box-click label .design__icon').addClass('design__icon14w');
  // $('#design__img2 .design__img2').css('background-position' : '-355px -10px');
  if($('#design__lists5 .design__label').hasClass('design__label-active')){
    $('#design__head-five').addClass('design__head--green');
  }
  $('#result4').val($('#box').val());
  $('#design4').val($('#box').val());
});

$('#empty-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__lists5 .design__label').not(this).removeClass('design__label-active');
  $('#box-click label .design__icon').removeClass('design__icon14w');
  // $('#design__img2 .design__img2').css('background-position' : 'none');
  if($('#design__lists5 .design__label').hasClass('design__label-active')){
    $('#design__head-five').addClass('design__head--green');
  }
  $('#result4').val($('#empty').val());
  $('#design4').val($('#empty').val());
});

$('#bg-click').click(function() {
  $(this).addClass('design__label-active');
  $('#bg-click label .design__icon').addClass('design__icon15w');
  $('#design__head-seven').addClass('design__head--green');
  $('#result6').val('Свой дизайн');
  $('#design6').val('Свой дизайн');
});

$('#element-click').click(function() {
  $(this).addClass('design__label-active');
  $('#element-click label .design__icon').addClass('design__icon16w');
    $('#design__head-seven').addClass('design__head--green');
    $('#result6').val('Свой дизайн');
    $('#design6').val('Свой дизайн');
});

$('#icon-click').click(function() {
  $(this).addClass('design__label-active');
  $('#icon-click label .design__icon').addClass('design__icon17w');
    $('#design__head-seven').addClass('design__head--green');
    $('#result6').val('Свой дизайн');
    $('#design6').val('Свой дизайн');
});

$('#text-click').click(function() {
  $(this).addClass('design__label-active');
  $('#text-click label .design__icon').addClass('design__icon18w');
    $('#design__head-seven').addClass('design__head--green');
    $('#result6').val('Свой дизайн');
    $('#design6').val('Свой дизайн');
});



$('#beauty1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__area .design__area-label').not(this).removeClass('design__label-active');
  $('#beauty-click label .design__icon-a').addClass('design__icon19w')
$('#slender1-click label .design__icon-a').removeClass('design__icon20w');
$('#men1-click label .design__icon-a').removeClass('design__icon26w');
$('#pure1-click label .design__icon-a').removeClass('design__icon21w');
$('#immunity1-click label .design__icon-a').removeClass('design__icon22w');
$('#sports1-click label .design__icon-a').removeClass('design__icon25w');
$('#anty1-click label .design__icon-a').removeClass('design__icon24w');
$('#women1-click label .design__icon-a').removeClass('design__icon23w');
if($('#design__area .design__area-label').hasClass('design__label-active')){
  $('#design__head-seven').addClass('design__head--green');
}
$('#result6').val($('#beauty1').val());
$('#design6').val($('#beauty1').val());
});

$('#slender1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__area .design__area-label').not(this).removeClass('design__label-active');
  $('#slender1-click label .design__icon-a').addClass('design__icon20w');
  $('#beauty1-click label .design__icon-a').removeClass('design__icon19w');
  $('#men1-click label .design__icon-a').removeClass('design__icon26w');
  $('#pure1-click label .design__icon-a').removeClass('design__icon21w');
  $('#immunity1-click label .design__icon-a').removeClass('design__icon22w');
  $('#sports1-click label .design__icon-a').removeClass('design__icon25w');
  $('#anty1-click label .design__icon-a').removeClass('design__icon24w');
  $('#women1-click label .design__icon-a').removeClass('design__icon23w');
  if($('#design__area .design__area-label').hasClass('design__label-active')){
    $('#design__head-seven').addClass('design__head--green');
  }
  $('#result6').val($('#slender1').val());
  $('#design6').val($('#slender1').val());
});

$('#pure1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__area .design__area-label').not(this).removeClass('design__label-active');
  $('#pure1-click label .design__icon-a').addClass('design__icon21w');
  $('#slender1-click label .design__icon-a').removeClass('design__icon20w');
  $('#beauty1-click label .design__icon-a').removeClass('design__icon19w');
  $('#men1-click label .design__icon-a').removeClass('design__icon26w');
  $('#immunity1-click label .design__icon-a').removeClass('design__icon22w');
  $('#sports1-click label .design__icon-a').removeClass('design__icon25w');
  $('#anty1-click label .design__icon-a').removeClass('design__icon24w');
  $('#women1-click label .design__icon-a').removeClass('design__icon23w');
  if($('#design__area .design__area-label').hasClass('design__label-active')){
    $('#design__head-seven').addClass('design__head--green');
  }
  $('#result6').val($('#pure1').val());
  $('#design6').val($('#pure1').val());
});

$('#immunity1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__area .design__area-label').not(this).removeClass('design__label-active');
  $('#immunity1-click label .design__icon-a').addClass('design__icon22w');
  $('#slender1-click label .design__icon-a').removeClass('design__icon20w');
  $('#beauty1-click label .design__icon-a').removeClass('design__icon19w');
  $('#men1-click label .design__icon-a').removeClass('design__icon26w');
  $('#pure1-click label .design__icon-a').removeClass('design__icon31w');
  $('#sports1-click label .design__icon-a').removeClass('design__icon25w');
  $('#anty1-click label .design__icon-a').removeClass('design__icon24w');
  $('#women1-click label .design__icon-a').removeClass('design__icon23w');
  if($('#design__area .design__area-label').hasClass('design__label-active')){
    $('#design__head-seven').addClass('design__head--green');
  }
  $('#result6').val($('#immunity1').val());
  $('#design6').val($('#immunity1').val());
});

$('#women1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__area .design__area-label').not(this).removeClass('design__label-active');
  $('#women1-click label .design__icon-a').addClass('design__icon23w');
  $('#slender1-click label .design__icon-a').removeClass('design__icon20w');
  $('#beauty1-click label .design__icon-a').removeClass('design__icon19w');
  $('#men1-click label .design__icon-a').removeClass('design__icon26w');
  $('#pure1-click label .design__icon-a').removeClass('design__icon21w');
  $('#immunity1-click label .design__icon-a').removeClass('design__icon22w');
  $('#sports1-click label .design__icon-a').removeClass('design__icon25w');
  $('#anty1-click label .design__icon-a').removeClass('design__icon24w');
  if($('#design__area .design__area-label').hasClass('design__label-active')){
    $('#design__head-seven').addClass('design__head--green');
  }
  $('#result6').val($('#women1').val());
  $('#design6').val($('#women1').val());
});

$('#anty1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__area .design__area-label').not(this).removeClass('design__label-active');
  $('#anty1-click label .design__icon-a').addClass('design__icon24w');
  $('#slender1-click label .design__icon-a').removeClass('design__icon20w');
  $('#beauty1-click label .design__icon-a').removeClass('design__icon19w');
  $('#men1-click label .design__icon-a').removeClass('design__icon26w');
  $('#pure1-click label .design__icon-a').removeClass('design__icon21w');
  $('#immunity1-click label .design__icon-a').removeClass('design__icon22w');
  $('#sports1-click label .design__icon-a').removeClass('design__icon25w');
  $('#women1-click label .design__icon-a').removeClass('design__icon23w');
  if($('#design__area .design__area-label').hasClass('design__label-active')){
    $('#design__head-seven').addClass('design__head--green');
  }
  $('#result6').val($('#anty1').val());
  $('#design6').val($('#anty1').val());
});

$('#sports1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design__area .design__area-label').not(this).removeClass('design__label-active');
  $('#sports1-click label .design__icon-a').addClass('design__icon25w');
  $('#slender1-click label .design__icon-a').removeClass('design__icon20w');
  $('#beauty1-click label .design__icon-a').removeClass('design__icon19w');
  $('#men1-click label .design__icon-a').removeClass('design__icon26w');
  $('#pure1-click label .design__icon-a').removeClass('design__icon21w');
  $('#immunity1-click label .design__icon-a').removeClass('design__icon22w');
  $('#anty1-click label .design__icon-a').removeClass('design__icon24w');
  $('#women1-click label .design__icon-a').removeClass('design__icon23w');
  if($('#design__area .design__area-label').hasClass('design__label-active')){
    $('#design__head-seven').addClass('design__head--green');
  }
  $('#result6').val($('#sports1').val());
  $('#design6').val($('#sports1').val());
});

$('#men1-click').click(function() {
  $(this).addClass('design__label-active');
  $('#design1__lists1 .design__area-label').not(this).removeClass('design__label-active');
  $('#men1-click label .design__icon-a').addClass('design__icon26w');
  $('#slender1-click label .design__icon-a').removeClass('design__icon20w');
  $('#beauty1-click label .design__icon-a').removeClass('design__icon19w');
  $('#pure1-click label .design__icon-a').removeClass('design__icon21w');
  $('#immunity1-click label .design__icon-a').removeClass('design__icon22w');
  $('#sports1-click label .design__icon-a').removeClass('design__icon25w');
  $('#anty1-click label .design__icon-a').removeClass('design__icon24w');
  $('#women1-click label .design__icon-a').removeClass('design__icon23w');
  if($('#design__area .design__area-label').hasClass('design__label-active')){
    $('#design__head-seven').addClass('design__head--green');
  }
  $('#result6').val($('#men1').val());
  $('#design6').val($('#men1').val());
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
