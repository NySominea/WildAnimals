$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search a img.close ').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });


    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })

    $('.navbar-brand').hover(function(){
        $(this).addClass('animated tada');
    })
    $('.navbar-brand').mouseleave(function(){
        $(this).removeClass('animated tada')
    })
});

var previousScroll = 0;
$(document).on('scroll',function(){
    var currentScroll = $(this).scrollTop();
    if(currentScroll > previousScroll){
        if(currentScroll > 200) {
            $('.navbar').removeClass('animated slideOutUp');
            $('.navbar').addClass('animated slideOutUp')
        }
    }else {
            $('.navbar').removeClass('animated slideOutUp').addClass('animated slideInDown')
    }
    previousScroll = currentScroll;
})
