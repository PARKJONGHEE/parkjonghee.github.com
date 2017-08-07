$(document).ready(function(){

	// gnb
	$('.m_gnb').click(function(){
		$('.gnb').addClass('on');
		$('body').addClass('full_dim');
	});
	$('.m_gnb_close').click(function(){
		alert('클로즈 클릭');
		$('#header .gnb').removeClass('on');
		$('body').removeClass('full_dim');
	});

	// // 상가 베스트 hover
	// $('.store_list li').hover(function(){
	// 	$(this).addClass('on');
	// }, function(){
	// 	$(this).removeClass('on');
	// });
	//
	// // snb 메뉴
	// $('.snb_btn li').click(function(){
	// 	if($(this).parent('.snb_btn').hasClass('show')){
	// 			$('.snb_btn').removeClass('show');
	// 			$('.snb_btn li').removeClass('on');
	// 			$(this).addClass('on');
	// 	} else{
	// 		$(this).parent('.snb_btn').addClass('show');
	// 	}
	// });
	//
	// // 사진
	// $(".content_store .list_img li img").mouseover(function (){
	// 	var file = $(this).attr('src').split('/');
	// 	var filename = file[file.length-1];
	// 	var path = '';
	// 	for(i=0 ; i < file.length-1 ; i++){
	// 		path = ( i == 0 )?path + file[i]:path + '/' + file[i];
	// 	}
	// 	$('.view_img').attr('src',path+'/'+filename.replace('.jpg','.jpg'));
	// });
	//
	// // textarea
	// $('textarea').unbind("click").bind("click", function(){
	// 	$(this).empty();
	// });

	// snb 버튼 보이기
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('.btn_top_wrap').css('display','block');
			$('.btn_top_wrap').fadeIn(400);
		} else{
			$('.btn_top_wrap').css('display','noe');
			$('.btn_top_wrap').fadeOut(200);
		}
	});
});
