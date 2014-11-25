var longWords = ["hello", "hi", "hey", "hola", "aloha","mississippi"];
var number = parseInt(process.argv[2]);


function filterLongWords(x,y) {
	var newLongWords = [];
	for (i = 0; i < y.length; i++) {

		if (y[i].length > x ) {
			 newLongWords.push(y[i]);
		}
	}
	return newLongWords
}

console.log(filterLongWords(number,longWords));