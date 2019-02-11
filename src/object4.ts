let obj = 
{
	a:"kim",
	b:"park",
	c:30
};

let 
{
	a:name1,
	b:name2
} : 
{
	a:string,
	b:string
} = obj;

console.log(`name1 : ${name1}`);
console.log(`name2 : ${name2}`);

/*
object4.js
var obj = {
    a: "kim",
    b: "park",
    c: 30
};
var name1 = obj.a, name2 = obj.b;
console.log("name1 : " + name1);
console.log("name2 : " + name2);

*/