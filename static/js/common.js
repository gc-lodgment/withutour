/* footer link */
var util = {
	regist_pop: function(imgname) {
		if(imgname == "registration01") {
			ww = window.open("http://www.go.co.kr/home/common/regist_pop.php?imgname="+imgname, "regist", "toolbar=no,scrollbars=yes,directories=no,status=no,menubar=no,width=600,height=849,resizable=yes, top=50, left="+((screen.width - 450)/2)+"");
			ww.focus();
		} else {
			ww = window.open("http://www.go.co.kr/home/common/regist_pop.php?imgname="+imgname, "regist", "toolbar=no,scrollbars=yes,directories=no,status=no,menubar=no,width=400,height=568,resizable=yes, top=50, left="+((screen.width - 450)/2)+"");
			ww.focus();
		}
	},
}