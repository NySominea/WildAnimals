
$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut('slow');

});

$(document).on('click', '#btn-down', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#line').offset().top
    }, 500);
});

$(function(){
    var line_height =0;
    $(window).resize(function(){
        line_height = $('#line').height();
        $('#line_page').css('height',line_height)
        $('#body .container').css('padding-top',line_height);
        $('#body .container').css('padding-bottom',line_height);

        displayIconGallery()
    })
    $(document).ready(function(){
        line_height = $('#line').height();
        $('#line_page').css('height',line_height)
        $('#body .container').css('padding-top',line_height);
        $('#body .container').css('padding-bottom',line_height)

        displayIconGallery()
    })
})

function displayIconGallery(){
    if($(window).width()<850){
        $('#gallery_icon').removeClass('hidden')
        $('#myCarousel').addClass('hidden')
    }else{
        $('#gallery_icon').addClass('hidden')
        $('#myCarousel').removeClass('hidden')
    }
}
$(document).ready(function(){
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
});



$(function(){
    $('#loadVideo').click(function(){
        $('#myModal').addClass('zoomIn');
        $('video')[0].play();
    })

    $('#navbar').load('navbar.html')

    $('#myModal').on('hidden.bs.modal',function(){
        $('video')[0].pause();
        $('#myModal').removeClass('rollOut')
        $('#myModal').addClass('zoomIn');
    })
    $(window).on('load',function(){
        $('video')[0].pause();
    })
    $('.video_close').click(function(){
        $('#myModal').removeClass('zoomIn').addClass('rollOut');
    })
})


//MAP
