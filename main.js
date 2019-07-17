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
        var x1 = (1n << 52n) - 2n;
    }

    let x0 = -1n;
    while((x0 !== x1 && x0 !== (x1 - 1n))){
        x0 = x1;
        x1 = ((value / x0) + x0) >> 1n;
    }
    return x0;
}

module.exports = sqrt;
