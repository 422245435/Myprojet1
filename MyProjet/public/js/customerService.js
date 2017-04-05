/**
 * Created by Administrator on 2017/3/25.
 */
$(".navs>li").hover(function(){
    $(this).children(".hide").fadeIn();
},function(){
    $(this).children(".hide").css("display","none");
})

$(".sear").click(function(){
    $(".container1").fadeOut();
    $(".container2").fadeIn();
})
$(".exit").click(function(){
    $(".container2").fadeOut();
    $(".container1").fadeIn();
})

