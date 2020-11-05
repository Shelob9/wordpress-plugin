<?php

/**
 * Plugin Name: WordPress plugin
 */
add_action('init', 'wordPressPlugin');

function wordPressPlugin()
{
    static $wordpressPlugin;
    if (!$wordpressPlugin) {
        $wordpressPlugin = [];
        do_action('wordPressPlugin', $wordpressPlugin);
    }
    return $wordpressPlugin;
}
