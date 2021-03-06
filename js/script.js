$(function(){
    $(".gnb > ul > li:nth-child(2)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-service').css('display','block');
        $('.gnb-bg').css("display",'block');
        $('.gnb-bg-over').css('display','block');
    });
    $(".gnb > ul > li:nth-child(2)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-service').css('display','none');
        $('.gnb-bg').css('display','none');
        $('.gnb-bg-over').css('display','none');
    });

    $(".gnb > ul > li:nth-child(3)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-share').css('display','block');
        $('.gnb-bg').css("display",'block');
        $('.gnb-bg-over').css('display','block');
    });
    $(".gnb > ul > li:nth-child(3)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-share').css('display','none');
        $('.gnb-bg').css('display','none');
        $('.gnb-bg-over').css('display','none');
    });

    $(".gnb > ul > li:nth-child(4)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-user').css('display','block');
        $('.gnb-bg').css("display",'block');
        $('.gnb-bg-over').css('display','block');
    });
    $(".gnb > ul > li:nth-child(4)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-user').css('display','none');
        $('.gnb-bg').css('display','none');
        $('.gnb-bg-over').css('display','none');
    });

    $(".gnb > ul > li:nth-child(6)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-board').css('display','block');
        $('.gnb-bg').css("display",'block');
        $('.gnb-bg-over').css('display','block');
    });
    $(".gnb > ul > li:nth-child(6)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-board').css('display','none');
        $('.gnb-bg').css('display','none');
        $('.gnb-bg-over').css('display','none');
    });


     

/* 파일명 가져오기 start */
	var fileTarget = $('.file_box .file_hidden');
	
	fileTarget.on('change', function(){
		if(window.FileReader){
			// 파일명 추출
			var filename = $(this)[0].files[0].name;
		} 
		else {
			// Old IE 파일명 추출
			var filename = $(this).val().split('/').pop().split('\\').pop();
		};

		$(this).siblings('.upload_name').val(filename);
	});
	/* 파일명 가져오기 end */

	/* 파일 이미지 가져오기 start */
	var imgTarget = $('.file_box .file_hidden');
	
	imgTarget.on('change', function(){
		var parent = $(this).parent();
		parent.children('.upload-display').remove();
		
		if(window.FileReader){
			//image 파일인지 검사
			if (!$(this)[0].files[0].type.match(/image\//)) return;
			
			var reader = new FileReader();
			reader.onload = function(e){
				var src = e.target.result;
				console.log(e);
				console.log(e.target);
				parent.prepend('<div class="upload-display"><img src="'+src+'" class="upload-thumb"></div>');
			}
			reader.readAsDataURL($(this)[0].files[0]);
		}
		else {
			$(this)[0].select();
			$(this)[0].blur();
			var imgSrc = document.selection.createRange().text;
			parent.prepend('<div class="upload-display"><img class="upload-thumb"></div>');

			var img = $(this).siblings('.upload-display').find('img');
			img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";
		}
	});
	/* 파일 이미지 가져오기 end */
});