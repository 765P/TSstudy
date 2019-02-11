function myFunc(): {result1:string, result2?:number}
{
	let obj = 
	{
		result1:"",
		result2:0
	};

	obj.result1 = "first result";
	obj.result2 = 100;

	return obj;
}

let 
{
	result1:first,
	result2:second
} = myFunc();

console.log(first);
console.log(second);


/*
function myFunc() {
    var obj = {
        result1: "",
        result2: 0
    };
    obj.result1 = "first result";
    obj.result2 = 100;
    return obj;
}
var _a = myFunc(), first = _a.result1, second = _a.result2;
console.log(first);
console.log(second);
*/