#!/usr/bin/env node
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const shell = require('shelljs');
const mdSedFactory = require( './lib/mdSedFactory');
const phpSedFactory = require( './lib/phpSedFactory');
/**
 * Rewrite plugin name, slug, function prefix and namespace in php files
 */
function changeNameInPhpFiles({slug,rootNamespace,pluginName,}){
    let sed = phpSedFactory({slug,rootNamespace})
    shell.mv( 'wordpress-plugin.php', `${slug}.php` );
    sed(`${slug}.php`);
    shell.sed('-i', 'PLUGIN_NAME', pluginName, `${slug}.php`);
    shell.ls('**/*.php').forEach(sed);
}

function changeNameInMdFiles({pluginName,slug,githubUserName}){
    const mdSed = mdSedFactory({pluginName,slug,githubUserName})
    shell.mv( 'cli/templates/_README.md', 'README.md' );
    mdSed('README.md');
    shell.rm( 'docs/index.md');
    shell.ls('docs/*.md').forEach(mdSed);
    shell.cp( 'README.md', 'docs/index.md');
}


readline.question(`What is your plugin's slug? Used for translation domain, main file name, etc.`, slug => {
    slug = slug.replace(/\W/g, '').toLowerCase();
    readline.question(`Root Namespace`, rootNamespace => {
        readline.question(`Plugin name?`, pluginName => {
            readline.question(`Github username?`, githubUserName => {
                let originalNamespace = 'WordPressPlugin';
                changeNameInPhpFiles({slug,rootNamespace,pluginName,originalNamespace});
                changeNameInMdFiles({pluginName,slug,githubUserName});
                //Replace slug in pages/admin entry point
                shell.sed('-i', "wordpress-plugin", slug,  `pages/admin/index.js`);
                //Replace name in package.json
                shell.sed('-i', "@shelob9/wordpress-plugin", `@${githubUserName}/${slug}`,  'package.json');
                //replace namespace in composer.json
                shell.sed('-i', originalNamespace, rootNamespace, 'composer.json');
                readline.close()
            });
        });
    });
});
