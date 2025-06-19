
String.prototype.format = function() {
	var formatted = this;
	for (var arg in arguments) {
		formatted = formatted.replace("{" + arg + "}", arguments[arg]);
	}
	return formatted;
};

function print(format, ...args) {
	
	document.write(format.format(...args));
	/*document.write("{0}".format(String(1)));*/
}