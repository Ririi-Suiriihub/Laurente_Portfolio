/**
 * WEBSITE: #!
 * TWITTER: #!
 * FACEBOOK: #!
 * GITHUB: #!
 */



(function ($) {
    'use strict';
    
AOS.init({
    once: true
});

    // ----------------------- 
        // Progress Bar--------------------
        // 
        // 

    $(window).on ('load', function (){ 
          
        $('.progress-bar').each(function(){
                var width = $(this).data('percent');
                $(this).css({'transition': 'width 3s'});
                $(this).appear(function() {
                    
                    $(this).css('width', width + '%');
                    $(this).find('.count').countTo({
                        from: 0,
                        to: width,
                        speed: 3000,
                        refreshInterval: 50
                    });
                });
            });
        }); 


    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var wrapper = document.querySelector('.shuffle-wrapper');
    if (wrapper) {
        var myShuffle = new Shuffle(wrapper, {
            itemSelector: '.shuffle-item',
            buffer: 1
        });
        jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
    }

    var y = document.getElementById('year');
    if (y) { y.textContent = new Date().getFullYear(); }

     $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


})(jQuery);