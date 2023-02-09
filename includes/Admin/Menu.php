<?php

namespace AsCode\PostManager\Admin;

/**
 * The menu handelar class
 */
class Menu {

    function __construct() {
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );    
    }

    public function admin_menu() {
        add_menu_page( 
            __( 'AsCode Post Manager', 'asc-post-manager '), 
            __( 'Post Manager', 'asc-post-manager' ), 
            'manage_options', 
            'asc-post-manager', 
            [ $this, 'plugin_page'] 
        );
    }

    public function plugin_page() {
        echo ASC_POST_MANAGER_ASSETS .'/admin/js/dashboard.js';
    }
}