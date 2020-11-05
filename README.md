# WordPress Plugin

Boilerplate and template for WordPress plugin.


- https://github.com/wp-cli/scaffold-command/blob/f9bad3dd7224d5684d950d31c486df70905e386f/templates/plugin-github.mustache

## PHP

- Install for development
    - `composer install`
- Run unit tests
    - `composer test`
- Run WordPress Integration Tests
    - `wp-env run phpunit phpunit --config=phpunit-integration.xml`
    - Requires [@wordpress/env](https://developer.wordpress.org/block-editor/packages/packages-env/)