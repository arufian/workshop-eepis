var fs = require('fs');

// step 4
var colors = require('colors');

var parseFile = require('./parsefile');
var jsonFile = parseFile('timnasjepang.json');
console.log("Penjaga Gawang Timnas jepang adalah %s", colors.green(jsonFile.GK));
console.log("Pemain Bertahan Timnas jepang : %s", colors.yellow(jsonFile.DF));
console.log("Pemain Tengah Timnas jepang : %s", colors.blue(jsonFile.MF));
console.log("Pemain Depan Timnas jepang : %s", colors.red(jsonFile.FW));
