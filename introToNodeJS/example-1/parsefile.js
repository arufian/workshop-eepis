var fs = require('fs');

var parseFile = function(filepath) {
	if(!fs.existsSync(filepath)){
		console.error(filepath+' is not exist');
		return false;
	}
	return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}

module.exports = parseFile;