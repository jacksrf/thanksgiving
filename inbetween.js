var number1 = parseInt(process.argv[2]);
var number2 = parseInt(process.argv[3]);

if (number1 < number2) {
  for (i=(number1+1); i < number2; i++) {
  	console.log(i);
} }
else if (number2 < number1) {
  for (i=(number2+1); i < number1; i++) {
  	console.log(i)
} }
else { console.log("equal");
};











