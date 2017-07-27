<?php
/**
 * weddify theme settings.
 */

/**
 * Implements hook_filter_info().
 */
function weddify_form_system_theme_settings_alter(&$form, $form_state) {
  $css_modules = array(
      'theme_global.css',
	  'theme_wrappers.css', 
      'theme_role-banner.css',
      'theme_role-navigation.css',
      'theme_role-footer.css',
      'theme_role-search.css',
      'theme_media-object.css',
      'theme_grids.css',
      'theme_tile.css',	
	  'theme_sidebar.css',
      'theme_drupal.css',
      'theme_logo.css',
	  'theme_header.css',
      'theme_headings.css',
      'theme_buttons.css',
      'theme_breadcrumbs.css',
	  'theme_small-print.css',
      'theme_d-sections.css',
      'theme_style-banner.css',
      'theme_style-text.css',
      'theme_style-media.css',
      'theme_style-feed.css',
      'theme_infographic.css',	
	  'theme_off-canvas-mobile-menu.css', 
	  'theme_panel-drop-down-menu.css', 
	  'theme_banner-video.css', 
	  'theme_js-form-validation.css',
	  'theme_takeover.css',
      'theme_plugins.css', 
	  //'theme_neo.css', // Single stylesheet build
      'theme_custom.css',
      'theme_hacks.css',	  
  );
  
  $form['weddify_mode'] = array(
    '#type'          => 'radios',
    '#title'         => t('CSS mode'),
    '#options'       => array(
       'none'        => t('No theme CSS at all'),
       'outline'     => t('Outline'),
       'layout'      => t('Layout'),
       'full'        => t('Full styling'),
    ),
    '#default_value' => theme_get_setting('weddify_mode'),
    '#description'   => t("Select the mode of operation for the CSS."),
  );
  
  $form['weddify_css'] = array(
    '#type'          => 'checkboxes',
    '#title'         => t('CSS modules'),
    '#options'       => drupal_map_assoc($css_modules),
    '#default_value' => theme_get_setting('weddify_css'),
  );
}
 