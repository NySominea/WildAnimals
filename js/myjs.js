/**
 * Created by NySominea on 12/09/2017.
 */
$(function(){
    $('#header').load('../components/master.html');
})

$(function(){
    $('#content_body').load('../components/content.html');
})

/*
 * Caousel Controll
 */
$('.carousel-control').hover(function(){
    $(this).find('.glyphicon').removeClass('hidden');
})
$('.carousel-control').mouseleave(function(){
    $(this).find('.glyphicon').addClass('hidden');
})


/**
 *  Contents
 */
$(function(){
    var contentHeight=$('.src-responsive').height();
    var titleHeight=$('.src-title').height();
    $(window).resize(function(){
        contentHeight=$('.src-responsive').height();
        titleHeight=$('.src-title').height();
    });
    $('.content').mouseenter(function(){
        $(this).find('.carousel-caption').animate({
            'top':'4px',
        },500).find('.src-body').removeClass('hidden').fadeIn('slow')
            $(this).find('.src-footer').removeClass('hidden').fadeIn('slow');

        $(this).find('.src-title').css('height',25*contentHeight/100+'px')
        //$(this).find('.src-body').css('height',50*contentHeight/100)
        $(this).find('.src-footer').css('height',25*contentHeight/100);
    })
    $('.content').mouseleave(function(){
        $(this).find('.carousel-caption').animate({
            'top' : contentHeight-(titleHeight+6)+ "px" ,
            'bottom' : '0px'
        }).find('.src-body').slideUp('fast');
        $(this).find('.src-footer').slideUp('fast')
    })

})