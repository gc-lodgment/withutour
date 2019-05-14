$(function(){
    //함수 실행
    menuFn();
    visuFn();
    tabFn();
    
    //테이블이 있을 경우
    if( $('.tbl-col').css('display') == 'block' ) {
        tableFn();
    }
    
    //제휴시설이 있을 경우
    if( $('.box-facil').css('display') == 'block' ){
        //console.log('facil');
        facilFn();
    }
    
    
});


/* menu function */
function menuFn(){
    var gnb = $('.gnb .menu');
    
    //메뉴 over
    gnb.find('li[class*="item-"] > a').on('mouseover', function(){
        if( $(this).siblings('.snb').css('display') == 'block' ) {
            //해당서브메뉴가 block일 경우 가만히
        }else {
            gnb.find('.snb').stop().slideUp('fast');
            $(this).siblings('.snb').stop().slideDown('fast');
        }
    });
    
    //메뉴 leave
    gnb.on('mouseleave', function(){
        $(this).find('.snb').stop().slideUp('fast');
        $(this).find('.snb').css({'height' : 'auto'});
    });
    
    //서브메뉴 hover
    gnb.find('.snb li > a').hover(function(){
        $(this).parent('li').siblings().removeClass('on');
        $(this).parent('li').addClass('on');
    }, function(){
        $(this).parent('li').removeClass('on');
    })
}

/* sub tab function */
function tabFn(){
    $(".list-tab > li").on("click", function(e) {
        e.preventDefault();
        //console.log('on');
        
		$(this).addClass("on").siblings().removeClass("on"); //탭
            
        if( $('.box-tab').hasClass('anchor') ){
            //console.log('anchor');

        }else if( $('.box-tab').hasClass('tab') ){
            //console.log('제휴시설');
            var aCls = $(this).find('a').attr('class');
            var listFc = $('.box-facil');
            //console.log(aCls);
            
            if( aCls == 'all' ){
               listFc.find('.list-facil').fadeIn();
               facilFn();
            }else {
                listFc.find('.list-facil').not('.best').fadeOut();
                listFc.find('.list-facil.'+aCls).fadeIn().css({'margin-left': '2%'});
                //listFc.find('.list-facil.'+aCls+':eq('++')').css({'margin-left': '0'});
                facilType2Fn();
            }
            
        }else {
            var idx = $(this).index();

            $('div[class*="sect-"]').eq(idx).addClass("on").siblings().removeClass("on");
            $('div[class*="sect-"]').eq(idx).show().siblings('div[class*="sect-"]').hide();
        }
        
        //맨위로
        $("html, body").stop().animate({
            scrollTop : 0
        }, 500);
    });
}

/* visual function */
function visuFn(){
    $('div[class*="visual"]').bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: true,
        controls: false,
        pager: false,
        speed: 1000,
		duration: 6000,
		onSliderLoad: function(currentIndex){
			$(".area-slide").eq(currentIndex).addClass("active");
		},
		onSlideBefore: function ($slideElement, oldIndex, newIndex) {
			$(".area-slide").eq(oldIndex).removeClass("active");
		},
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			$slideElement.addClass("active");
		}
	});
}

/* table function */
function tableFn(){
    var tblLen = $('.tbl-col').length;
    
    for( var i = 0 ; i < tblLen ; i++ ){
        var tbl = $('.tbl-col:eq('+i+')');
        var total = 0;
        var tdWd = tbl.find('tbody tr td:first-child').width();
        
        if( tbl.find('.ico-lock').css('display') == 'inline-block' ){
            var lockWd = tbl.find('.ico-lock').outerWidth();
            var txtWd = tbl.find('[class*="txt-"]').outerWidth();
            
            total = tdWd-(lockWd+txtWd);
        }else {
            total = tdWd;
        }
        
        $('.tbl-col:eq('+i+')').find('tbody tr td .desc').css({'max-width' : (total-11)+'px'});
        $('.ie .tbl-col:eq('+i+')').find('tbody tr td .desc').css({'max-width' : (total-15)+'px'});
        $('.safari .tbl-col:eq('+i+'), .ie8 .tbl-col:eq('+i+')').find('tbody tr td .desc').css({'max-width' : (total-19)+'px'});
    };
    
}

/* facil function */
function facilFn(){
    var groupLen = $('.box-facil .list-facil').length; 
    for( var i = 0 ; i < groupLen ; i++ ){
        if (i % 4 == 0) { 
            //console.log(i)
            $('.list-facil:eq('+i+')').css({'margin-left': 0});
        }
    }
}
function facilType2Fn(){
    var groupLen = $('.box-facil .list-facil'+aCls).length; 
    for( var i = 0 ; i < groupLen ; i++ ){
        if (i % 4 == 0) { 
            //console.log(i)
            listFc.find('.list-facil.'+aCls+':eq('+i+')').css({'margin-left': '0'});
        }
    }
}






