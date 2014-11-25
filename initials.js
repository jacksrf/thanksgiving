

var initials = function() {
	var name = process.argv[2];
	var letters = "";
// make the name into an array
	var nameArray = name.split(" ");
// get first letter of each part of array	
	for (i = 0; i < nameArray.length; i++) {
// put those letters into a new string
			var x = (nameArray[i]);
			var n = x.charAt(0);
			letters += n;
		}
	var initials = letters.toUpperCase();
	return initials
}

console.log(initials());