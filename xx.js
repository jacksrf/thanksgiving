var word = process.argv[2];

var xCounter = function(word) {
	var i = 0;
	var number = 0;
		while(i < word.length) {
			var a = word.charAt(i);
			var b = word.charAt(i+1);
		  if ( a === "x" && b === "x" ) {
		    	number += 1;
		    }
		  	i++;
		}
		return number
	}
	


console.log(xCounter(word));