// Equal Height Hack
// Flickity.prototype._createResizeClass = function () {
//     this.element.classList.add('flickity-resize');
// };
// Flickity.createMethods.push('_createResizeClass');
// var resize = Flickity.prototype.resize;
// Flickity.prototype.resize = function () {
//     this.element.classList.remove('flickity-resize');
//     resize.call(this);
//     this.element.classList.add('flickity-resize');
// };
(function ($) {
    // $('.home-slider').flickity({
    //     contain: true,
    //     cellAlign: 'left',
    //     groupCells: '100%',
    //     pageDots: true,
    //     autoPlay: 4000,
    //     pauseAutoPlayOnHover: false,
    //     wrapAround: true,
    //     selectedAttraction: 0.02,
    //     friction: 0.3
    // });
    var $carousel = $('.home-slider').flickity({
        imagesLoaded: true,
        percentPosition: false,
        selectedAttraction: 0.02,
        friction: 0.3,
        wrapAround: true,
        autoPlay: 4000,
        contain: true,
        pauseAutoPlayOnHover: false
    });
    var $imgs = $carousel.find('.img-slide');
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var flkty = $carousel.data('flickity');
    $carousel.on('scroll.flickity', function () {
        flkty.slides.forEach(function (slide, i) {
            var img = $imgs[i];
            var x = (slide.target + flkty.x) * -1 / 2;
            img.style[transformProp] = 'translateX(' + x + 'px)';
        });
    });

    $('.carousel-c1md3, .carousel-c2md3, .carousel-c2md4, .carousel-c2md5').flickity({
        contain: true,
        cellAlign: 'left',
        groupCells: '100%',
        pageDots: true,
    });
    $('.carousel-single').flickity({
        contain: true,
        cellAlign: 'left',
        groupCells: '100%',
        autoPlay: 4500,
    });
    $('.carousel-logo').flickity({
        contain: true,
        cellAlign: 'left',
        // groupCells: '100%',
        pageDots: false,
        wrapAround: true,
        autoPlay: 3000,
        pauseAutoPlayOnHover: false
    });
    $('.carousel-gallery').flickity({
        contain: true,
        imagesLoaded: true,
        percentPosition: false,
    });
    // products detail - gallery vertical
    // if ($('.carousel-nav').length || $('.carousel-main').length) {
    //     var $carousel = $('.carousel-main').flickity();
    //     var $carouselNav = $('.carousel-nav');
    //     var $carouselNavCells = $carouselNav.find('.carousel-cell');
    //     $carouselNav.on('click', '.carousel-cell', function(event) {
    //         var index = $(event.currentTarget).index();
    //         $carousel.flickity('select', index);
    //     });
    //     var flkty = $carousel.data('flickity');
    //     var navTop = $carouselNav.position().top;
    //     var navCellHeight = $carouselNavCells.height();
    //     var navHeight = $carouselNav.height();

    //     $carousel.on('select.flickity', function() {
    //         // set selected nav cell
    //         $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
    //         var $selected = $carouselNavCells.eq(flkty.selectedIndex)
    //             .addClass('is-nav-selected');
    //         // scroll nav
    //         var scrollY = $selected.position().top +
    //             $carouselNav.scrollTop() - (navHeight + navCellHeight) / 2;
    //         $carouselNav.animate({
    //             scrollTop: scrollY
    //         });
    //     });
    // }
})(jQuery);