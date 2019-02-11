function myFunc(): string[] 
{
	let arr:string[] = [];

	arr[0] = "first logic";
	arr[1] = "second logic";

	return arr;
}

let [result1, result2] = myFunc();

console.log(result1);
console.log(result2);

/*
object7.js
function myFunc() {
    var arr = [];
    arr[0] = "first logic";
    arr[1] = "second logic";
    return arr;
}
var _a = myFunc(), result1 = _a[0], result2 = _a[1];
console.log(result1);
console.log(result2);
*/
