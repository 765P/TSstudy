let obj = {
	ke1 : "hello, world",
	ke2 : 100,
	ke3 : "Type Script"
};

let {ke1:a, ke3:b} = obj;

//let { ke1:a, ke2:b } = obj;

console.log(a);
console.log(b);