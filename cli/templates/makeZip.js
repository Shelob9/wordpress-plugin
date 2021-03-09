var fs = require('fs');
var archiver = require('archiver');

var output = fs.createWriteStream('PLUGIN_NAME.zip');
var archive = archiver('zip');

console.log( 'Zipping!')
output.on('close', function () {
    console.log('Zipped!');
    console.log(archive.pointer() + ' total bytes');
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

archive.append(fs.createReadStream(
    __dirname + '/time-block.php'
), { name: 'time-block.php' });

archive.directory('build', '/build');

archive.finalize();