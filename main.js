var sqrt = function (value) {
	if (value < 2n) {
		return value;
	}

	if (value < 16n) {
		return BigInt(Math.sqrt(Number(value))|0);
	}
	
    let x0, x1;
	if(value < 4503599627370496n){//1n<<52n
		x1 = BigInt(Math.sqrt(Number(value))|0)-3n;
	} else {
		let vlen = value.toString().length;
		if (!(vlen&1)) {
			x1 = 10n**(BigInt(vlen/2));
		} else {
			x1 = 4n*10n**(BigInt((vlen/2)|0));
		}
	}

	do {
		x0 = x1;
		x1 = ((value / x0) + x0) >> 1n;
	}while((x0 !== x1 && x0 !== (x1 - 1n)));
	return x0;
}

module.exports = sqrt;
