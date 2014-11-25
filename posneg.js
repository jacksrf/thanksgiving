// var a = parseInt(process.argv[2]);
// var b = parseInt(process.argv[3]);

var posNeg = function() {
	var a = parseInt(process.argv[2]);
	var b = parseInt(process.argv[3]);
if (( a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(posNeg());
