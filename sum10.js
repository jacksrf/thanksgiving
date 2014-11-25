var sumTen = function() {
	var a = parseInt(process.argv[2]);
	var b = parseInt(process.argv[3]);
	
if ((a === 10 || b === 10) || (a + b === 10)) {
    return true;
  }
  else {
  	return false
  }
}

console.log(sumTen());