$(function(){
    //함수 실행
    tListFn();
    popFn();
    
    //rwing버튼 위치
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        var rWing = $('.r-wing'), bnTime = 300;
        if( st < $('section.group').offset().top ){
            rWing.stop().animate({'top' : 510+'px'}, bnTime);
        }else {
            rWing.stop().animate({'top' : 100+'px'}, bnTime);
        }
    });
    
    //버튼 클릭시 단체문의로 이동.
    $('.move-group').on('click', function(){
        groupMove();
    });
});


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
    
    //open popup
    $('.btn-detail').on('click', function(){
        if( $(this).hasClass('yet') ){
           //console.log('yet')
        }else{
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
        }
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