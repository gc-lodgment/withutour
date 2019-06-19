$(function () {
    if( $('.sect-groups').css('display') == 'block' ){
        var groupsLen = $('.sect-groups .area-groups').length;
        //함수실행
        groupsFn(groupsLen);

        $(document).ready(function(){
            //함수실행 
            groupsListFn(groupsLen);
        });
    }
});

/* groups list Arr */
function groupsFn(groupsLen){
    var imgNum, grps, list, folder, cls, imgs, num=0;
    var liCls = '';
    var folderPC = 'about';
    var folderM = 'm/about';
    var custNum = 42,
        custList = ['GE', '금호타이어', '대한전선', '삼일회계법인', '한국교직원공제회', '현대글로비스', '현대자동차', '맥킨지', '기아자동차', '동국제강', '아우디코리아', '한국시설안전공단', '현대모비스', '삼성디스플레이', '건강보험심사평가원', '녹십자', '롯데푸드', '농심', '한국전력', '혼다코리아', '지방해양수산청', '국군복지단', '대성산업', '삼성물산', '폭스바겐', '한화시스템', '히타치조센', '신세계인터내셔날', '아주네트웍스', '오티스 EL', 'KT', 'KB손해보험', 'BMW', '현대해상', '메리츠화재', '하나투어', 'LG물류센터', '대성산업', '한국방송공사', '동국실업', '디티에스로봇', '한국쓰리엠'];
    var pubNum = 14,
        pubList = ['의정부시설공단', '울산시청', '서울시설공단', '서울남부교육청', '육군본부', '경기장애인협회', '행정안전부', '통일부', '대한자전거연맹', '대한약사회', '인천시청', '의용소방대', '대전 동구청', '한국정보통신협회'];
    var schNum = 8,
        schList = ['서울대학교', '고려대학교', '연세대학교', '한국과학기술원', '경찰대학교', '경희대학교', '중앙대학교', '공군사관학교', '관동대학교', '한림대학교', '한국예술종합학교', '강릉원주대학교', '서경대학교', '인천대학교', '국민대학교', '강릉원주대학교', '호원대학교', '광운대학교', '상지영서대학교', '춘천교육대학교', '강릉원주대학교', '상명대학교', '한림대학교', '청운대학교', '관동대학교', '경기대학교', '강릉원주대학교', '한국방송통신대', '대전고등학교', '아름고등학교', '창녕공업고', '창평고등학교', '새롬고등학교', '선영여고', '인천고등학교', '경북기계금속고', '광성고등학교', '상서고등학교', '울산 스포츠고', '보림초등학교', '명륜고등학교', '문산제일고', '서울실용음악고', '삼일공업고', '광남고등학교', '양지고등학교', '신정여자상고', '덕문고등학교', '부강중학교', '부길중학교', '서면초등학교', '신정중학교', '웅동중학교', '새롬중학교', '수피아여자중학교', '삼례중학교', '계창초등학교', '광려초등학교', '경남키움중학교', '악양중학교', '장흥중학교', '대송중학교', '동성중학교', '덕소초등학교', '용마초등학교', '논산중학교', '신지중학교', '중앙중학교', '성신여자중학교', '사대부여중학교', '한길초등학교', '장흥초등학교', '강남초등학교', '다사초등학교', '글꽃초등학교', '구평남부초등학교', '양구초등학교', '솔샘초등학교', '탄천초등학교', '풍천초등학교', '온양신정초등학교', '용문초등학교', '동일초등학교', '증안초등학교'];
    
    for(var y = 0 ; y < groupsLen ; y ++){
        switch (y) {
            case 0 :
                grps = 'cust';
                list = custList;
                imgNum = custNum;
                folder = folderPC;
                break;
            case 1 :
                grps = 'public';
                list = pubList;
                imgNum = pubNum;
                folder = folderPC;
                break;
            default :
                grps = 'school';
                list = schList;
                imgNum = schNum;
                folder = folderM;
                break;    
        }
    
        for( var i = 0 ; i < list.length ; i++ ){
            if( (i+1) <= imgNum ){
                if( String(i+1).length == 1 ) {
                    num = String(0)+(i+1);
                }else {
                    num = (i+1);
                }
                imgs = '<div class="list-img"><figure><img src="http://img.withutour.co.kr/renew/'+folder+'/img_'+grps+'_logo_'+num+'.png" alt="'+list[i]+'"></figure></div>';
                cls = '';
            }else {
                imgs = '';
                cls = 'type-2'
            }
            
            //4로 나뉘어 떨어지지 않을경우 마지막 li에 클래스 추가
            if( grps == 'cust' || grps == 'public') {
                //console.log('true');
                if( !(list.length % 4 == 0) ) {
                    if( (i+1) == list.length ) {
                        liCls = 'bor-r';
                    }else {
                        liCls = '';
                    }
                }
            }else {
                liCls = '';
            }

            $('.sect-groups .area-groups.'+grps+' .list-groups').append('<li class="'+liCls+'"><div class="area-list '+cls+'"><div class="box-list">'+imgs+'<p class="txt-list"><span>'+list[i]+'</span></p></div></div></li>');
        }
    }
    
}

/* groups list function */
function groupsListFn(groupsLen){
    var groupsLi, groupsLiLen; 
    for( var i = 0 ; i < groupsLen ; i++ ){
        groupsLi = $('.sect-groups .area-groups:eq('+i+')');
        groupsLiLen = $('.sect-groups .area-groups:eq('+i+')').find('.list-groups li').length;
        for ( var j = 0 ; j < groupsLiLen ; j++ ){
            if (j % 4 == 0) { 
                //console.log(j)
                groupsLi.find('.list-groups li:eq('+j+')').css({'border-left': 0});
            }
        }
    }
}