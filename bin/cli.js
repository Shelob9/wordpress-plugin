#!/usr/bin/env node
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const shell = require('shelljs');



function changeNameInPhpFiles({slug,rootNamespace}){
    function sed(file) {
        shell.sed('-i', 'Josh\\WordPressPlugin', `${rootNamespace}\\`, file);
        shell.sed( '-i', "'wordpress-plugin'",  slug );
    }
    shell.mv( 'wordpress-plugin.php', `${slug}.php` );
    shell.sed( '-i', "'wordpress-plugin'",  slug );
    shell.cd( 'php');
    shell.ls('*.php').forEach(sed);

}
 readline.question(`What is your plugin's slug? Used for translation domain, main file name, etc.`, slug => {
    slug = slug.replace(/\W/g, '');
    readline.question(`Do you want all things -- TypeScript + Composer? Or simple mode, JSX compilation and a PHP file? Y/n`, allTheThingsMode => {
        allTheThingsMode = allTheThingsMode === 'Y' || allTheThingsMode === 'y' || allTheThingsMode === 'Yes' || allTheThingsMode === 'yes';
        if( allTheThingsMode ){
            readline.question(`Root Namespace`, rootNamespace => {
                changeNameInPhpFiles({slug,rootNamespace})
                readline.close()
            });

        }else{
            readline.close()

        }

    });

})