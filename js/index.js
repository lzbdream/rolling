/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-18 10:06:31
 * @version $Id$
 */
$(function(){
	/*顶部的滑动效果*/
	(function(){
		var $nav = $("#header .main-nav"),
			$li = $nav.find("ul li"),
			$bor = $nav.find(".border"),
			sW = $bor.width(),
			sL = $bor.position().left,
			w = sW - $li.eq(0).outerWidth();
			l = sL - $li.position().left;

		$li.mouseenter(function(){
			var width = $(this).outerWidth() + w,
				left = $(this).position().left + l;
			
			$bor.stop().animate({
				width : width,
				left : left
			},500);
		});
	})();

	/* 全屏特效 */
	(function(){
		var $content = $("#content"),
			$sidebarLi = $("#sidebar-nav").find("ul li"),
			winH = $(window).height(),
			length = $content.children().length,
			index = 0,
			lTime = 0;

		$(window).resize(function(){
			winH = $(this).height();
			$content.css({"top":-index*winH});
		});

		$(document).mousewheel(function(e,d){
			if(new Date - lTime > 800){
				if( d<0 ){
					index++;
					index %= length;
				}else{
					index--;
					if(index<0){index = length-1;}
				}
				change();
				lTime = new Date;
			}
		});
		
		$sidebarLi.click(function(){
			var x = $(this).index();
			if(x !== index){
				index = x;
				change();
			}
		});


		function change(){
			$sidebarLi.eq(index).addClass("on").siblings().removeClass("on");
			$content.stop().animate({
				top : -index*winH
			},800);
		}

	})();



});
