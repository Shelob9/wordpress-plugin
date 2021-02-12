# PLUGIN_NAME

## Development Quick Start

- Git clone:
    - `git clone https://github.com/Shelob9/wordpress-plugin`
- Install.
    - `yarn`
- Build JS/CSS
    - `yarn build`
- Start JS/CSS for development 
    - `yarn start`
- Test changed files
    - `yarn test --watch`
- Test all files once
    - `yarn test`
    - `yarn test --ci`

## Entry Points

This template has one "entry point" with the handle of  "admin". It is used for a custom admin page. If you want to add additional entry points, for example if you want to add blocks or to have separate JavaScript/ CSS for the front-end, follow these steps:

## To Add A New Entry Point

- Choose a one word handle for the entry point
- Create a directory named for the handle.
- Add an index.js file to that directory
- Add the handle to the array `entryPoints` in webpack.config.js
- Run `yarn build`
- Check that `build/$handle.js` and `build/$handle.asset.php` where created.

## Contributing

Please feel free to [open a pull request](https://github.com/Shelob9/wordpress-plugin/pulls) if you would like to contribute.