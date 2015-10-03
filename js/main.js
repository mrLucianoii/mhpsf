// #SOLID DESIGNS
// Author: Luciano S. Aldana II
// Url: http://brandedsolid.com


 
 
  // Support hover state for mobile.
  if (false) {
    window.ontouchstart = function(){};
  } 
  
  //Navigation 

//  window.onresize = function(){ location.reload(); }
 
jQuery(document).ready(function ($) {
	
	
	var $window = $(window);
	
	var $expander = $("#menu-toggle"),
		$navWrap = $("#sidebar-wrapper"),
		$contWrap = $("#content-wrapper"),
		$navCl = $("#close"),
		$mNav = $(".navbar"),
		$mLC = $("#logo-center"),
		$mLL = $("#logo-left"),
		$contWrap = $("#content-wrapper"),
	$mainSec = $("main section");
		
   
    $navCl.click(function(e) {
        $mNav.removeClass('srnkNav');
        $mNav.removeClass('entNav');
		$expander.fadeIn("4500").css("display", "block");
        e.preventDefault();
        $contWrap.toggleClass("toggled");
		
		if ( $window.width() < 650) {
           $navWrap.css("margin-right", "-250px");
		}
		
		var secPos = ($mainSec.offset().top - 10);
		
		if ( $window.scrollTop() > secPos ){
	        $mNav.addClass('entNav');
		}
    });
		
    $expander.click(function(e) {
		
		var secPos = ($('main section').offset().top - 10);
		
		
	    if ($(this).scrollTop() > secPos && !$mNav.hasClass('srnkNav')) {
	        if (!$mNav.hasClass('entNav')) {
	            $mNav.addClass('entNav');
	        }
	    } else if ($(this).scrollTop() < 0) {

	        $mNav.addClass('srnkNav');

	    } else {
	        if ( $mNav.hasClass('entNav')) {
	            $mNav.removeClass('srnkNav');
	            $mNav.removeClass('entNav');
	        }
	    }
				
		$expander.fadeOut("4500");
 		e.preventDefault();
        $navWrap.css("margin-right", "250px");
		
     });
	 
    $expander.click(function(e) {
        e.preventDefault();
        $contWrap.toggleClass("toggled");
    });
	
    
	
	
					
// Nav Animation
	
	$window.on('scroll', function () {
		
		var secPos = ($('main section').offset().top);

	    if ($(this).scrollTop() > secPos && !$mNav.hasClass('srnkNav')) {
	        if (!$mNav.hasClass('entNav')) {
	            $mNav.addClass('entNav');
	        }
	    } else if ($(this).scrollTop() < 0) {

	        $mNav.addClass('srnkNav');

	    } else {
	        if ( $mNav.hasClass('entNav')) {
	            $mNav.removeClass('srnkNav');
	            $mNav.removeClass('entNav');
	        }
	    }
	}); 
	
//END of Nav Animation	
	
//smoothscroll
    $('.navbar a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target,
        $target = $(target);
			
		
		if ( target != window.location.hash ){
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top-100
	        }, 500, 'swing', function () {
	        });
		}
       
    });
    $('a#enty').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target,
        $target = $(target);
        $('html, body').stop().animate({	
            'scrollTop': $target.offset().top-50		
        }, 500, 'swing', function () {
        });
    });
	
	
	function solid_maps () {
	
	    var myLatlng = new google.maps.LatLng(37.7971124,-122.40415989999997);
	     var mapOptions = {
	       zoom: 14,
	       center: {lat: 37.7955416, lng: -122.4250939}
	     }
	     var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	     var marker = new google.maps.Marker({
	         position: myLatlng,
	         map: map,
	         title: 'The Law Offices of McGuinn, Hillsman & Palefsky'
	     });	
		
	}
	google.maps.event.addDomListener(window, 'load', solid_maps);
	
	$('#main-law a').click(function (e) {
	  e.preventDefault()
		$(this).tab('show');
	});
	   
	$(window).on('resize',function(){location.reload();});

		   
});

