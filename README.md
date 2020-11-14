# WordPress Plugin

[Josh](https://joshpress.net)'s opinionated boilerplate and template for WordPress plugin with PSR-4 autoloader, TypeScript, Docker, Github actions, and other fun stuff.

![JavaScripts](https://github.com/Shelob9/wordpress-plugin/workflows/JavaScripts/badge.svg)
![PHP Unit Tests](https://github.com/Shelob9/wordpress-plugin/workflows/PHP%20Unit%20Tests/badge.svg)
![WordPress Tests](https://github.com/Shelob9/wordpress-plugin/workflows/WordPress%20Tests/badge.svg)

- [PHP](#php)
- [JavaScript](#javascript)
  - Write and test React components with TypeScript, preview with [Storybook](https://storybook.js.org/) and compile to JavaScript. Uses [tsdx](https://github.com/formium/tsdx).
  - Create WordPress-safe bundles with [@wordpress/scripts](https://developer.wordpress.org/block-editor/packages/packages-scripts/)
  - Testing with:
    - [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
    - [@axe-core/react](https://www.npmjs.com/package/@axe-core/react)
- [Local Development](#local-development)
  - Requires Docker.
- [CI/CD](#cicd)

## PHP

PHP code goes in the directory "php" or "tests". The psr-4 standard is used for file and class naming. Composer is used for an autoloader and for dev dependencies.

The php tests are separated into two genres: unit -- located in `/tests/Unit` -- and integration -- located in `/tests/Integration`.

### Unit Tests

These tests do NOT run with WordPress and MySQL and are run with phpunit.

- Install for development
  - `composer install`
- Run unit tests
  - `composer test`
  
The following unit testing tools are installed:
- [Yoast/yoast-test-helper](https://github.com/Yoast/yoast-test-helper) - Provides assertions from nwer versions of phpunit so we can use a WordPress-compatible version.
- [Mockery](http://docs.mockery.io/en/latest) - For mocking classes.
- [Brain Monkey](https://giuseppe-mazzapica.gitbook.io/brain-monkey/) - For monkey-patching functions.
  
### Integration Tests

- These tests are dependent on WordPress and MySQL and  are run with phpunit.

- Run WordPress Integration Tests
  - If supplying your own test setup and database:
    - `composer test:wordpress`
  - Using supplied docker-compose:
    - `docker-compose run phpunit`
        - This puts you inside phpunit container with database setup.
    - `composer install` # install for development inside of the container.
    - `composer:test:wordpress`
  - Using [futureys/phpunit-wordpress-plugin](https://hub.docker.com/r/futureys/phpunit-wordpress-plugin)


## JavaScript

This plugin uses Yarn workspaces to manage two workspaces. One for components and one for using those components to make WordPress pages.

You need to run all yarn -- please do not use npm -- commands from the root of the repo.

### Component Library Workspace

> [Source](./components)

This workspace is for components. This library is written in TypeScript. It is compiled to JavaScript for use in the WordPress pages.

Most code lives in components. The page entry point will be able to consume these components. Most React code should go here. The pages endpoints should connect those components to WordPress.

### Components CLI

All commands for the components library can be run with `yarn c <command>`. For example:

- `yarn c start`
- `yarn c test --watch`
- `yarn c build`

### Components Storybook

Storybook for previewing and documenting components.

- `yarn storybook`
  - [http://localhost:6006](http://localhost:6006)
  - [http://192.168.1.154:6006/](http://192.168.1.154:6006/)

## WordPress Pages Workspace

WordPress pages that consume the components. These entry points are written in JavaScript/ JSX and are compiled with @wordpress/scripts in a way that is safe for use in wp-admin and front-end and would not work outside of WordPress.

These could be used for blocks or we might need to add a blocks workspace when blocks are a concern.

### Pages CLI

All commands for the components library can be run with `yarn p <command>`. For example:

- `yarn p start`
- `yarn p test --watch`
- `yarn p build`

## Local Development
> Requires [@wordpress/env](https://developer.wordpress.org/block-editor/packages/packages-env/)

If you would like to use the local development environment, you may start it by running `npx wp-env start` and stop it with `npx wp-env stop`.

- [http://localhost:4242]([http://localhost:4242)

## CI/CD

### CI
There are three Github action that run tests:

- php-unit.yml
    - PHP unit tests.
- wordpress.yml
   - PHP integration tests
   - Probably acceptance tests soon.
- test-js.yml
    - [Java/Type]Script tests.

### CD

## Contributing

Please feel free to [open a pull request](https://github.com/Shelob9/wordpress-plugin/pulls) if you would like to contribute.