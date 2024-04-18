// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// Where every number is the sum of the two previous ones.
// e.g. 0, 1, 1, 2, 3, 5 comes from
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5

//  so while n is greater than the length of the array
// add the previous to items together
// push the result to the end of the array
// finally output the array
function fib(n) {
	let output = [0, 1];

	if (n <= 2) {
		return output.slice(0, n);
	} else {
		while (output.length < n) {
			let lastNum = output[output.length - 1];
			let secondLastNum = output[output.length - 2];
			output.push(lastNum + secondLastNum);
		}
	}

	return output;
}

console.log(fib(4)); // [0, 1, 1, 2]
