$(function () {
    
    //시설개요보기 버튼 호버
    $('.img-facil').hover(function(){
        $('.btn-detail').stop().fadeOut();
        $(this).find('.btn-detail').stop().fadeIn();
    },function(){
        $('.btn-detail').stop().fadeOut();
    });
    
});
