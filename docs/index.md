# WordPress Plugin

This is my -- [Josh Pollock](https://joshpress.net) -- opinionated boilerplate and template for WordPress plugin with PSR-4 autoloader, TypeScript, Docker, Github actions, and other fun stuff.

## Creating A Plugin

This plugin is a template. You can create a new Github project from this repo using the "Use This Template" button, or by downloading the plugin from Github.

There is a CLI for renaming things, or you can rename things manually. 

Notes:
- When you first install with Yarn, many packages will prompted for what version to install, choose the latest.

### Rename With ClI

You can create two different versions of the plugin, using the CLI

#### Everything

This option includes everything: local dev, Typescript, composer autoloader, PHP tests, JavaScript tests, etc.

- Create [a new git repo based on this template](https://github.com/Shelob9/wordpress-plugin/generate).
- Clone that repo locally
- Install
    - `yarn`
- Rename plugin and update translation domain, fucnction prefix, namespace, etc.
    - `yarn rename`

#### Basic 

This version has less things, it does not use Yarn workspace or Typescript or composer. It generates one PHP file that can load JS/CSS and a WordPress-friendly webpack that can have any number of entry points.

- Copy or clone this repo locally.
    - `git clone git@github.com:Shelob9/wordpress-plugin.git`
- Install
    - `yarn`
- Rename plugin and update translation domain, function's prefix, namespace, etc.
    - `yarn rename:basic`
- This will create a directory named for your plugin slug.
    - Copy that somewhere else.
    - Delete everything else.
- Switch to directory with the new plugin in it
- Install
    - `yarn`
- Build
    - `yarn build`

### Manual Renaming

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
- Yarn install.
    - `yarn`
    - [Use Yarn 1.x, not npm](https://dev.to/shelob9/why-i-use-yarn-not-npm-dkk)
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