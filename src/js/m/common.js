$(function(){
    //변수
    var ths;
    
    //함수 실행
    menuFn();
    visuFn();
    topFn();
    
    //리사이즈
    $(window).resize(function() {
        //테이블이 있을 경우
        if( $('.tbl-col').css('display') == 'block' ) {
            tableFn();
        }
    }).resize();
    
    
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
        //console.log('cls');
        ths = $(this);
        closePopFn(ths);
    });
});


/* menu function */
function menuFn(){
    var gnb = $('.header .gnb');
    
    gnb.find('.btn-menu').on('click', function(){
        gnb.find('.menu-area').addClass('on');

        $('html').css({'overflow': 'hidden', 'height': '100%'});
        gnb.on('scroll', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
    });
    
    gnb.find('.btn-menu-close').on('click', function(){
        gnb.find('.menu-area').removeClass('on');
        
        $('html').css({'overflow': 'auto', 'height': '100%'});
        gnb.off('scroll');
    });
}

/* visual function */
function visuFn(){
    var spd = 1000, du = 6000;
    
    if( $('.visual').css('display') == 'block' ) {
        $('.visual').bxSlider({
            mode: 'fade',
            auto: true,
            autoHover: true,
            autoControls: false,
            controls: false,
            pager: true,
            speed: spd,
            duration: du,
            onSliderLoad: function(){
                $(".area-slide").addClass("active");
            },
            onSlideBefore: function () {
                $(".area-slide").removeClass("active");
            },
            onSlideAfter: function () {
                $(".area-slide").addClass("active");
            }
        });
    }else {
        $('.sub-visual').bxSlider({ //'div[class*="visual"]'
            mode: 'fade',
            auto: true,
            autoControls: false,
            controls: false,
            pager: false,
            speed: spd,
            duration: du,
            onSliderLoad: function(){
                $(".area-slide").addClass("active");
            }
        });
        
    }
}

/* table function */
function tableFn(){
    var tblLen = $('.tbl-col tbody tr').length;
    var tblTdPl = ($('.tbl-col td').css('padding-left').slice(0, -2))*2;
    //console.log(tblLen);
    
    for( var i = 0 ; i < tblLen ; i++ ){
        var tbl = $('.tbl-col tbody tr:eq('+i+')');
        var total = 0;
        var tdWd = tbl.find('td:first-child').width();
        //console.log(tbl.text());
        
        if( tbl.find('.ico-lock').css('display') == 'inline-block' ){
            var lockWd = tbl.find('.ico-lock').outerWidth();
            var txtWd = 0;
            if( tbl.find('[class*="txt-"]').css('display') == 'inline-block' ){
                txtWd = tbl.find('[class*="txt-"]').outerWidth();
            }
            
            total = tdWd-(lockWd+txtWd);
        }else { 
            total = tdWd;
        }
        //console.log(total);
        tbl.find('td .desc').css({'max-width' : (total-10)+'px'});
    };
    
}

/* pop close function */
function closePopFn(ths){
    if( $('.pop-wrap.pop-facil').css('display') == 'block' ){
        //제휴시설일때
        console.log('cls');
        ths.parents('.list-facil').hide();
    }else{
        //비밀번호일경우 / 기본 노말 타입
        ths.parents('.sect-pop').hide();
    }
    ths.parents('.pop-wrap').hide();

    $('html').css({'overflow': 'auto', 'height': '100%'});
    ths.parents('.pop-wrap').off('scroll');
}

/* top */
function topFn() {
	var btnTop	= $(".btn-top");
	$(window).scroll(function() {
		var scr = $(window).scrollTop();
		if ( scr > 0 ) {
			btnTop.fadeIn();
		} else {
			btnTop.fadeOut();
		}
	});
    btnTop.on('click', function(){
        //맨위로
        $("html, body").stop().animate({
            scrollTop : 0
        }, 500); 
    });
}


