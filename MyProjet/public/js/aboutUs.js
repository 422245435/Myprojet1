/**
 * Created by Administrator on 2017/3/26.
 */
//nav
$(document).ready(function(){
    $(document).off('click.bs.dropdown.data-api');
});

function dropdownOpen() {
    var $dropdownLi = $('li.dropdown');
    $dropdownLi.mouseover(function() {
        $(this).addClass('open');
    }).mouseout(function() {
        $(this).removeClass('open');
    });
}
dropdownOpen();
//ËÑË÷
$("#search").click(function(){
    $(".fadeSearch").fadeOut();
    $(".fadeExit").fadeIn();
});
$("#exit").click(function(){
    $(".fadeExit").fadeOut();
    $(".fadeSearch").fadeIn();
});

