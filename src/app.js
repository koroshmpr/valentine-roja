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
    function drawSvg(elementId, multiple = 1, containerId) {
        var element = document.getElementById(elementId);
        var container = document.getElementById(containerId);
        if (!element || !container) {
            console.error('SVG or container element not found.');
            return;
        }
        // Get the total length of the SVG path
        var length = element.getTotalLength();
        // Set the initial styles
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;

        window.addEventListener("scroll", function () {
            var containerTopOffset = container.offsetTop;

            if (window.scrollY + 500 >= containerTopOffset) {
                var scrollPercentage = (document.documentElement.scrollTop + window.scrollY - containerTopOffset) /
                    (document.documentElement.scrollHeight - document.documentElement.clientHeight) * multiple;

                var drawLength = length * (1 - scrollPercentage);

                element.style.strokeDashoffset = Math.max(0, drawLength);

                if (scrollPercentage >= 0.99) {
                    element.style.strokeDasharray = "none";
                } else {
                    element.style.strokeDasharray = length + ' ' + length;
                }
            } else {
                // Reset styles if the container is not scrolled into view
                element.style.strokeDasharray = length + ' ' + length;
                element.style.strokeDashoffset = length;
            }
        });


    }

// Example usage:
    drawSvg('star-path-r' , 1 , 'svgFirst');
    drawSvg('star-path-l'  , 1 , 'svgSecond');

});