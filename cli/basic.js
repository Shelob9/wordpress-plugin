#!/usr/bin/env node
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const shell = require('shelljs');
const mdSedFactory = require( './lib/mdSedFactory');
const phpSedFactory = require( './lib/phpSedFactory');

readline.question(`What is your plugin's slug? Used for translation domain, main file name, etc.`, slug => {
    slug = slug.replace(/\W/g, '').toLowerCase();
    readline.question(`Plugin name?`, pluginName => {
        readline.question(`Github username?`, githubUserName => {
            const mdSed = mdSedFactory({pluginName,slug,githubUserName});
            let phpSed = phpSedFactory({slug})
            shell.cp( '-R', 'pages', slug );
            shell.cp( '_README_BASIC.md', `${slug}/README.md`);
            mdSed( `${slug}/README.md` );
            shell.cp( 'wordpress-plugin.php', `${slug}/${slug}.php`);
            phpSed( `${slug}/${slug}.php` );
            shell.sed('-i', "PLUGIN_NAME", pluginName,  `${slug}/${slug}.php`);
            readline.close()
        });
    });
});