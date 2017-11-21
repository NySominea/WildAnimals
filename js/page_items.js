/**
 * Created by NySominea on 28/10/2017.
 */
$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut('slow');
});

function searchTransition() {
    document.getElementById("search-input").style.transition="width 1s";
}

$(document).on('click', '#btn-down', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#line').offset().top
    }, 500);
});

$(document).ready(function(){
    var slider = $('#slider').height();
    var btn = $('#btnScrollUp');
    btn.click(function(){
        $('html,body').animate({
            'scrollTop' : 0,
        },500)
    })
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 100){
            if(!btn.is(':visible')){
                btn.fadeIn('slow');
            }
        }else{
            btn.fadeOut();
        }
    })
    btn.children().hover(function(){
        $(this).addClass(' animated flash');
    })
    btn.mouseleave(function(){
        $(this).removeClass(' animated flash')
    })
})