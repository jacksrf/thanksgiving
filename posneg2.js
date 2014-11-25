var posNeg = function() {
	var a = parseInt(process.argv[2]);
	var b = parseInt(process.argv[3]);
	var c = process.argv[4];
if (( a < 0 && b > 0 && c = false) || (a > 0 && b < 0 && c = false)) {
    return true;
  }
  else if ( a < 0 && b < 0 && c = true) {
    return true;
  } else {
  	return false
  }
}

console.log(posNeg());