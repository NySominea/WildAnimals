/**
 * Created by NySominea on 19/09/2017.
 */

/*
 * Caousel Controll
 */
$('.carousel-control').hover(function(){
    $(this).find('.glyphicon').removeClass('hidden');
})
$('.carousel-control').mouseleave(function(){
    $(this).find('.glyphicon').addClass('hidden');
})

$(function() {
    $("#myCarousel").swipe( {
        //Generic swipe handler for all directions
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
            $(this).carousel('next');
        },
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
            $(this).carousel('prev');
        },
        threshold:20
    });
});
