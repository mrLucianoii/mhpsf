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
	$contWrap = $("#content-wrapper");

		
   
    $expander.click(function(e) {
        e.preventDefault();
        $contWrap.toggleClass("toggled");
    });
	
	
// Nav Animation
	
	$window.on('scroll', function () {
		
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
	}); 
//END of Nav Animation	

//smoothscroll
    $('.navbar a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target;
        $target = $(target);
		
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-45
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    $('a#enty').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-45
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
	
	function solid_maps_temp () {
	
	    var myLatlng = new google.maps.LatLng(37.7971124,-122.40415989999997);
	     var mapOptions = {
	       zoom: 14,
	       center: {lat: 37.7955416, lng: -122.4250939}
	     }
	     var map = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);

	     var marker = new google.maps.Marker({
	         position: myLatlng,
	         map: map,
	         title: 'The Law Offices of McGuinn, Hillsman & Palefsky'
	     });	
		
	}

	google.maps.event.addDomListener(window, 'load', solid_maps_temp);
	
	$('#main-law a').click(function (e) {
	  e.preventDefault()
		$(this).tab('show');
	});
	   
	$(window).on('resize',function(){location.reload();});
	   
});

