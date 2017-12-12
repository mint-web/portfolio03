
// 메뉴설정 - sidemenu jquery 코딩
$(function() {
 	$('.hamber_button').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with-sidebar');
		});
    
    $('#site-cache').click(function(e){
      $('body').removeClass('with-sidebar');
    });
 });

// 유튜브 api 사용
$(function() {
    $('.play_btn').click(function(){
			$('.overlay').css('display','block');
}); 
 
    $('.modal_close').click(function(){
			$('.overlay').css('display','none');
});         
});
