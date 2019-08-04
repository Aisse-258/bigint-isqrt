
var bitLength = function (value) {
	return BigInt(value.toString(16).length * 4);
};

var sqrt = function (value) {
	if (value < 2n) {
		return value;
	}

	if (value < 16n) {
		return BigInt(Math.floor(Math.sqrt(Number(value))));
	}
	
	if(value < (1n << 52n)){
		return BigInt(Math.floor(Math.sqrt(Number(value) + 0.5)));
	}
	let e = bitLength(value);
	let quarter = ((e + 2n) / 4n);
	let half = quarter * 2n;
	let x1 = (sqrt(value >> half) + 1n) << quarter;

	let x0 = -1n;
	while((x0 !== x1 && x0 !== (x1 - 1n))){
		x0 = x1;
		x1 = ((value / x0) + x0) >> 1n;
	}
	return x0;
}

module.exports = sqrt;
