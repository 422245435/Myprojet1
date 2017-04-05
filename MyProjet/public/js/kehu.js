/**
 * Created by 联想电脑 on 2017/3/27.
 */
/**
 * Created by 联想电脑 on 2017/3/27.
 */
var arr = [ 80,600,1120,80,600,]
$('.wz_xt .one').mouseover(function(){
    var index=$(".wz_xt .one").index(this);
    $('.wz_data div').css('display','none')
    $('.wz_data').css({'display':'block','position':'absolute','top':arr[index]+'px'})
    $('.wz_data div').eq(index).css('display','block')
}).mouseout(function(){
    $('.wz_data div').css('display','none')
    $('.wz_data').css('display','none')
})
