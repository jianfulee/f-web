$(document).ready(function(){
	var clickIndex = 0;
	$('.user-post').click(function(){
	            clickIndex = $(this);
		$('#back').css('display','block');
		$('#post-mess-area').css('display','block');
		document.body.style.overflow='hidden';

	});
	$('.f-wed-post-button').click(function(){
		$('#back').css('display','none');
		$('#post-mess-area').css('display','none');
		document.body.style.overflow='visible';
		var postTextCon = $(this).parent().prev().find('input').val();
		var postedTextCon = $('#f-web-post-con-6').html();
		clickIndex.parent().parent().parent().parent().insertAfter(postedTextCon);
		
	});
});