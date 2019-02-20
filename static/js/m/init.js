$(function(){
    //함수 실행
    tListFn();
    conFn();

    //리사이즈
    $(window).resize(function() {
        tListFn();
        conFn();
    }).resize();
    
});

//개요, 프로그램 높이값 동일하게
function tListFn(){
    $(document).ready(function(){
        var groupLen = $('.group-list').length,
            list, listLen, listH, listMaxH;
        $('.group-list .txt-list-box .txt-list').css({'height' : 'auto'}); //높이 초기화
        
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
        }
        
        listH, listMaxH = 0; //변수 초기화
    });
}

//메뉴 + 콘텐츠 인터렉션
function conFn(){
    var nav = $('.nav'), menu = $('.menu'),
        group = $('.group'),
        btnMenu = $('.btn-menu'), btnClose = $(".btn-close"), btnFooter = $(".btn-ft"), btnTop	= $(".btn-top"),
        winH = $(window).height(), navH = nav.height(),
        sclTop = $(window).scrollTop(), groupTop = group.offset().top,
        time = 1000;
    
    //console.log(winH, menuTitH, menuTxtH, menuTxtPd , menuListH)
    //메뉴
    menuH();
    
    $(window).load(function(){
        //스크롤 전 header 초기화
        if( sclTop <= groupTop ){
            nav.css({'position' : 'absolute', 'top' : (group.offset().top - navH) + 'px'});
        }
    });
    
    //nav list click
    nav.find('.nav-list li > a').on('click', function(){
        var navHref = $(this).attr('href');
        var sec = $(navHref);
        $(this).parents('li').addClass('on').siblings().removeClass('on');
        sec.stop().show().siblings('.group-list').stop().hide();
        $("html, body").stop().animate({
            scrollTop : (group.offset().top - navH)
        }, 500);
        tListFn();
    });
    
    // + click
    btnMenu.on('click', function(){
        //console.log('open')
        menu.stop().fadeIn(function(){
            $("html, body").stop().animate({scrollTop : 0}, 100);
            
            $('html').css({'overflow': 'hidden', 'height': '100%'});
            menuH();
        });
    });
    
    // menu X button click
    btnClose.on('click', function(){
        //console.log('close')
        $("html, body").stop().animate({scrollTop : 0}, 100);
        menu.stop().fadeOut(function(){});
        $('html').css({'overflow': 'auto', 'height': '100%'});
    });

    //업체정보안내 클릭 시    
    btnFooter.on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');

        $("html, body").stop().animate({
            scrollTop : ($(target).offset().top - navH)
        }, time);

        return false;
    });

    //top 클릭시
    btnTop.on('click', function(e){
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop : 0
        }, time);

        return false;
    });
    
    //스크롤
    $(window).scroll(function() {
        sclTop = $(window).scrollTop();
        //top button Fn
        if ( sclTop >= groupTop ){
            btnTop.fadeIn();
            
            //header
            nav.css({'position' : 'fixed', 'top' : '0' + 'px'});
        }else{
            btnTop.fadeOut();
            
            //header
            nav.css({'position' : 'absolute', 'top' : (group.offset().top - navH) + 'px'});
        }
    });
    
}

//메뉴 팝업 높이
function menuH(){
    var menuWrap = $('.menu .menu-wrap'), menuTit = $('.menu-tit-area'),
        winH = $(window).height(), menuTitH = menuTit.outerHeight(), menuTxtH = $('.menu-txt-area .menu-txt-box').outerHeight(),
        menuTxtPd = Number($('.menu-txt-area').css('padding-bottom').replace(/[^-\d\.]/g, '')) + Number($('.menu-txt-area').css('padding-top').replace(/[^-\d\.]/g, '')),
        menuListH = winH-(menuTitH+menuTxtH+menuTxtPd);
    
    menuWrap.css({'height' : winH+'px'}).find('.menu-txt-area .menu-list').css({'height' : menuListH+'px'});
}

