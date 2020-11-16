# WordPress Plugin

[Josh](https://joshpress.net)'s opinionated boilerplate and template for WordPress plugin with PSR-4 autoloader, TypeScript, Docker, Github actions, and other fun stuff.

![JavaScripts](https://github.com/Shelob9/wordpress-plugin/workflows/JavaScripts/badge.svg)
![PHP Unit Tests](https://github.com/Shelob9/wordpress-plugin/workflows/PHP%20Unit%20Tests/badge.svg)
![WordPress Tests](https://github.com/Shelob9/wordpress-plugin/workflows/WordPress%20Tests/badge.svg)

- [PHP](./docs/php.md)
- [JavaScript](./docs/javascript)
- [Local Development](#local-development)
- [CI/CD](#cicd)



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