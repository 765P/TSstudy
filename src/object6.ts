//ECMAScript 응용 코드입니다. 참고 필요 x


let map = new Map();

map.set("myName","hong");
map.set("myAddress","seoul");
map.set("myAge","30");

for(let [key, value] of map)
{
	console.log(`${key} is ${value}`);
}

for(let [key] of map)
{
	//only key 
	console.log(`${key}`);
}

for(let [,value] of map)
{
	//only value
	console.log(`${value}`);
}

/*
var map = new Map();
map.set("myName", "hong");
map.set("myAddress", "seoul");
map.set("myAge", "30");
for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
    var _a = map_1[_i], key = _a[0], value = _a[1];
    console.log(key + " is " + value);
}
for (var _b = 0, map_2 = map; _b < map_2.length; _b++) {
    var key = map_2[_b][0];
    //only key 
    console.log("" + key);
}
for (var _c = 0, map_3 = map; _c < map_3.length; _c++) {
    var _d = map_3[_c], value = _d[1];
    //only value
    console.log("" + value);
}

*/