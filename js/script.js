
var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	
	
	$(".nav2 li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent2");
		};
	})
	
	$(".toggleMenu2").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav2").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 1000) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
		
// SECOND START
		$(".toggleMenu2").css("display", "inline-block");
		if (!$(".toggleMenu2").hasClass("active")) {
			$(".nav2").hide();
		} else {
			$(".nav2").show();
		}
		$(".nav2 li").unbind('mouseenter mouseleave');
		$(".nav2 li a.parent2").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
// SECOND END
		
	} 
	else if (ww >= 1000) {
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
		
		// SECOND START
		$(".toggleMenu2").css("display", "none");
		$(".nav2").show();
		$(".nav2 li").removeClass("hover");
		$(".nav2 li a").unbind('click');
		$(".nav2 li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
		// SECOND END
		
	}
}
function myFunction(a){a.classList.toggle("change")};
function opensite(a){window.open(a)}
