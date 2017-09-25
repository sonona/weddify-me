// DRUPAL THEME SCRIPTS
(function($) {
  Drupal.behaviors.common_starterkit = {
    attach: function(context, settings) {

      // THREE TYPES OF BROWSER
      // no javascript in the html has class="no-js"
      // javascript but not HTML5 class="no-mustardo"
      // Proper html5 javascript class="mustardo"
      // global variables
      $window = $(window);
      $document = $(document);
      $body = $('body');
      
	  // COMMENT OUT FUNCTIONS AND INITS IF YOU ARE NOT USING:
	  // ACCESSIBLE OFF CANVASS MENU
	  // ACCESSIBLE PANEL DROP DOWN MENU
	  // TAKEOVER OVERLAY
	  
	  
      // ALL JS Browsers ----------------------------------------------- 		
    
      /*//Slick slider init responsive content slider  */
	  // If the slideloader.js has been sucessful in the slick slider settings
	  function InitSlider () {
		//alert('done');
		// check if the slider was sucessful
	   	if ( jQuery( "html" ).hasClass( "slider-active" ) ) {
		
		// Gallery settings
		jQuery('.slideshow ul').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.thumbnails ul'
	});
	jQuery('.thumbnails ul').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slideshow ul',
  centerMode: false,
  focusOnSelect: true
});
			
			
	  	///// NOTES: Settings for a Feed scroller these are probally site specific so see http://kenwheeler.github.io/slick/
	  	jQuery('.d-feed--behaviour-slider .d-feed__body').slick({
  	infinite: false,
  	speed: 300,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	responsive: [
  	{
      breakpoint: 1366,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
	
	////// NOTE: We don't load the sider untill 672px using the sliderloader in common

  ]
		});
		
 		}// end if statement
	
	  }; // END INIT SLIDER 
	
	
      // INIT FUNCTIONS for All JS Browsers -------------------------------------------------- 
      
	  // USELESS USELESS IE HAS TOTLLY DIFFERENT ONLOAD EVENT TO OTHER BROWSERS!!!!
	   jQuery(window).bind("load", function() {
		  InitSlider ();
		  //console.log('I have loaded')
	  });
	 
      
      // HTML5 JS Browsers ----------------------------------------------- 
      
      // Start with BBC Cuts the mustard so only load scripts that require html5 e.g. query selector
      if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
        // Common scripts adds class Mustardo if your in a HTML5 browser
        
		
		/*// ACCESSIBLE OFF CANVASS MENU 2.0 */
		// only for cuts mustard browsers
		jQuery('#menu-toggle').addClass('mustardo-menu-toggle');
        jQuery('#navigation').addClass('mustardo-navigation')
		
		function OffCanvasMenu() {
			
			// remove the active classes
		jQuery('#site-wrapper').parent().removeClass('is-open'); 
		jQuery('.mustardo-nav-toggle').removeClass('is-active');
		
		// add aria stuff to nav only if we have a mobile nav default to closed
		jQuery('.mustardo-nav-toggle').attr( 'aria-expanded', 'false' );
		jQuery('.mustardo-navigation').attr( 'aria-hidden', 'true' );
		
		// This should only happen till a certain point
		if ($window.width() <= 767) {
		 
		
		 // remove the link 
		jQuery( '#menu-toggle a' ).replaceWith('<button class="toggle-control toggle-control--menu mustardo-nav-toggle mustardo-nav-toggle--menu" aria-controls="navigation" aria-label="Navigation Menu" aria-expanded="false"><span class="toggle-control__text">menu</span> <span class="toggle-control__icon" aria-hidden="true"></span></button>');
		
		// Add a dismiss button if it doesn't exist
		if ( jQuery( '.mustardo-nav-toggle--close' ).length ) {
		// do nowt
		} else {
			jQuery( '.mustardo-navigation' ).append('<button class="toggle-control toggle-control--close mustardo-nav-toggle mustardo-nav-toggle--close" aria-controls="navigation" aria-label="Close Navigation Menu" aria-hidden="true"><span class="toggle-control__text">Dismiss menu</span> <span class="toggle-control__icon" aria-hidden="true"></span></button>');	
			jQuery('.mustardo-nav-toggle--close').hide();
		}
		
		
	
	//Both buttons
	// check the click isn't bound
	jQuery('.mustardo-nav-toggle:not(.bound)').addClass('bound').click(function() {

	if (jQuery(this).hasClass('is-active')) {
      // HIDE
	  jQuery('#site-wrapper').parent().removeClass('is-open'); 
	  //jQuery('#menu-toggle').removeClass('is-active'); 
	  
	  // button
  		jQuery('.mustardo-nav-toggle').removeClass('is-active'); 
		jQuery('.mustardo-nav-toggle').attr( 'aria-expanded', 'false' );
		
		
		// nav
     	jQuery('.mustardo-navigation').attr( 'aria-hidden', 'true' );
		
		//Dismiss button
		jQuery('.mustardo-nav-toggle--close').attr( 'aria-hidden', 'true' );
		jQuery('.mustardo-nav-toggle--close').hide();
		
	  
    } else {
      // SHOW
	  	jQuery('#site-wrapper').parent().addClass('is-open'); 
		
		// button
  		jQuery('.mustardo-nav-toggle').addClass('is-active'); 
		jQuery('.mustardo-nav-toggle').attr( 'aria-expanded', 'true' );
		
		
		// nav
     	jQuery('.mustardo-navigation').attr( 'aria-hidden', 'false' );
		
		//Dismiss button
		jQuery('.mustardo-nav-toggle--close').attr( 'aria-hidden', 'false' );
		jQuery('.mustardo-nav-toggle--close').show();
		
      // Set focus on first link
	  //jQuery('.mustardo-navigation .global-nav > .menu > .first').children('a').focus();
    //END IF
	}
	return false;
	// END CLICK
	});
	// END MEDIA IF
	} else {
		//SO Strip all stuff out so its just a link.
		
		//remove aria 
		jQuery('.mustardo-navigation').removeAttr( 'aria-hidden');
		
		// Menu button back to link
		jQuery( '#menu-toggle button' ).replaceWith('<a href="#start-nav-focus" class="toggle-control">menu</a>');
		
		//remove dismiss
		jQuery('.mustardo-nav-toggle--close').remove();
	}
	// END FUCTION
	}
	
	
	// END ACCESSIBLE OFF CANVAS
	
	
	/*// ACCESSIBLE PANEL DROP DOWN MENU 
        // ARIA Panel Menu 
	function PanelDropDown() {
	if (Modernizr.mq('(min-width: 768px)')) {	
	jQuery('#navigation .panel').addClass('js-panel');	
	jQuery('#navigation .panel > a, #navigation .panel > span').addClass('js-panel__link');
	jQuery('#navigation .panel .menu').addClass('js-panel__child');
		
	// Add ARIA
	jQuery('.js-panel__link').attr('aria-haspopup', 'true');
	jQuery('.js-panel__child').attr('aria-hidden', 'true');
	jQuery('.js-panel__child').attr('aria-label', 'submenu');
	
	$body.click(function(){
			jQuery('.js-panel__link').removeClass('is-active');
		// submenu
			jQuery('.js-panel__child').removeClass('is-open');
			jQuery(".js-panel__child").attr('aria-hidden', 'true');
			
			//return false for some reason stoping submit buttons working
	});
	
	 jQuery('.js-panel__link:not(.bound)').addClass('bound').click(function(){
		var e=jQuery(this),t=e.next(".js-panel__child");
			var state = jQuery(this).next(".js-panel__child").attr('aria-hidden') === 'false' ? true : false;
				jQuery(".js-panel__link").not(e).removeClass("is-active");
				jQuery(".js-panel__child").not(t).removeClass("is-open");
				jQuery(".js-panel__child").not(t).attr('aria-hidden', 'true');
				e.toggleClass("is-active");
				t.toggleClass("is-open");
				t.attr('aria-hidden', state);
		
		return false
 	 });
	} else {
		//SO Strip all stuff out . 
		jQuery('#navigation .panel').removeClass('js-panel');	
		jQuery('#navigation .panel > a, #navigation .panel > span').removeClass('js-panel__link');	
		jQuery('#navigation .panel .menu').removeClass('js-panel__child');
		
		//remove ARIA 
		jQuery('#navigation .panel > a, #navigation .panel > span').removeAttr('aria-haspopup');
		jQuery('#navigation .panel .menu').removeAttr( 'aria-hidden');
		
	};
	// END FUCTION
	}
	
	// END ACCESSIBLE PANEL DROP DOWN MENU */
	
	
	/*// TAKEOVER OVERLAY - Cookie 
	
	function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


var cookieName = 'IItakeoverCookie';
var cookieValue = 'bigmalletTakeoverCookie';
var cookieDays = 30;
//var adjustCookieDays = 3;
var cookieFound = readCookie(cookieName);
//createCookie(cookieName,cookieValue,cookieDays);
//eraseCookie(cookieName)

// Use the takeover 
function showHideTakeover () {  
     
	// If the cookie is found kill it with fire
 	
	if (cookieFound) {
    	jQuery('#takeover-panel').remove();
		// option to adjust cookie
		//createCookie(cookieName,cookieValue,adjustCookieDays);
	} else {
		jQuery('#takeover-panel').attr('data-cookie', false);
		//jQuery('.generic-content--campaign-takeover').addClass('js-generic-content--campaign-takeover');
	}
	
	// if your logged in remove the cookie
	 var loggedIn = $body.hasClass('logged-in');
	 if (loggedIn) {
		//rsemove the cookie if you are logged in
		eraseCookie(cookieName);
	 }
 
	jQuery('#takeover-panel').addClass('js-takeover');
	
	jQuery('.js-takeover').append('<button class="js-takeover__toggle-control toggle-control js-close-btn" tabindex="0"><span class="js-close-btn__text">dismiss and continue to site</span><span class="js-close-btn__icon"></span></button>');

	
	
	//the click
	jQuery('.js-takeover').on('click', '.js-close-btn',function(e){
			//reset scroll
			window.scrollTo(0,0); 
		
			//alert('hello');
			e.stopPropagation();
			jQuery(this).hide();
			jQuery('.js-takeover').addClass('is-closed');
			jQuery('.js-takeover').attr('aria-hidden', true);
			
			// remove the body class 
			$body.removeClass('has-takeover');
			
			//animate on big devices
			if (jQuery(document).width() >= 768) {
				jQuery('.js-takeover').slideUp('300');
			} else {
				jQuery('.js-takeover').hide();	
			}
			
			//stop the video if there is one
			//stopVideo ();
			
			//check for the cookie 
			var cookieCheck = jQuery('#takeover-panel').attr('data-cookie');
			if (cookieCheck == 'false') {
				
				// create the cookie if you don't have one
				createCookie(cookieName,cookieValue,cookieDays);
			}
			
	});			
	
};
		//END TAKEOVER */
		
		//SCROLL ANIMATION FOR GIGOMETER
		function animateScroll() {
		// check if the gigometer exists
			
		if (Modernizr.mq('(min-width: 768px)')) {	
			
			$('#gigometerBar .js-gigometer__percent:not(.bound)').addClass('bound').addClass('js-gigometer__percent--animated');
			
			$window.scroll(function() {
			var gM = $('#gigometerBar'); // register the element
			if (gM.length) {	
   				var hT = parseInt($('#gigometerBar').offset().top),
      			hH = $('#gigometerBar').outerHeight(),
       			wH = $(window).height(),
       			wS = $(this).scrollTop();
   				if (wS > (hT+hH-wH)){
       			//alert('you have scrolled to the h1!');
				$('#gigometerBar .js-gigometer__percent').removeClass('js-gigometer__percent--init');
   				}
			}
			});
			
			/*//intoview css 
			function isInView(elem){
   				var docViewTop = $(window).scrollTop();
    			var docViewBottom = docViewTop + $(window).height();
    			var elemTop = $(elem).offset().top;
    			return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
			}
			
			$window.scroll(function(){
   				if (isInView($('#gigometer .js-gigometer__percent')))
      			//fire whatever you what 
      			$('#gigometer .js-gigometer__percent').removeClass('js-gigometer__percent--init');
			});*/
			
		// end media query
		}
		
		// End animateScroll function
		};
		
		
		//LOAD BACKGROUND IMAGE FROM DATA URL
		
		function loadDataBG() {
		
		if (Modernizr.mq('(min-width: 320px)')) {	
			$('.img--data:not(.bound)').addClass('bound').each(function() {
				
 			var attr = $(this).data('bg');

  			if (typeof attr !== typeof undefined && attr !== false) {
				
      			$(this).css({'background': 'url('+attr+')','background-size': 'cover'});

				
 		 	}
			// end each 
			});
			
		// end media query
		}
			//END loadDataBG
		};
		
		
		//MESSAGING DISMISS NOTIFICATIONS
		function dismissMessage() {
			
			if (Modernizr.mq('(min-width: 320px)')) {	
			
			$('#notices').children().addClass('js-message-wrapper');
			
			$('#notices .messages:not(.bound)').addClass('bound').each(function() {
				var id = 'message-' + $(this).index();
				$(this).addClass('js-messages');
				$(this).attr("id",  id);
				$(this).attr('aria-hidden', false);
				
				
				
				$(this).append('<button class="js-messages__toggle-control toggle-control js-close-btn" tabindex="0" aria-controls="' + id + '" aria-hidden="false"><span class="js-close-btn__text">remove notification</span><span class="js-close-btn__icon"></span></button>');
				//end each
				var button = $(this).children('button');
				// Toggle the state properties

  			button.on('click', function() {
				
    			$(this).attr('aria-hidden', true);
				$(this).parent().attr('aria-hidden', true).addClass('is-closing');
				
					// check for opacity to end
					$(this).parent().one('transitionend', function(e) {

      					$(this).remove();
	
   			 		});
					var count = $("#notices .messages").length;
					//alert('messages:' + count)
					if (count == 1) {
						// so get the last message
						$('.js-message-wrapper').addClass('is-closed');
					}
					// remove padding of .section if there are no messages left
					
					
				// end click
  				});
		
			// end each
			});
			
			// end media query
			}
			
			//END dismissMessage
		}
		
		//INNIT FUNCTIONS
		OffCanvasMenu();
		//PanelDropDown();
		//showHideTakeover ();
		animateScroll();
		dismissMessage();
		
		
		// ONload Functions //
		//Test width for android resize bug 
		$window.load(function(){
   			widthHorz = $window.width();
			
			loadDataBG();
			
		});
		
		/*//RESIZE FUNCTIONS*/
		$window.smartresize(function() {
		// fix reszie bug in android
		 if ( widthHorz != $window.width() ) {
			OffCanvasMenu();
		 }
		 animateScroll();
		 dismissMessage();
		//PanelDropDown();	
			
        });
		
		// load 
	
    
        // end mustardo		
      } else {
        // NON HTML5 JS Browsers ----------------------------------------------- 
    	
		
		/*//OLD IE TAKEOVER PANEL
		if (jQuery('html').hasClass('ie8')) {
		jQuery('#takeover-panel').append('<button class="toggle-control toggle-control--close ie8-takeover-toggle ie8-takeover-toggle--close"><span class="toggle-control__text">dismiss</span></button>');
			//jQuery('.mustardo-takeover-toggle').hide();
			jQuery('.ie8-takeover-toggle--close:not(.bound)').addClass('bound').click(function() {
				//alert('I was clicked');
				jQuery(this).hide();
				jQuery(this).parent().hide();
	
			});
		}*/
      
          // end non-mustardo
      }
    
      // END DRUPAL THEME SCRIPTS
    }
  };
})(jQuery);