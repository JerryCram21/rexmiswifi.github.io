/*$('.visible.example .ui.sidebar')
  .sidebar({
    context: '.visible.example .bottom.segment'
  })
  .sidebar('hide')
;
$('.ui.labeled.icon.sidebar')
  .sidebar('toggle')
;


$('.visible.example .ui.sidebar')
  .sidebar('toggle')
;

//don't know them???

*/
$(document).ready(function(){

$("body").ready(function(){
    $(".home").click(function(){
        $(".content_2").fadeOut(1000)
        $(".content_3").fadeOut(1000)
        $(".content_4").fadeOut(1000)
    });
    $(".home").click(function(){
        $(".content_1").fadeIn(1000)
    });
});

$("body").ready(function(){
    $(".vmc").click(function(){
        $(".content_1").fadeOut(1000)
        $(".content_3").fadeOut(1000)
        $(".content_4").fadeOut(1000)
    });
    $(".vmc").click(function(){
        $(".content_2").fadeIn(1000)

    });
});

$("body").ready(function(){
    $(".news").click(function(){
        $(".content_1").fadeOut(1000)
        $(".content_2").fadeOut(1000)
        $(".content_4").fadeOut(1000)
    });
    $(".news").click(function(){
        $(".content_3").fadeIn(1000)
    });
});

$("body").ready(function(){
    $(".group").click(function(){
        $(".content_1").fadeOut(1000)
        $(".content_3").fadeOut(1000)
        $(".content_2").fadeOut(1000)
    });
    $(".group").click(function(){
        $(".content_4").fadeIn(1000)
    });
});

$('.gridmenu .menuitem').click(function(e) {
    e.preventDefault(); //prevent the link from being followed
    $('.gridmenu div').removeClass('active');
    $(this).addClass('active');
});


/*$("body").ready(function(){
    $(".gridmenu:first").show('active');
)};*/


$(".menuitem").ready(function(){
$('.home').click(function() {
        $('.gridmenu img').show();
    });
    $('.home').click(function() {
    $('.gridmenu .news img').hide();
    $('.gridmenu .vmc img').hide();
    $('.gridmenu .group img').hide();
    });
});
$(".menuitem").ready(function(){
$('.vmc').click(function() {
        $('.gridmenu img').show();
    });
    $('.vmc').click(function() {
    $('.gridmenu .news img').hide();
    $('.gridmenu .home img').hide();
    $('.gridmenu .group img').hide();
    });
});
$(".menuitem").ready(function(){
$('.news').click(function() {
        $('.gridmenu img').show();
    });
    $('.news').click(function() {
    $('.gridmenu .home img').hide();
    $('.gridmenu .vmc img').hide();
    $('.gridmenu .group img').hide();
    });
});
$(".menuitem").ready(function(){
$('.group').click(function() {
        $('.gridmenu img').show();
    });
    $('.group').click(function() {
    $('.gridmenu .news img').hide();
    $('.gridmenu .vmc img').hide();
    $('.gridmenu .home img').hide();
    });
});
});
