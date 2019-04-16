$(function(){
    //함수 실행
    tListFn();
    popFn();
    menuFn();
    
    //버튼 클릭시 단체문의로 이동.
    $('.move-group').on('click', function(){
        groupMove();
    });
    
    /* 디자인변경되면 제거 */
    if( $('."group-list').parents().hasClass('cont-group') ){
            
    }else{
        //ie8에서 group list 정렬을 위해 js 추가
        if( $('html').hasClass('ie8') ){
            //디자인 수정 전까지 정렬을 위해
                var groupLen = $('.group-list').length; 
                for( var i = 0 ; i < groupLen ; i++ ){
                    if (i % 3 == 0) {
                        //console.log(i)
                        $('.group-list:eq('+i+')').css({'margin-left': 0+'px'});
                    }
                }
        }else{
            //console.log('nope')
        }
    }
});

//메뉴 인터렉션
function menuFn(){
    var visualH = $('.visual').height();
    var section = $('div.cont-group');
    var nav = $('.nav');
    var navH = nav.height();
    var time = 500;
    
    //메뉴 클릭
    nav.find('.nav-list li a').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var offsetTop = $(target).offset().top;
        //$(this).parents('li').addClass('on').siblings().removeClass("on");
        
        $('html, body').stop().animate({
            scrollTop : (offsetTop-(navH))
        }, time);

        return false;
    });
    
    //scroll
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        var rWing = $('.r-wing'), bnTime = 300;
        
        //menu class
        $.each(section, function(idx, item){
            var target = section.eq(idx);
            var secId = ( '#'+String(target.attr('id')) );
            var targetTop = target.offset().top;
            var plusH = navH;
            
            //console.log(targetId);

            if( scltop <= (visualH+navH) ) {
                nav.removeClass('on'); 
            }else{
                nav.addClass('on');
            }
            if ( (targetTop-plusH) <= scltop ) {
                //nav.removeClass('on');
                nav.find('a[href="'+secId+'"]').parents('li').addClass('on').siblings().removeClass("on");;
            }

        });
        
        //rwing버튼 위치
        if( scltop < $('section.group').offset().top ){
            rWing.stop().animate({'top' : 510+'px'}, bnTime);
        }else {
            rWing.stop().animate({'top' : 100+'px'}, bnTime);
        }
    });
}


function tListFn(){
    $(document).ready(function(){
        var groupLen = $('.group-list').length;
        var list, listLen, listH, listMaxH;
        
        for( var i = 0 ; i < groupLen ; i++ ){
            list = $('.group-list:eq('+ i +')').find('.txt-list-box');
            listLen = list.length;
            listH, listMaxH = 0;
            
            for( var j = 0 ; j < listLen ; j++ ){
                listH = $('.group-list:eq('+ i +')').find('.txt-list-box:eq('+ j +')').find('.txt-list').innerHeight();
                if( listMaxH < listH ) listMaxH = listH;
                //console.log(i, j, listH)
            }
            
            list.find('.txt-list').css({'height' : listMaxH+'px'});
            //console.log('end : ', i, listMaxH)
        }
        
    });
}

// 팝업 인터렉션 
function popFn(){
    var btnPt, groupArr, ths;
    var pop = $('.group-pop');
    
    //pop btn hover
    $('.img-type').hover(function(){
        $('.btn-detail').stop().fadeOut();
        $(this).siblings('.btn-detail').stop().fadeIn();
    });
    $('.txt-area').hover(function(){
    }, function(){
        $('.btn-detail').stop().fadeOut();
    });
    
    //open popup
    $('.btn-detail').on('click', function(){
        btnPt = $(this).parents('.group-list').attr('class');
        groupArr = btnPt.split(' ');
        //console.log(groupArr[2]);

        pop.show();
        pop.find('.pop-list.'+groupArr[2]).show();


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
        closePop(ths);
    });
    
    //닫고 단체문의로 이동
    $('.group-pop .btn-group').on('click', function(){
        ths = $(this);
        closePop(ths);
        groupMove();
    });
    
}

//pop close function
function closePop(ths){
    ths.parents('.pop-list').hide().parents('.group-pop').hide();

    $('html').css({'overflow': 'auto', 'height': '100%'});
    ths.parents('.group-pop').off('scroll');
}

//단체문의로 이동
function groupMove(){
    $('html, body').stop().animate({
        //scrollTop: $($_anchor.attr('href')).offset().top - 150
        scrollTop: ($("#etc").offset().top)
    }, 800);
    event.preventDefault();
}