var sqrt = function (value) {
	if (value < 2n) {
		return value;
	}

	if (value < 16n) {
		return BigInt(Math.floor(Math.sqrt(Number(value))));
	}
	
	if(value < (1n << 52n)){
		var x1 = BigInt(Math.floor(Math.sqrt(Number(value))))-3n;
	} else {
		let vlen = value.toString().length;
		if (vlen%2==0) {
			var x1 = 10n**(BigInt(vlen/2));
		} else {
			var x1 = 4n*10n**(BigInt(Math.floor(vlen/2)));
		}
	}

	let x0 = -1n;
	while((x0 !== x1 && x0 !== (x1 - 1n))){
		x0 = x1;
		x1 = ((value / x0) + x0) >> 1n;
	}
	return x0;
}

module.exports = sqrt;
