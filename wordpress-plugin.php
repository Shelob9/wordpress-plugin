<?php

/**
 * Plugin Name: PLUGIN_NAME
 */

/**
 * Include the autoloader
 */
add_action( 'plugins_loaded', function (){
    if( file_exists(__DIR__ . '/vendor/autoload.php')){
        include __DIR__ . '/vendor/autoload.php';
    }
});

/**
 * Initialize plugin
 */
add_action('init', 'wordpress_plugin', 1);

/**
 * Static accessor for plugin container
 *
 * @return array
 */
function wordpress_plugin()
{
    static $container;
    if (!$container) {
        $container = [];
        /**
         * Action runs when PLUGIN_NAME is initialized
         *
         * @param array $container Plugin container
         */
        do_action('wordpress_plugin', $container);
    }
    return $container;
}

/** Init admin UI after plugin loads */
add_action( 'wordpress_plugin', function (){
    //Register assets
    add_action('init', function () {
        wordpress_plugin_register_asset('wordpress-plugin-admin');
    });

    //Enqueue admin assets on admin page only
    add_action('admin_enqueue_scripts', function ($hook) {
        if ('toplevel_page_custompage' != $hook) {
            return;
        }
        wp_enqueue_script('wordpress-plugin-admin');
    });

    //Register menu page
    add_action('admin_menu', function () {
        add_menu_page(
            __('PLUGIN_NAME', 'wordpress-plugin'),
            'custom menu',
            'manage_options',
            'custompage',
            function () {
                wordpress_plugin_enqueue_asset('wordpress-plugin-admin');
                esc_html_e('Admin Page Test', 'wordpress-plugin');
                echo '<div id="wordpress-plugin-admin"></div>';
            }
        );
    });
});



/**
 * Register an asset
 **
 * @since 0.0.1
 * @param string $handle
 */
function wordpress_plugin_register_asset($handle)
{
    $_handle = str_replace('wordpress-plugin-', '', $handle );
    if (file_exists(__DIR__ . "/build/$_handle.asset.php")) {
        // automatically load dependencies and version
        $assets = include __DIR__ . "/build/$_handle.asset.php";
        wp_register_script(
            $handle,
            plugins_url("/build/$_handle.js", __FILE__),
            $assets['dependencies'],
            $assets['version']
        );
        wp_enqueue_script($handle);
    }
}


