document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
    const swiper2 = new Swiper('.single-slider', {
        spaceBetween: 5,
        grabCursor: true,
        autoplay: {
            delay: 3000,
        },
    });
    const swiper = new Swiper('.product-slider', {
        effect: 'slide',
        speed: 800,
        slidesPerView: 1.5,
        spaceBetween: 10,
        grabCursor: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.product-button-next',
            prevEl: '.product-button-prev',
        },
          breakpoints: {
              768: {
                  slidesPerView: 3.5,

              },
              1280: {
                  slidesPerView: 5.5,

              }
          },
    });
    function drawSvg(elementId , multiple = 1) {
        var element = document.getElementById(elementId);
        // Get the total length of the SVG path
        var length = element.getTotalLength();

        // Set the initial styles
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;
        let docElement = document.documentElement;
        // When the page scrolls...
        window.addEventListener("scroll", function(e) {
            let docElement = document.documentElement;
            // Calculate the scroll percentage
            var scrollPercentage = ( docElement.scrollTop + document.body.scrollTop) / (docElement.scrollHeight - docElement.clientHeight) * multiple;
            // Calculate the draw length based on the scroll percentage
            var drawLength = length * (1 - scrollPercentage);

            // Update the stroke dashoffset to reveal the SVG path
            element.style.strokeDashoffset = Math.max(0, drawLength);

            // When the drawing is complete, remove the dash array
            if (scrollPercentage >= 0.99) {
                element.style.strokeDasharray = "none";
            } else {
                element.style.strokeDasharray = length + ' ' + length;
            }
        });
    }


// Example usage:
    drawSvg('star-path-l'  , 1);
    drawSvg('star-path-r' , 2);

});