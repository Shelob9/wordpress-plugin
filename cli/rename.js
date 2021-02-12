#!/usr/bin/env node
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const shell = require('shelljs');

/**
 * Rewrite plugin name, slug, function prefix and namespace in php files
 *
 * @param slug
 * @param rootNamespace
 * @param pluginName
 */
function changeNameInPhpFiles({slug,rootNamespace,pluginName}){
    let slugWithUnderscore = slug.replace('-', '_' );
    let originalNamespace = 'WordPressPlugin';
    function sed(file) {
        shell.sed('-i',  originalNamespace, rootNamespace, file);
        shell.sed( '-i', "wordpress-plugin",  slug ,file);
        shell.sed( '-i', "wordpress_plugin",  slugWithUnderscore ,file);
    }
    shell.mv( 'wordpress-plugin.php', `${slug}.php` );
    sed(`${slug}.php`);
    shell.sed('-i', 'PLUGIN_NAME', pluginName, `${slug}.php`);
    shell.sed('-i', originalNamespace, rootNamespace, 'composer.json');
    shell.ls('**/*.php').forEach(sed);
}

function readme({pluginName,slug,githubUserName}){
    shell.mv( '_README.md', 'README.md' );
    shell.sed('-i', 'PLUGIN_NAME', pluginName, `README.md`);
    shell.sed('-i', 'wordpress-plugin', slug, `README.md`);
    shell.sed('-i', 'PLUGIN_NAME', githubUserName, `README.md`);

}


readline.question(`What is your plugin's slug? Used for translation domain, main file name, etc.`, slug => {
    slug = slug.replace(/\W/g, '');
    readline.question(`Root Namespace`, rootNamespace => {
        readline.question(`Plugin name?`, pluginName => {
            readline.question(`Github username?`, githubUserName => {
                changeNameInPhpFiles({slug,rootNamespace,pluginName});
                readme({pluginName,slug,githubUserName});
                readline.close()
            });
        });
    });
});