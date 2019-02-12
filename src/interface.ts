interface IBook {
	bookName:string;
	bootAuthor:string;
}

let myBook: IBook;

myBook = {
	bookName:"book name",
	bootAuthor:"Author"
};

console.log(myBook);

/*
interface.js
var myBook;
myBook = {
    bookName: "book name",
    bootAuthor: "Author"
};
console.log(myBook);

*/