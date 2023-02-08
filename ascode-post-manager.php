<?php

/*
 * Plugin Name:       AsCode Post Manager
 * Plugin URI:        
 * Description:       A plugin for update posts easily from deshboard
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.4
 * Author:            Osman Haider Adnan
 * Author URI:        
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        
 * Text Domain:       asc-post-manager
 * Domain Path:       /languages
 */

 if( ! defined( 'ABSPATH' ) ) {
    exit;
 }

 if( ! file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
    die( 'Please run `composer install` on main plugin directory' );
 }

 require_once __DIR__ . '/vendor/autoload.php';

 /**
  * Plugin main class
  */
 final class AsCode_Post_Manager {

    /**
     * Define plugin version
     * 
     * @var string
     */
    const version = 1.0;

    private function __construct(){
        $this->define_constants();

        register_activation_hook( __FILE__, [ $this, 'activate' ] );

        add_action( 'plugins_loaded', [ $this, 'init_plugin' ] );
    }

    /**
     * Singleton instance
     *
     * @return \AsCode_Post_Manager
     */
    public static function init(){
        static $instance = false;

        if( ! $instance ) {
            $instance = new self();
        }

        return $instance;
    }

    /**
     * The constant function
     *
     * @return void
     */
    function define_constants() {
        define( 'ASC_POST_MANAGER_VERSION', self::version );
        define( 'ASC_POST_MANAGER_FILE', __FILE__ );
        define( 'ASC_POST_MANAGER_PATH', __DIR__ );
        define( 'ASC_POST_MANAGER_URL', plugins_url( '', ASC_POST_MANAGER_FILE ) );
        define( 'ASC_POST_MANAGER_ASSETS', ASC_POST_MANAGER_URL . '/assets' );
    }

    /**
     * Do stuff upon plugin activation
     *
     * @return void
     */
    function activate() {
        $installed = get_option( 'ascode_installed_time' );

        if( ! $installed ) {
            update_option( 'ascode_installed_time', time() );
        }
    }

    /**
     * Initial plugin function
     *
     * @return void
     */
    public function init_plugin() {
        new AsCode\PostManager\Admin\Menu();
    }

 }

 /**
  * Initilized the main plugin
  *
  * @return \AsCode_Post_Manager
  */
 function ascode_post_manager(){
    return AsCode_Post_Manager::init();
 }

 //kick-off the plugin
 ascode_post_manager();