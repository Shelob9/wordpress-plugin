# WordPress Plugin

[Josh](https://joshpress.net)'s opinionated boilerplate and template for WordPress plugin with PSR-4 autoloader, TypeScript, Docker, Github actions, and other fun stuff.

![JavaScripts](https://github.com/Shelob9/wordpress-plugin/workflows/JavaScripts/badge.svg)
![PHP Unit Tests](https://github.com/Shelob9/wordpress-plugin/workflows/PHP%20Unit%20Tests/badge.svg)
![WordPress Tests](https://github.com/Shelob9/wordpress-plugin/workflows/WordPress%20Tests/badge.svg)

## Creating Your Own

The steps to generate your own plugin are documented in [Getting Started](https://shelob9.github.io/wordpress-plugin/).


### All The Things

This option includes everything: local dev, Typescript, composer autoloader, PHP tests, JavaScript tests, etc.

- Create [a new git repo based on this template](https://github.com/Shelob9/wordpress-plugin/generate).
- Clone that repo locally
- Install
    - `yarn`
- Rename plugin and update translation domain, fucnction prefix, namespace, etc.
    - `yarn rename`

### Basic 

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

## Documentation

- [Getting Started](https://shelob9.github.io/wordpress-plugin/)
- [PHP](https://shelob9.github.io/wordpress-plugin/php)
- [JavaScript](https://shelob9.github.io/wordpress-plugin/javascript)
- [Local Development](https://shelob9.github.io/wordpress-plugin/local-dev)
- [CI/CD](https://shelob9.github.io/wordpress-plugin/cicd)


## Contributing

Please feel free to [open a pull request](https://github.com/Shelob9/wordpress-plugin/pulls) if you would like to contribute.