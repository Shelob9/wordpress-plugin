# PLUGIN_NAME

## Development Quick Start

- Git clone:
    - `git clone git@github.com:Shelob9/wordpress-plugin.git`
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

## Local Development

Feel free to supply your own local development environment of choice. [wp-env](https://developer.wordpress.org/block-editor/packages/packages-env/) will work without any configuration, if you have Docker installed:

```vue
npx wp-env start
```

- [http://localhost:8888/](http://localhost:8888/)

## Contributing

Please feel free to [open a pull request](https://github.com/Shelob9/wordpress-plugin/pulls) if you would like to contribute.