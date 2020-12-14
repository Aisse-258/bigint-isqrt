# bigint-isqrt
======================

[![NPM](https://nodei.co/npm/bigint-isqrt.png?downloads=true&stars=true)](https://nodei.co/npm/bigint-isqrt/)

A function that returns the square root (or it's [floor](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions)-ed value if the root is not an integer) of a [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) number.

======================

example:
```
var sqrt = require('bigint-isqrt');

var r1 = BigInt('25');
console.log("Square root of 25 = ",sqrt(r1));//Square root of 25 = 5

r1 = BigInt('82120471531550314555681345949499512621827274120673745141541602816614526075010755373654280259022317599142038423759320355177481886719814621305828811322920076213800348341464996337890625');
console.log(sqrt(r1));//9062034624274524065844376014975805577107171799890766992670739972241112960081909332275390625n

//No error with negative numbers
//You should take care of `BigInt` to be not negative number.
//No built-in checks for this are implemented.
//This function had been made as the fastest way to count square root

r1 = BigInt('-25');
console.log(sqrt(r1));//-25n

```
