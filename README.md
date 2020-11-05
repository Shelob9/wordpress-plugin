# WordPress Plugin

Boilerplate and template for WordPress plugin. Josh-style -- PSR-4, TypeScript, Docker, Github actions for test automation.

- [PHP](#php)
- [JavaScript]

## PHP

PHP code goes in the directory "php" or "tests". The psr-4 standard is used for file and class naming. Composer is used for an autoloader and for dev dependencies.

## Running PHP Tests

The php tests are separated into two genres:

- Unit
  - These tests do NOT run with WordPress and MySQL.
  - They are run with phpunit.
- Integration
  - These tests are dependent on WordPress and MySQL.
  - They are run with phpunit.

- Install for development
  - `composer install`
- Run unit tests
  - `composer test`
  - [Using Yoast/yoast-test-helper](https://github.com/Yoast/yoast-test-helper)
- Run WordPress Integration Tests
  - `wp-env run phpunit phpunit --config=phpunit-integration.xml`
  - Requires [@wordpress/env](https://developer.wordpress.org/block-editor/packages/packages-env/)

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

If you would like to use the local development environment, you may start it by running `npx wp-env start` and stop it with `npx wp-env stop`.