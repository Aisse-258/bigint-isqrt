const i52 = 1n << 52n;

const sqrt = function (value) {
	if (value < 2n) {
		return value;
	}

	if (value < 16n) {
		return BigInt(Math.sqrt(Number(value)|0));
	}
	
	let x1;
	if(value < i52){
		x1 = BigInt((Math.sqrt(Number(value))|0) - 3);
	} else {
		const vlen = value.toString().length;
		if (!(vlen&1)) {
			x1 = 10n**(BigInt(vlen/2));
		} else {
			x1 = 40n**(BigInt((vlen/2)|0));
		}
	}

	let x0;
	do {
		x0 = x1;
		x1 = ((value / x0) + x0) >> 1n;
	} while ((x0 !== x1 && x0 !== (x1 - 1n)));
	return x0;
}

module.exports = sqrt;
