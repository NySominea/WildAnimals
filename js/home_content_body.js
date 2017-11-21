/**
 * Created by NySominea on 19/09/2017.
 */

/**
 *  Contents
 */
$('.img-content').mouseenter(function(){
    $(this).find('img').css('transform','scale(1.2)').css('transition','0.5s all');
    $(this).find('h3').css('font-weight','bold')
})
$('.img-content').mouseleave(function(){
    $(this).find('img').css('transform','').css('transition','0.5s all');
    $(this).find('h3').css('font-weight','normal')
})

$('.well').hover(function(){
    $(this).addClass('animated pulse');
    $(this).mouseleave(function(){
        $(this).removeClass('pulse');
    })
})
