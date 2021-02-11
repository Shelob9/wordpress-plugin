<?php

/**
 * Plugin Name: WordPress plugin
 */
add_action( 'plugins_loaded', function (){
    include __DIR__ . '/vendor/autoload.php';
});

add_action('init', 'wordpress_plugin');
add_action('init', function () {
    wordpress_plugin_register_asset('wordpress-plugin-admin');
});

add_action('admin_enqueue_scripts', function ($hook) {
    if ('toplevel_page_custompage' != $hook) {
        return;
    }
    wordpress_plugin_enqueue_asset('wordpress-plugin-admin');
});

function wordpress_plugin()
{
    static $wordpressPlugin;
    if (!$wordpressPlugin) {
        $wordpressPlugin = [];
        do_action('wordpress_plugin', $wordpressPlugin);
    }
    return $wordpressPlugin;
}


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

/**
 * Register an asset
 *
 * @param $handle
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
 * @param $handle
 */
function wordpress_plugin_enqueue_asset($handle)
{
    wp_enqueue_script($handle);
}
