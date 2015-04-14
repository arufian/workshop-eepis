var helloWorld = 'Hello World!';
// Step 1
// console.log(helloWorld);


// Step 2
var fs = require('fs');

// var parseFile = function(filepath) {
// 	if(!fs.existsSync(filepath)){
// 		console.error(filepath+' is not exist');
// 		return false;
// 	}
// 	return JSON.parse(fs.readFileSync(filepath, 'utf8'));
// }

// var jsonFile = parseFile('timnasjepang.json');
// console.log("Penjaga Gawang Timnas jepang adalah %s", jsonFile.GK);
// console.log("Pemain Bertahan Timnas jepang : %s", jsonFile.DF);
// console.log("Pemain Tengah Timnas jepang : %s", jsonFile.MF);
// console.log("Pemain Depan Timnas jepang : %s", jsonFile.FW);

// step 3

var parseFile = require('./parsefile');
var jsonFile = parseFile('timnasjepang.json');
console.log("Penjaga Gawang Timnas jepang adalah %s", jsonFile.GK);
console.log("Pemain Bertahan Timnas jepang : %s", jsonFile.DF);
console.log("Pemain Tengah Timnas jepang : %s", jsonFile.MF);
console.log("Pemain Depan Timnas jepang : %s", jsonFile.FW);
