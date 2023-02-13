<?php

namespace AsCode\PostManager\Admin;

class Enqueue {

    public function __construct() {
        add_action( 'admin_enqueue_scripts', [$this, 'admin_script'], 10, 1 );

    }

    /**
     * Load script
     *
     * @param $page
     * @return void
     */
    public function admin_script( $page ) {
        if( $page === 'toplevel_page_asc-post-manager' ) {
            wp_enqueue_script( 'asc_post_manager_dashboard', ASC_POST_MANAGER_ASSETS .'/admin/js/dashboard.js' );
        }
    }
}