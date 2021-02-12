<?php

/**
 * Plugin Name: WordPress plugin
 */

/**
 * Load the autoloader
 */
add_action( 'plugins_loaded', function (){
    include __DIR__ . '/vendor/autoload.php';
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
         * Action runs when plugin is initialized
         *
         * @param array $container Plugin container
         */
        do_action('wordpress_plugin', $container);
    }
    return $container;
}

/** Init admin UI after plugin loads */
add_action( 'wordpress_plugin', function (){
    add_action('init', function () {
        wordpress_plugin_register_asset('wordpress-plugin-admin');
    });

    add_action('admin_enqueue_scripts', function ($hook) {
        if ('toplevel_page_custompage' != $hook) {
            return;
        }
        wordpress_plugin_enqueue_asset('wordpress-plugin-admin');
    });

    add_action('admin_menu', function () {
        add_menu_page(
            __('Custom Menu Title', 'wordpress-plugin'),
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
 *
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
    } else {
        var_dump(__DIR__ . "/build/$_handle.asset.php");
    }
}

/**
 * Enqueue an asset
 *
 * @since 0.0.1
 * @param string $handle
 */
function wordpress_plugin_enqueue_asset($handle)
{
    wp_enqueue_script($handle);
}
