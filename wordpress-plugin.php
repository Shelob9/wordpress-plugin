<?php

/**
 * Plugin Name: WordPress plugin
 */
add_action( 'plugins_loaded', function (){
    include __DIR__ . '/vendor/autoload.php';
});

add_action('init', 'wordPressPlugin');
add_action('init', function () {
    registerAsset('admin');
});

add_action('admin_enqueue_scripts', function ($hook) {
    if ('toplevel_page_custompage' != $hook) {
        return;
    }
    enqueueAsset('admin');
});

function wordPressPlugin()
{
    static $wordpressPlugin;
    if (!$wordpressPlugin) {
        $wordpressPlugin = [];
        do_action('wordPressPlugin', $wordpressPlugin);
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
            enqueueAsset('admin');
            esc_html_e('Admin Page Test', 'wordpress-plugin');
            echo '<div id="wordpress-plugin-admin"></div>';
        }
    );
});


function registerAsset($handle)
{
    if (file_exists(__DIR__ . "/build/$handle.asset.php")) {
        // automatically load dependencies and version
        $assets = include __DIR__ . "/build/$handle.asset.php";
        $_handle =  'wordpress-plugin-' . $handle;
        wp_register_script(
            $_handle,
            plugins_url("/build/$handle.js", __FILE__),
            $assets['dependencies'],
            $assets['version']
        );
        wp_enqueue_script($_handle);
    } else {
        var_dump(__DIR__ . "/build/$handle.asset.php");
    }
}

function enqueueAsset($handle)
{
    $handle =  'wordpress-plugin-' . $handle;
    wp_enqueue_script($handle);
}
