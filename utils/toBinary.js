export default function toBinary(x) {
	let input = x;
	let output = '';
	for (var i = 0; i < input.length; i++) {
		output += input[i].charCodeAt(0).toString(2) + ' ';
	}
	return output;
}
