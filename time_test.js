let fastSqrt = require('./main.js');
let priblSqrt = require('./pribl.js');
let fs = require('fs');
let x=[], pribl2=[], pribl3=[], pribl4=[], pribl5=[];
let a = JSON.parse(fs.readFileSync('./a.json','utf-8'));
let b = JSON.parse(fs.readFileSync('./b.json','utf-8'));
let q = JSON.parse(fs.readFileSync('./q.json','utf-8'));
for (let i=0;i<20;i++) {
	x.push(BigInt(a[i])**2n+BigInt(q[i])*BigInt(b[i])**2n);
}
//console.log(1n << 52n);
let upTo = 312500;
let start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			fastSqrt(x[j]);
		}
	}
let end = new Date().getTime();
console.log("Обычный",end-start)

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			priblSqrt(x[j],BigInt(a[j]));
		}
	}
end = new Date().getTime();
console.log("1-е прибл = a",end-start);

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			pribl2.push(BigInt(a[j])+BigInt(b[j]));
			priblSqrt(x[j],pribl2[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = a+b",end-start);

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			pribl3.push(2n*(BigInt(a[j])+BigInt(b[j])*fastSqrt(BigInt(q[j])))/3n);
			priblSqrt(x[j],pribl3[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = 2*(a+b*sqrt(q))/3",end-start);

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			pribl4.push((BigInt(a[j])+BigInt(b[j])*fastSqrt(BigInt(q[j])))/2n);
			priblSqrt(x[j],pribl4[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = (a+b*sqrt(q))/2",end-start);

start= new Date().getTime();
for (let i=0;i<upTo;i++){
	for(let j=0;j<20;j++){
		let xlen = x[j].toString().length;
		if (xlen%2==0) {
			pribl5.push(10n**(BigInt(xlen/2)));
		} else {
			pribl5.push(4n*10n**(BigInt((xlen)/2)));
		}
		priblSqrt(x[j], pribl5[j]);
	}
}
end = new Date().getTime();
console.log("1-е прибл = 10^(l/2)",end-start);
