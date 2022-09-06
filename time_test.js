let fastSqrt = require('./main');
let priblSqrt = require('./pribl');
let fs = require('fs');
let x=[], pribl1=[], pribl2=[], pribl3=[], pribl4=[], pribl5=[];
let a = JSON.parse(fs.readFileSync('./a.json','utf-8'));
let b = JSON.parse(fs.readFileSync('./b.json','utf-8'));
let q = JSON.parse(fs.readFileSync('./q.json','utf-8'));
for (let i=0;i<20;i++) {
	//console.log(a[i]);
	pribl1.push(BigInt(a[i]));
	pribl2.push(pribl1[i]+BigInt(b[i]))
	pribl3.push(2n*(pribl1[i]+BigInt(b[i])*fastSqrt(BigInt(q[i])))/3n);
	pribl4.push(2n*pribl1[i]*BigInt(b[i]));
	pribl5.push((pribl1[i]+BigInt(b[i])*fastSqrt(BigInt(q[i])))/2n);
	x.push(pribl1[i]^2n+BigInt(q[i])*BigInt(b[i])^2n);
}
//console.log(1n << 52n);
let upTo = 625000;
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
			priblSqrt(x[j],pribl1[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = a",end-start);

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			priblSqrt(x[j],pribl2[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = a+b",end-start);

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			priblSqrt(x[j],pribl3[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = 2*(a+b*sqrt(q))/3",end-start);

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			priblSqrt(x[j],pribl4[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = 2*a*b",end-start);

start= new Date().getTime();
	for (let i=0;i<upTo;i++){
		for(let j=0;j<20;j++){
			priblSqrt(x[j],pribl5[j]);
		}
	}
end = new Date().getTime();
console.log("1-е прибл = (a+b*sqrt(q))/2",end-start);
