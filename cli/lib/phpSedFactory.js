const shell = require('shelljs');

module.exports = function ({slug,rootNamespace}) {
    let originalNamespace = 'WordPressPlugin';
    let slugWithUnderscore = slug.replace('-', '_');
    return function (file) {
        if (rootNamespace) {
            shell.sed('-i', originalNamespace, rootNamespace, file);
        }
        shell.sed('-i', "wordpress-plugin", slug, file);
        shell.sed('-i', "wordpress_plugin", slugWithUnderscore, file);
    }
}
