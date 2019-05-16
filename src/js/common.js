$(function(){
    //변수
    var ths;
    
    //함수 실행
    menuFn();
    visuFn();
    tabFn();
    bnMdFn();
    
    //테이블이 있을 경우
    if( $('.tbl-col').css('display') == 'block' ) {
        tableFn();
    }
    
    //open popup
    $('.popOpen').on('click', function(){
        var pop = $('.pop-wrap');
        pop.show();
        pop.find('.sect-pop').show();

        $('html').css({'overflow': 'hidden', 'height': '100%'});
        $(pop).on('scroll', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
    });
    
    //close popup
    $('.btn-close').on('click', function(){
        ths = $(this);
        closePopFn(ths);
    });
    
    //ss banner right hover
    $('.bnServFn').hover(function(){
        $(this).siblings('div[class*="box-"]').addClass('on');
    }, function(){
        $(this).siblings('div[class*="box-"]').removeClass('on');
    });
    
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
        
		$(this).addClass('on').siblings().removeClass('on'); //탭
            
        if( $('.box-tab').hasClass('anchor') ){
            //console.log('anchor');
            var ht = $('.gnb').height();
            var target = $(this).find('a').attr('href');
            var offsetTop = $(target).offset().top;

            $('html, body').stop().animate({
                scrollTop : (offsetTop-ht)
            }, 800);
            
            //학교단체로 on 고정
            $(this).removeClass('on');
            $(".list-tab > li:first-child").addClass('on');
            
            return false;
            
        }else if( $('.box-tab').hasClass('tab') ){
            //console.log('제휴시설');
            var aCls = $(this).find('a').attr('class');
            var listFc = $('.box-facil');
            //console.log(aCls);
            
            if( aCls == 'all' ){
                listFc.find('.list-facil').fadeIn();
            }else {
                listFc.find('.list-facil').not('.best').fadeOut();
                listFc.find('.list-facil.'+aCls).fadeIn();
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
    var tblTdPl = ($('.tbl-col td').css('padding-left').slice(0, -2))*2;
    //console.log(tblTdPl)
    
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
        
        $('.tbl-col:eq('+i+')').find('tbody tr td .desc').css({'max-width' : (total-tblTdPl)+'px'});
    };
    
}

/* pop close function */
function closePopFn(ths){
    if( $('.pop-wrap.pop-facil').css('display') == 'block' ){
        //제휴시설일때
        ths.parents('.list-facil').hide();
    }else{
        //비밀번호일경우 / 기본 노말 타입
        ths.parents('.sect-pop').hide();
    }
    ths.parents('.pop-wrap').hide();

    $('html').css({'overflow': 'auto', 'height': '100%'});
    ths.parents('.pop-wrap').off('scroll');
}

/* banner right align middle function */
function bnMdFn(){
    var bnRight = $('.bn-wrap.bn-right');
    var hdt = $('.box-gnb').height(), visualHt = $('div[class*="visual"] .box-slide').height(), bnRightHt = bnRight.find('.container .inner').height();
    var bnRightTop = bnRight.css('top');
    var scltop;
    //console.log(hdt, visualHt, bnRightHt, bnRightTop);
    
    //scroll
    $(window).scroll(function(){
        scltop = $(window).scrollTop();
        if ( scltop < (hdt+visualHt) ) {
            //console.log('absolute');
            bnRight.stop().animate({'top': bnRightTop, 'margin-top': 0});
        }else {
            bnRight.stop().animate({'top': 50+'%', 'margin-top': -(bnRightHt/2)+'px'}); 
        }
    });
}





