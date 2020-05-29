<?php
/**
 * Compatibility with LiteSpeed plugin: https://wordpress.org/plugins/sg-cachepress/
 */
class Brizy_Compatibilities_SgOptimizer {

	public function __construct() {

		if ( isset( $_GET['brizy-edit'] ) || isset( $_GET['brizy-edit-iframe'] )  || isset( $_GET['brizy_post'] ) ) {

			add_filter( 'option_siteground_optimizer_optimize_html', '__return_false' );
			add_filter( 'option_siteground_optimizer_optimize_javascript', '__return_false' );
			add_filter( 'option_siteground_optimizer_optimize_css', '__return_false' );
			add_filter( 'option_siteground_optimizer_optimize_javascript_async', '__return_false' );
			add_filter( 'option_siteground_optimizer_lazyload_images', '__return_false' );
			add_filter( 'option_siteground_optimizer_combine_css', '__return_false' );
		}
	}
}