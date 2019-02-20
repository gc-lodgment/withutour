$(function(){
    //함수 실행
    tListFn();
    
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
        $('html, body').stop().animate({
            //scrollTop: $($_anchor.attr('href')).offset().top - 150
            scrollTop: ($("#etc").offset().top)
        }, 800);
        event.preventDefault();
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
