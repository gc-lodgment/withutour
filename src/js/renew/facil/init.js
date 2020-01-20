$(function () {
    //함수실행
    popFacilFn();
    
});

/* pop facil function */
function popFacilFn(){
    var btnPt, groupArr;
    var pop = $('.pop-facil');
    
    //open popup
    $('.btn-detail').on('click', function(){
        btnPt = $(this).parents('.list-facil').attr('class');
        groupArr = btnPt.split(' ');
        //console.log(groupArr[2]);
        
        if( $(this).parents('.list-facil').hasClass('no-pop') ){
            //BS콘도같이 다이렉트 페이지 이동일 경우
        }else {
            pop.show();
            pop.find('.list-facil.'+groupArr[2]).show();
            
            $('html').css({'overflow': 'hidden', 'height': '100%'});
            $(pop).on('scroll', function(event) { 
                event.preventDefault();     
                event.stopPropagation();     
                return false; 
            });
        }
    });
    
}


