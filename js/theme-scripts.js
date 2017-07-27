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
    
	 
      
      // HTML5 JS Browsers ----------------------------------------------- 
      
      // Start with BBC Cuts the mustard so only load scripts that require html5 e.g. query selector
      if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
        // Common scripts adds class Mustardo if your in a HTML5 browser
		
		
		/*// ACCESSIBLE OFF CANVASS MENU 2.0*/
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
		if (Modernizr.mq('(max-width: 47.9375em)')) {
		 
		
		 // remove the link 
		jQuery( '#menu-toggle a' ).replaceWith('<button class="toggle-control toggle-control--menu mustardo-nav-toggle mustardo-nav-toggle--menu" aria-controls="navigation" aria-label="Navigation menu toggle" aria-expanded="false"><span class="toggle-control__text">menu</span> <span class="toggle-control__icon icon"></span></button>');
		
		// Add a dismiss button if it doesn't exist
		if ( jQuery( '.mustardo-nav-toggle--close' ).length ) {
		// do nowt
		} else {
			jQuery( '.mustardo-navigation' ).prepend('<div class="navigation__menu-toggle menu-toggle mustardo-menu-toggle"><button class="toggle-control toggle-control--close mustardo-nav-toggle mustardo-nav-toggle--close" aria-controls="navigation" aria-label="Navigation menu toggle" aria-hidden="true"><span class="toggle-control__text">menu</span> <span class="toggle-control__icon icon"></span></button></div>');	
			//jQuery('.mustardo-nav-toggle--close').hide();
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
		//jQuery('.mustardo-nav-toggle--close').hide();
		
	  
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
		//jQuery('.mustardo-nav-toggle--close').show();
		
      // Set focus on first link
	  jQuery('#primary-nav a').first().focus();
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
		jQuery('.navigation__menu-toggle').remove();
	}
	// END FUCTION
	}
	
	
	// END ACCESSIBLE OFF CANVAS
	
	
	/*// ACCESSIBLE PANEL DROP DOWN MENU */
        // ARIA Panel Menu 
	function PanelDropDown() {
	
	// when the behaviour should start 
	if (Modernizr.mq('(min-width: 20em)')) {
	jQuery('nav:not(#navigation) .panel').addClass('js-panel');	
	jQuery('nav:not(#navigation) .panel > a, nav:not(#navigation) .panel > span').addClass('js-panel__link');
	jQuery('nav:not(#navigation) .panel .menu').addClass('js-panel__child');	
	}
	
	// for navigation 
	if (Modernizr.mq('(min-width: 48em)')) {
	jQuery('#navigation .panel').addClass('js-panel');	
	jQuery('#navigation .panel > a, #navigation .panel > span').addClass('js-panel__link');
	jQuery('#navigation .panel .menu').addClass('js-panel__child');	
	
	//These need to become buttons	
	// New type of the tag
	var replacementTag = 'button';

	// Replace all a tags with the type of replacementTag
	$('#navigation .panel > a, #navigation .panel > span').each(function() {
    var outer = this.outerHTML;

    // Replace opening tag
    var regex = new RegExp('<' + this.tagName, 'i');
    var newTag = outer.replace(regex, '<' + replacementTag);

    // Replace closing tag
    regex = new RegExp('</' + this.tagName, 'i');
    newTag = newTag.replace(regex, '</' + replacementTag);

    $(this).replaceWith(newTag);
	});
	//end replace function
	
	}
	
	
	// drop down behaviour	
	if (Modernizr.mq('(min-width: 20em)')) {	
	
	// Add ARIA
	jQuery('.js-panel__link').attr('aria-expanded', 'false');
	jQuery('.js-panel__link').attr('aria-haspopup','true');
	jQuery('.js-panel__child').attr('aria-hidden', 'true');
	jQuery('.js-panel__child').attr('aria-label', 'submenu');
	
	$body.click(function(){
			jQuery('.js-panel__link').removeClass('is-active');
			jQuery('.js-panel__link').attr('aria-expanded', 'false');
		// submenu
			jQuery('.js-panel__child').removeClass('is-open');
			jQuery(".js-panel__child").attr('aria-hidden', 'true');
			
			//return false for some reason stoping submit buttons working
	});
	
	 jQuery('.js-panel__link:not(.bound)').addClass('bound').click(function(){
		var e=jQuery(this),t=e.next(".js-panel__child");
			var state = jQuery(this).next(".js-panel__child").attr('aria-hidden') === 'false' ? true : false;
				jQuery(".js-panel__link").not(e).removeClass("is-active");
				jQuery(".js-panel__link").not(e).attr('aria-expanded', 'false');
				jQuery(".js-panel__child").not(t).removeClass("is-open");
				jQuery(".js-panel__child").not(t).attr('aria-hidden', 'true');
				e.toggleClass("is-active");
				e.attr('aria-expanded', 'true');
				t.toggleClass("is-open");
				t.attr('aria-hidden', state);
		
		return false
 	 });
	}
	
	if (Modernizr.mq('(max-width: 47.9375em)')) {
		//SO Strip all stuff out of navigation panels as it is controlled by the off canvas menu. 
		 jQuery('.js-panel__link').removeClass('bound');
		jQuery('#navigation .panel').removeClass('js-panel');	
		jQuery('#navigation .panel > a, #navigation .panel > span').removeClass('js-panel__link');	
		jQuery('#navigation .panel .menu').removeClass('js-panel__child');
		
		//remove ARIA 
		jQuery('#navigation .panel > a, #navigation .panel > span').removeAttr('aria-expanded');
		jQuery('#navigation .panel > a, #navigation .panel > span').removeAttr('aria-haspopup');
		jQuery('#navigation .panel .menu').removeAttr( 'aria-hidden');
		
		//turn them back into spans
		// New type of the tag
	var replacementTag = 'span';

	// Replace all a tags with the type of replacementTag
	$('#navigation .panel > button').each(function() {
    var outer = this.outerHTML;

    // Replace opening tag
    var regex = new RegExp('<' + this.tagName, 'i');
    var newTag = outer.replace(regex, '<' + replacementTag);

    // Replace closing tag
    regex = new RegExp('</' + this.tagName, 'i');
    newTag = newTag.replace(regex, '</' + replacementTag);

    $(this).replaceWith(newTag);
	});
	//End replace function
		
	};
	// END FUCTION
	}
	
	// END ACCESSIBLE PANEL DROP DOWN MENU
	
	
	/*// TAKEOVER OVERLAY - Cookie */
	
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
		//END TAKEOVER
		
		
		//INNIT FUNCTIONS
		OffCanvasMenu();
		PanelDropDown();
		showHideTakeover ();
		
		//RESIZE FUNCTIONS
		var widthHorz ='';
		//Test width for android resize bug 
		$window.load(function(){
   			widthHorz = $window.width();
		});
	
		$window.smartresize(function() {
		// fix reszie bug in android
		 if ( widthHorz != $window.width() ) {
			OffCanvasMenu();

		 }
		PanelDropDown();	
			
        });
	
    
        // end mustardo		
      } else {
        // NON HTML5 JS Browsers ----------------------------------------------- 
    	
		
		/*//OLD IE TAKEOVER PANEL*/
		if (jQuery('html').hasClass('ie8')) {
		jQuery('#takeover-panel').append('<button class="toggle-control toggle-control--close ie8-takeover-toggle ie8-takeover-toggle--close"><span class="toggle-control__text">dismiss</span></button>');
			//jQuery('.mustardo-takeover-toggle').hide();
			jQuery('.ie8-takeover-toggle--close:not(.bound)').addClass('bound').click(function() {
				//alert('I was clicked');
				jQuery(this).hide();
				jQuery(this).parent().hide();
	
			});
		}
      
          // end non-mustardo
      }
    
      // END DRUPAL THEME SCRIPTS
    }
  };
})(jQuery);