$(window).on('load', function () {
    $('.home-slider').flickity({
        contain: true,
        autoPlay: 4000,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        // pageDots: false,
        prevNextButtons: false,
    });
})

Audio.prototype.play = (function (play) {
    return function () {
        var audio = this,
            args = arguments,
            promise = play.apply(audio, args);
        if (promise !== undefined) {
            promise.catch(_ => {
                // Autoplay was prevented. This is optional, but add a button to start playing.
                // var el = document.createElement("button");
                // el.innerHTML = "Play";
                var el = document.getElementById('body');
                el.addEventListener("scroll", function () { play.apply(audio, args); });
                // this.parentNode.insertBefore(el, this.nextSibling)
            });
        }
    };
})(Audio.prototype.play);

// // Try automatically playing our audio via script. This would normally trigger and error.
document.getElementById('audio').play()

document.onclick=function() {
    document.getElementById("audio").play()
}
document.onscroll=function() {
    document.getElementById("audio").play()
}
window.onload = function() {
    document.getElementById("audio").play();
}