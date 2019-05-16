$(function () {
    //함수실행
    faqFn();
    pageFn();
});

/* faq function */
function faqFn(){
    var faq = $(".sect-faq .list-faq .box-faq");
    faq.find(".box-qust").on("click", function() {
        if( $(this).parents('.box-faq').hasClass('on') ){
            faq.removeClass('on');
            faq.find(".box-qust").next().slideUp("fast");
        }else{
            faq.removeClass('on');
            faq.find(".box-qust").next().slideUp("fast");
            $(this).parents('.box-faq').addClass('on');
            $(this).next().slideDown("fast");
        }
    });
}

/* pagenation function */
function pageFn(){
	$("#pagenation a").on("click", function () {
		var idx = $(this).index();
		var lastIdx = $(this).closest("div").find("a").length;
		lastIdx--;
		//console.log(lastIdx);
		if (idx != 0 && idx != lastIdx) {
			$(this).addClass("on").siblings().removeClass("on");
		}
		event.preventDefault();
	});
}