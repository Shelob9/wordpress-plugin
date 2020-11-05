# WordPress Plugin

Boilerplate and template for WordPress plugin.


## PHP

The php tests are separated into two genres:

- Unit
    - These tests do NOT run with WordPress and MySQL.
    - They are run with phpunit.
- Integration
    - These tests are dependent on WordPress and MySQL.
    - They are run with phpunit.

### Running Test

- Install for development
    - `composer install`
- Run unit tests
    - `composer test`
    - [Using Yoast/yoast-test-helper](https://github.com/Yoast/yoast-test-helper)
- Run WordPress Integration Tests
    - `wp-env run phpunit phpunit --config=phpunit-integration.xml`
    - Requires [@wordpress/env](https://developer.wordpress.org/block-editor/packages/packages-env/)