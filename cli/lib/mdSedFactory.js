const shell = require('shelljs');

module.exports = function ({pluginName,slug,githubUserName}) {
    return function(fileName) {
        shell.sed('-i', 'PLUGIN_NAME', pluginName,fileName);
        shell.sed('-i', 'wordpress-plugin', slug, fileName);
        shell.sed('-i', 'Shelob9/wordpress-plugin', `${githubUserName}/${slug}`, fileName);
    }
}