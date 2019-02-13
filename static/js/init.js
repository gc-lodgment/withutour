$(function(){
    //함수 실행
    tListFn();
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