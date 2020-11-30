# PHP Development With WordPress Plugin


PHP code goes in the directory "php" or "tests". The [psr-4 standard](https://www.php-fig.org/psr/psr-4/) is used for file and class naming. Composer is used for an autoloader and for dev dependencies.

The php tests are separated into two genres: unit -- located in `/tests/Unit` -- and integration -- located in `/tests/Integration`.

### Unit Tests

> [Unit Testing Classes That Call Functions From WordPress core](https://dev.to/shelob9/unit-testing-classes-that-call-functions-form-wordpress-core-3h5p)

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