const $ = require("jquery");
require("slick-carousel");

$('#slider').slick({
    lazyLoad: 'ondemand',
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    prevArrow: '<div class="left-arrow"></div>',
    nextArrow: '<div class="right-arrow"></div>',
    arrowKeys: true
})
