let obj:
{
	myname:string,
	myage?:number
} = 
{
	myname:"kim",
};

let
{
	myname:uNmae,
	myage:uAge = 30
} = obj;

console.log(uNmae);
console.log(uAge);