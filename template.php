<?php

/**
 * Implements hook_form_alter().
 * Changes to search.
 */
// change the name of your form alter
function weddify_name_form_alter(&$form, &$form_state, $form_id) {
	
		// search--navigation 
	if ($form_id == 'search_api_page_search_form_site_search') {
	$form['#prefix'] = '<div id="navigation-search" class="search search--navigation u-clearfix"><div class="search__wrapper wrapper"><h3 class="search__title">Site Search</h3>';
  	$form['#suffix'] = '</div></div>';
    //unset($form['search_api_page_search_form_site_search']['#title_display']);
    $form['#attributes'] = array('class' => array('search__search-form', 'search-form'), 'role' => array('search'));
    $form['keys_1']['#title_display'] = 'before';
    $form['keys_1']['#title_class'] = 'search-form__label';
    $form['keys_1']['#title'] = t('Search');
    $form['keys_1']['#attributes']['size'] = '12';
	
	// SH 25-01-16 remove placeholder in shelterbox as lable is being shown for search. 
    $form['keys_1']['#attributes']['placeholder'] = 'search';
    //$form['keys_1']['#prefix'] = '<fieldset class="search-form__fieldset"><legend class="visually-hidden"><h3 class="search-form__legend ">Site Search</h3></legend>';
    //$form['keys_1']['#suffix'] = '</fieldset>';  
  }
  
  /*if ($form_id == 'search-api-page-search-form') {
    unset($form['search-api-page-search-form']['#title_display']);
    //unset($form['search_block_form']['#attributes']['placeholder']);
    $form['#attributes'] = array('class' => array('search__search-form', 'search-form'), 'role' => array('search'));
    $form['search-api-page-search-form']['#attributes']['size'] = '12';
    $form['search-api-page-search-form']['#prefix'] = '<fieldset class="search-form__fieldset"><legend class="visually-hidden"><h3 class="search-form__legend ">Site Search</h3></legend>';
    $form['search-api-page-search-form']['#suffix'] = '</fieldset>';
  }*/
  
  // Search--page
  if ($form_id == 'search_api_page_search_form') {
    unset($form['search_form']['#title_display']);
	$form['#prefix'] = '<div id="main-search" class="search search--page u-clearfix"><div class="search__wrapper wrapper">';
  	$form['#suffix'] = '</div></div>';
	 $form['#attributes'] = array('class' => array('search__search-form', 'search-form'), 'role' => array('search'));
	/* not working? 
	//$form['keys']['#prefix'] = '<fieldset class="search-form__fieldset"><legend class="u-visually-hidden"><h3 class="search-form__legend">Site Search</h3></legend>';
    //$form['keys']['#suffix'] = '</fieldset>';  
   	//$form['#attributes'] = array('class' => array('search__search-form', 'search-form'), 'role' => array('search'));
    //$form['keys_1']['#title_display'] = 'invisible';
    //$form['keys']['#title_class'] = 'search-form__label';
    //$form['keys']['#title'] = t('Search this site');
    //$form['keys']['#attributes']['size'] = '12';*/
	$form['keys_1']['#attributes']['placeholder'] = 'Search';
  }
  
  //mailchimp from 
    if ($form_id == 'mailchimp_signup_subscribe_block_newsletter_form') {
		//dpm($form);
		//$form['description'] = 'A short moving signup statement';
		$form['description']['#prefix'] = '<legend class="mailchimp__description"><span>';
  		$form['description']['#suffix'] = '</span></legend>';
		$form['mergevars']['#prefix'] = '<fieldset class="mailchimp__fieldset">';
		$form['mergevars']['#suffix'] = '</fieldset>';
		$form['mergevars']['EMAIL']['#attributes']['placeholder'] = 'Your email';
		
	}
}



