/**
 * Created by NySominea on 15/10/2017.
 */
var index = 1;
var jssor_1 = '';
var slide = '';
$(document).ready(function(){
    $('.thumbnail').each(function(index){
        $(this).attr('id',index)
    })
})
$('#gallery_icon').click(function(){
    $('#myModal_gallery').html(slide);
    $('#jssor_1').html(jssor_1)
    $('#myModal_gallery').modal('show')
    jssor_1_slider_init(index);
})

$('.thumbnail').click(function(){
    $('#jssor_1').html(jssor_1)
    index = parseInt($(this).attr('id'));
    $('#myModal_gallery').modal('show')
    jssor_1_slider_init(index);

});

$('#myModal_gallery').on('hidden.bs.modal',function(){
    $('#jssor_1').html('')
})
var jssor_1_slider_init = function(index)
{
    var jssor_1_SlideshowTransitions = [
        {$Duration:800,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_1_options = {
        $StartIndex: index,
        $AutoPlay: 1,
        $Align: 0,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $Cols: 5,
            $SpacingX: 5,
            $SpacingY: 5,
            $Align: 390
        },


    };
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/

};

$(document).ready(function(){
    $('#myModal_gallery').html('');
    slide = '<div id="jssor_1">'+
        '<div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">'+
            '<img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="../src/icon/spin.svg" />'+
            '</div>'+
            '<div id="slides" data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:980px;height:500px;overflow:hidden;border: solid 7px black">';

    $('.carousel-inner').find('a').each(function(){
        slide += '<div>' +
                    '<img data-u="image" src="'+$(this).children().attr('src')+'">'+
                    '<img data-u="image" src="'+$(this).children().attr('src')+'">'+
                '</div>';
    })

        slide +='<a data-u="any" href="https://www.jssor.com" style="display:none">javascript slider</a></div>';
    <!-- Thumbnail Navigator -->
        slide += '<div data-u="thumbnavigator" class="jssort101" style="position:absolute;left:0px;bottom:0px;width:980px;height:110px;background-color:#000;" data-autocenter="1" data-scale-bottom="0.75">'+
                '<div data-u="slides">'+
                '<div data-u="prototype" class="p" style="width:190px;height:100px;">'+
                '<div data-u="thumbnailtemplate" class="t"></div>'+
                '<svg viewbox="0 0 16000 16000" class="cv">'+
                '<circle class="a" cx="8000" cy="8000" r="3238.1"></circle>'+
                '<line class="a" x1="6190.5" y1="8000" x2="9809.5" y2="8000"></line>'+
                '<line class="a" x1="8000" y1="9809.5" x2="8000" y2="6190.5"></line>'+
                '</svg>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<button type="button" class="close" style="background:none;opacity: 1;position: absolute;top: 10px;right: 30px" data-dismiss="modal"><i class="fa fa-close" style="color:whitesmoke;opacity: 1"></i></button>'+
                '<div data-u="arrowleft" class="jssora106" style="width:55px;height:55px;top:230px;left:30px;" data-scale="0.75">'+
                    '<a class="btn btn-control"><i class="glyphicon glyphicon-chevron-left"></i></a>'+
                '</div>'+
                '<div data-u="arrowright" class="jssora106" style="width:55px;height:55px;top:230px;right:30px;" data-scale="0.75">'+
                    '<a class="btn btn-control"><i class="glyphicon glyphicon-chevron-right"></i></a>'+
                '</div>'+
                '</div>';
    $('#myModal_gallery').html(slide);
    jssor_1 = $('#jssor_1').html();
})

