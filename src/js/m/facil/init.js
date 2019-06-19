$(function () {
    tabFn();
    popFacilFn();
    
});

function tabFn(){
    //tab scroll
    var tabLen = $('.list-tab li').length;
    var liWid, wid = 0;
    
    for( var i = 0 ; i < tabLen ; i++ ){
        liWid = $('.list-tab li:eq('+i+')').width();
        wid += liWid;
    }
    $('.list-tab').css({'width' : (wid)+'px'}); //  box-tab 간격
    
    //tab click
    $(".list-tab > li").on("click", function(e) {
        e.preventDefault();
        //console.log('on');
        var aCls = $(this).find('a').attr('class');
        var listFc = $('.box-facil');
        
		$(this).addClass('on').siblings().removeClass('on'); //탭
        //console.log('제휴시설');

        if( aCls == 'all' ){
            listFc.find('.list-facil').fadeIn();
        }else {
            listFc.find('.list-facil').not('.best').fadeOut();
            listFc.find('.list-facil.'+aCls).fadeIn();
        }
        
        //맨위로
        $("html, body").stop().animate({
            scrollTop : 0
        }, 500);
    });
}

/* pop facil function */
function popFacilFn(){
    var btnPt, groupArr;
    var pop = $('.pop-facil');
    
    //open popup
    $('.sect-facil .list-facil').on('click', function(){
        btnPt = $(this).attr('class');
        groupArr = btnPt.split(' ');
        //console.log(groupArr[2]);
        
        if( $(this).hasClass('no-pop') ){
            //BS콘도같이 다이렉트 페이지 이동일 경우
        }else {
            pop.show();
            pop.find('.list-facil.'+groupArr[2]).show();
            
            var btn = pop.find('.list-facil.'+groupArr[2]).find('.box-pop-btn a');
            var btnLen = btn.length;
            
            btn.css({'width' : ((100-btnLen)/btnLen)+'%'});
            
            $('html').css({'overflow': 'hidden', 'height': '100%'});
            $(pop).on('scroll', function(event) { 
                event.preventDefault();     
                event.stopPropagation();     
                return false; 
            });
        }
    });

    //리사이즈
    /*$(window).resize(function() {
        if( pop.css('display') == 'block') {
            var popThs = pop.find('.list-facil.'+groupArr[2]+' .area-pop');
            var popHt = popThs.innerHeight();

            popThs.css({'margin-top': -(popHt/2)+'px'});
        }
    }).resize();*/
    
}
