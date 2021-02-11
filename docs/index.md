# WordPress Plugin

This is my -- [Josh Pollock](https://joshpress.net) -- opinionated boilerplate and template for WordPress plugin with PSR-4 autoloader, TypeScript, Docker, Github actions, and other fun stuff.

## Creating A Plugin

This plugin is a template. You can create a new Github project from this repo using the "Use This Template" button, or by downloading the plugin from Github. 

After making your own version, I recommend you follow these steps, **before** running `composer install`:

1. Choose a slug, and root namespace for your plugin.
1. Change main plugin file's name from `wordpress-plugin.php` to match your plugin slug.
1. Find and replace, with case sensitivity, "wordpress-plugin" with your plugin's slug in all files.
    - Text domain
    - Plugin name in package.json and composer.json
    - `tests/bootstrap.php` includes main plugin file.
1. In composer.json change `Josh\\WordPressPlugin\\` in both [autoloader](https://getcomposer.org/doc/01-basic-usage.md#autoloading) to match your new root namespace.
1. Find and replace `WordPressPlugin` in php files with your root namespace.
1. Fine and replace `shelob9.gihub.io` with your Github pages site URL.
1. Enable [Github pages](https://pages.github.com/) for your repo.
    - Now you have a documentation site!

### Suggestions

1. Customize wp-env configuration.
    - Change port
    - Add additional plugins or themes.
    - See: [Local dev documentation](https://shelob9.github.io/wordpress-plugin/local-dev)
    
## Plugin Quickstart

- Git clone:
    - `git clone https://github.com/Shelob9/wordpress-plugin`
- Composer install
    - `composer install`
- Ensure unit tests pass
    - `composer test`
- Start WordPress
    - `npx wp-env start`
    
## Requirements

- Git
- [Composer](https://getcomposer.org/download/)
- [Docker](https://docs.docker.com/get-docker/)
    - OPTIONAL. Used for local dev and running integration tests

## Using The Plugin
- [PHP](https://shelob9.github.io/wordpress-plugin/php)
- [JavaScript](https://shelob9.github.io/wordpress-plugin/javascript)
- [Local Development](https://shelob9.github.io/wordpress-plugin/local-dev)
- [CI/CD](https://shelob9.github.io/wordpress-plugin/cicd)