let obj = {
	myname:"nameeeeee",
	address:"seoul",
	age:30
};

let { myname, ...otherInfo } = obj;

console.log(`name : ${myname}`);
console.log(`age : ${otherInfo.age}`);

/*
object3.js
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var obj = {
    myname: "nameeeeee",
    address: "seoul",
    age: 30
};
var myname = obj.myname, otherInfo = __rest(obj, ["myname"]);
console.log("name : " + myname);
console.log("age : " + otherInfo.age);
*/