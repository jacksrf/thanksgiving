

var withoutEnd = function() {
	var x = process.argv[2];
	var i = 1;
	var newWord = '';
		while(i < x.length) {
			var n = x.charAt(i);
		  	if ( i < (x.length-1)) {
		    	newWord += (n);
		  		}
		  	i++;
		    }
		return newWord;  	
		}
		
console.log(withoutEnd());
	