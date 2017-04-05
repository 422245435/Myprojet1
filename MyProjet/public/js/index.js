/**
 * Created by Administrator on 2017/3/25.
 */
//banner
var li=$(".banner>.banner-ol>li")//找到a,给它一个透明度
var len= li.length;//a 的长度
var index=0;
var timer=null;

li.mouseover(function(){//点击li，a的时候
    index= li.index(this)//当鼠标移入的时候，index就是它当前的脚标
    showImg(index)
}).eq(0) .mouseover()//先调第一个，不用再前面加class了。都放在js里。
//console.log($(".banner"))
$(".banner").hover(function(){//定时器加给最外面的 ,div
    if(timer){
        clearInterval(timer);
    }
    li.css("display","block")
},function(){
    timer=setInterval(function(){
        li.css("display","none")
        index++
        if(index==len){//如果图片和a到了最后一个，把脚标设为0
            index=0
        }
        showImg(index)
        //
    } ,5000 )
}).trigger("mouseout")//不需要点击，一加载就可以运行

$(".right").click(function () {
    index++;
    if(index==li.length){
        index=0;
    }
    showImg(index)
})
$(".left").click(function () {
    index--;
    if(index==-1){
        index=li.length-1;
    }
    showImg(index)
})

function showImg(index){//当前图片和下面的显示，基余不显示
    $(".inner>.item").eq(index).stop(true,true).fadeIn()  .siblings().fadeOut()//它淡入，它的兄弟都淡出
    li.eq(index).css("opacity","1").siblings().css("opacity",".3 ")
    //$(".index-hr").css("animation","width")
}


//案例hover
$(".scroll-item").hover(function () {
    $(this).find(".view").css("display","block")
    $(this).find(".detail").css("display","block")
},function () {
    $(this).find(".view").css("display","none")
    $(this).find(".detail").css("display","none")
})

//手风琴
$(".tog").click(function () {
    $(this).find("i").toggle()
})

$(".tog").eq(0).attr("aria-expanded","true")
console.log($(".tog").eq(0))



//canvas
var startColor = '#3597D3';
var endColor = '#3597D3';
var element1 = document.getElementById('canvas1');
var element2 = document.getElementById('canvas2');
var element3 = document.getElementById('canvas3');
var element4 = document.getElementById('canvas4');
var circle1 = new ProgressBar.Circle(element1, {
    color: startColor,
    trailColor: '#45545D',
    trailWidth: 4,
    duration: 2000,
    easing: 'easeInOut',
    strokeWidth: 5,
    // Set default step function for all animate calls
    step: function(state, circle1) {
        circle1.path.setAttribute('stroke', state.color);
        $(".percent1").text((circle1.value() * 100).toFixed(0));
    }
});
var circle2 = new ProgressBar.Circle(element2, {
    color: startColor,
    trailColor: '#45545D',
    trailWidth: 4,
    duration: 2000,
    easing: 'easeInOut',
    strokeWidth: 5,
    // Set default step function for all animate calls
    step: function(state, circle2) {
        circle2.path.setAttribute('stroke', state.color);
        $(".percent2").text((circle2.value() * 100).toFixed(0));
    }
});
var circle3 = new ProgressBar.Circle(element3, {
    color: startColor,
    trailColor: '#45545D',
    trailWidth: 4,
    duration: 2000,
    easing: 'easeInOut',
    strokeWidth: 5,
    // Set default step function for all animate calls
    step: function(state, circle3) {
        circle3.path.setAttribute('stroke', state.color);
        $(".percent3").text((circle3.value() * 100).toFixed(0));
    }
});
var circle4 = new ProgressBar.Circle(element4, {
    color: startColor,
    trailColor: '#45545D',
    trailWidth: 4,
    duration: 2000,
    easing: 'easeInOut',
    strokeWidth: 5,
    // Set default step function for all animate calls
    step: function(state, circle3) {
        circle3.path.setAttribute('stroke', state.color);
        $(".percent4").text((circle3.value() * 100).toFixed(0));
    }
});
// var line = new ProgressBar.Line('#bar1', {
//     strokeWidth: 20,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#f4d03f',
//     trailColor: '#fff6da',
//     trailWidth: 21,
// });
// var line2 = new ProgressBar.Line('#bar2', {
//     strokeWidth: 20,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#f4d03f',
//     trailColor: '#fff6da',
//     trailWidth: 21,
// });
// var line3 = new ProgressBar.Line('#bar3', {
//     strokeWidth: 20,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#f4d03f',
//     trailColor: '#fff6da',
//     trailWidth: 21,
// });
setTimeout(function() {
    circle1.animate(0.7, {
        from: {
            color: startColor
        },
        to: {
            color: endColor
        }
    });
    circle3.animate(0.90, {
        from: {
            color: startColor
        },
        to: {
            color: endColor
        }
    });
}, 1200);
setTimeout(function() {
    circle2.animate(0.20, {
        from: {
            color: startColor
        },
        to: {
            color: endColor
        }
    });
    circle4.animate(0.65, {
        from: {
            color: startColor
        },
        to: {
            color: endColor
        }
    });
}, 1500);


//num
(function(a){
    a.fn.airport=function(g,n){
        var b=a.extend({transition_speed:1000,loop:true,fill_space:false,colors:null},n),
            m=a(this),
            j=["a","b","c","d","e","f","g"," ","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
                "v","w","x","y","z","-","1","2","3","4","5","6","7","8","9","0"],
            h,c,d=0,
            i=g.length,
            f=g.length;
        function e(p,o){
            return p+new Array(o-p.length+1).join(" ")
        }m.empty();
        while(i--){
            if(g[i].length>d){
                d=g[i].length
            }
        }
        while(f--){
            g[f]=e(g[f],d)
        }h=d;
        while(h--){
            var k=document.createElement("span");k.className="c"+h;m.prepend(k)
        }if(b.colors){
            c=b.colors.replace(/\s+/g,"").split(",")
        }
        function l(x,w,v,u){
            var q=m.find(".c"+x),r=g[v]?g[v].substring(u,u+1):null,
                p,s,o=g[v]?a.trim(g[v]).length:null,
                t=g[v-1]?a.trim(g[v-1]).length:a.trim(g[0]).length;
            if(v>=g.length){
                if(!b.loop){
                    clearTimeout(p);
                    return
                }
                p=setTimeout(function(){
                    l(0,0,0,0)
                },50)
            }else{
                if(u>=d){
                    p=setTimeout(function(){
                        if(b.colors){
                            s=c[~~(Math.random()*c.length)];
                        m.css("color",s.substring(0,1)==="#"?s:"#"+s)
                        }l(0,0,v+1,0)
                    },b.transition_speed)
                }else{
                    q.html((j[w]===" ")?" ":j[w]);
                    p=setTimeout(function(){
                        if(w>j.length){
                            l(x+1,0,v,u+1)
                        }else{
                            if(j[w]!==r.toLowerCase()){
                                l(x,w+1,v,u)
                            }else{
                                q.html((r===" "&&b.fill_space)?" ":r);
                                if(o<t){
                                    if(x>o){
                                        for(x;x<t;x++){
                                            m.find(".c"+x).html("")
                                        }
                                        u=d
                                    }
                                }l(x+1,0,v,u+1)
                            }
                        }
                    },50)
                }
            }
        }l(0,0,0,0)
    }
})(jQuery);
jQuery(".ticker").airport([ "creating web sites","to stand out from the crowd",
    "ASKING OUR WORK SPEAK FOR ITSELF"  ]);

//更多
// $(".index-more").niceHover({weight:3,color:"#3498db"});


//person轮播
function border() {
    var adv=document.getElementById("border")
    var timer=null
    var timer2=null
    function move(offset) {
        var speed=offset/20
        var tempOffset=0
        timer2=setInterval(xiaomove,30);
        function xiaomove() {
            adv.style.left = parseInt(adv.style.left) + speed + "px";
            tempOffset = tempOffset + speed;
            if (tempOffset == offset){
                clearInterval(timer2);
                timer2=  null	;
                tempOffset = 0;
            }
        }
        if (parseInt(adv.style.left) < -2175){
            adv.style.left = -725 +  "px";
        }
    }
    function right(){
        if(timer2 != null){
            return ;
        }
        move(-725);
    }
    timer =  setInterval(right,3000);
}
border()

//最后轮播
function brand(){
    var adv = document.getElementById("brand");
    var timer  = null
    var timer2 = null;
    var span = 0
    function move(){
        span --
        adv.style.left = span + "px";
        if(span==-1575){
            span=0
        }
    }
    timer =  setInterval(move,20);
}
brand()





